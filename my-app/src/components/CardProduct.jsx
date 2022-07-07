import React from "react";
import { Link, useNavigate  } from 'react-router-dom'
import Swal from 'sweetalert2'

const CardProduct = ({name, image, price, imgName,slug, userInfo}) => {

    const history = useNavigate ()
    
    const handleClick = () => {
        history(`/productos/${slug}`)
    }

    const handleAdd = () => {
        if(userInfo){

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
            <div onClick={() => handleClick()} className="card_container">
                <img src={`https://codealo-commerce-cms.onrender.com${image}`} alt={imgName}/>
                <h2>{name}</h2>
                <h3>{price}</h3>
                <div>
                    <button onClick={() => handleAdd()}>Añadir al carrito</button>
                </div>

            </div>

    )
}

export default CardProduct