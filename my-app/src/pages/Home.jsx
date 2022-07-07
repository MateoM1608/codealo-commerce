import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import banner from '../assets/images/TECHSHOP.png'
import CardProduct from '../components/CardProduct'
import {getAllProducts } from '../redux/action/index'

const Home = () => {

    const dispatch = useDispatch()
    const products = useSelector(state => state.products)
    const userSignIn = useSelector((state) => state.userSignIn);

    const { userInfo } = userSignIn;
    
    console.log('jwt',userInfo )

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
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Home;