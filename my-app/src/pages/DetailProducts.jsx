import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductDetail } from '../redux/action/index'

const DetailProducts = () => {

    const detailProducts = useSelector(state => state.detailProducts)
    console.log('detalle', detailProducts)
    const { slug } = useParams()
    const dispatch = useDispatch()


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
                            <button>Añadir al carrito</button>
                            <button>Ir al carrito</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
};

export default DetailProducts;