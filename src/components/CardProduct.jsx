import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate  } from 'react-router-dom'
import { changeCarById } from "../redux/action";
import Swal from 'sweetalert2'

const CardProduct = ({name, image, price, imgName,slug, userInfo,raw, idP}) => {

    const history = useNavigate ()
    const dispatch = useDispatch()
    
    const handleClick = () => {
        history(`/productos/${slug}`)
    }

    const handleAdd = () => {
        if(userInfo){
            
            const findPdt = raw.find( p => p.product.id === idP)
            if(findPdt){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'El producto ya se encuentra en el carrito',
                    footer: '<a href=""></a>'
                  })
            }else{
                raw.push({product: {id:idP}, quantity: 1})
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Producto agregado correctamente',
                    showConfirmButton: false,
                    timer: 1500
                })
                dispatch(changeCarById(userInfo.user.id,
                    {
                        products_in_cart: raw
                    }
                ))
            }

            console.log('add', raw)
        }else{
            Swal.fire({
                title: 'Para agregar al carrito, ingresa a tu cuenta',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
        }
    }

    return(
            <div  className="card_container">
                <img onClick={() => handleClick()} src={`https://codealo-commerce-cms.onrender.com${image}`} alt={imgName}/>
                <h2 onClick={() => handleClick()} >{name}</h2>
                <h3 onClick={() => handleClick()} >{price}</h3>
                <div>
                    <button onClick={() => handleAdd()}>Añadir al carrito</button>
                </div>

            </div>

    )
}

export default CardProduct