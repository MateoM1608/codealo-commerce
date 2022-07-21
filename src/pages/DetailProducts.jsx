import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { getProductDetail } from '../redux/action/index'
import Swal from 'sweetalert2'
import { changeCarById } from "../redux/action/index";

const DetailProducts = () => {

    const detailProducts = useSelector(state => state.detailProducts)
    const userSignIn = useSelector((state) => state.userSignIn);
    const { slug } = useParams()
    const carRaw = useSelector(state => state.carRaw)
    const { userInfo } = userSignIn;

    const dispatch = useDispatch()
    const history = useNavigate()

    let raw = null;
    carRaw ? raw = carRaw : raw = null;

    const handleAdd = () => {
        if(userInfo){

            const findPdt = raw.find( p => p.product.id === detailProducts[0].id)
            if(findPdt){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'El producto ya se encuentra en el carrito',
                    footer: '<a href=""></a>'
                  })
            }else{
                raw.push({product: {id:detailProducts[0].id}, quantity: 1})
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

    const handleClick = () => {
        history("/comprar")
    } 

    useEffect(() => {
        dispatch(getProductDetail(slug))
    },[])


    return (
        <div className="detail_container">
            {
                detailProducts.length === 0 ?
                <h1>Cargando...</h1> :
                <div className="detail_alldetail">
                    <img src={`https://codealo-commerce-cms.onrender.com${detailProducts[0].image.url}`} alt={detailProducts[0].image.name} />
                    <div>
                        <h1>{detailProducts[0].title}</h1>
                        <h2>{`$ ${detailProducts[0].price} `}</h2>
                        <p>{detailProducts[0].description}</p>
                        <div>
                            <h3 onClick={() => handleAdd()}>Añadir al carrito</h3>
                            <h4 onClick={() => handleClick()}>Ir al carrito</h4>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
};

export default DetailProducts;