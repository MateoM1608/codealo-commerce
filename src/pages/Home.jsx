import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import banner from '../assets/images/TECHSHOP.png'
import CardProduct from '../components/CardProduct'
import {getAllProducts, GetCarById } from '../redux/action/index'
import Swal from 'sweetalert2'

const Home = () => {

    const dispatch = useDispatch()
    const products = useSelector(state => state.products);
    const userSignIn = useSelector((state) => state.userSignIn);
    const carRaw = useSelector(state => state.carRaw)
    const { userInfo } = userSignIn;


    let raw = null;
    carRaw ? raw = carRaw : raw = null


    useEffect(() => {
        dispatch(getAllProducts())
    },[])

    return (
        <div className="home_container">
            <img src={banner} className="home_banner" alt="img" />
            <Link to="/productos" style={{textDecoration:"none"}}>
                <h1>Todos los productos</h1>
            </Link>
            <div className="home_cards">
                {
                    products && products.slice(0,3).map(p => (
                        <div key={p.id}>
                            <CardProduct 
                                name={p.title}
                                image={p.image.url}
                                price={p.price}
                                imgName={p.image.name}
                                slug={p.slug}
                                userInfo={userInfo}
                                idP={p.id}
                                raw={raw}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Home;