import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom'
import { GiShoppingCart } from 'react-icons/gi'
import { FaRegUser } from 'react-icons/fa'
import ProfileBox from "./ProfileBox";


const Navbar = ({toggleModalSignUp, toggleModalLogin, userInfo, toggleModalLogOut}) => {

    const [ isScrolled, setIsScrolled ] = useState(false)
    const [ isOpen , setIsOpen ] = useState(false)
    const car = useSelector(state => state.car)
    const history = useNavigate()

    const handleHistory = () => {
        history("/compras")
    }

    const handleCart = () => {
        history("/comprar")
    }

    const toggleIsOpen = ( ) => {
        setIsOpen(!isOpen)
    }

    const navScroll = () => {
        if(window.scrollY >= 10){
            setIsScrolled(true)
        }else{
            setIsScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", navScroll)

        return () => {
            window.removeEventListener("scroll", navScroll)
        }
    })
    

    return (
        <nav>
            {
                userInfo && userInfo ?
                <div className={ !isScrolled ? "navbar_container" : "navbar_container_scroll"}>
                    <div>
                        <Link to="/" style={{textDecoration:"none"}}>
                            <h1>TechShop</h1>
                        </Link>
                    </div>
                    <div className={ !isScrolled ? "navBar_user": "navBar_user_scroll"}>
                        {/* <p onClick={() => toggleModalLogOut()}>Cerrar sesión</p> */}
                        <h2 onClick={() => toggleIsOpen()}>{userInfo.user.username}</h2>
                        <FaRegUser size={20} style={{ color: "rgb(209, 209, 209)" }} />
                        {/* <h3 onClick={() => handleHistory()}>Historial</h3> */}
                        <div>
                        <GiShoppingCart onClick={() => handleCart()} size={20} style={{ color: "rgb(209, 209, 209)", cursor:"pointer" }}/>
                        <span className={ car && car.products_in_cart.length === 0 ? "navNar_quantity_hidden" : "navNar_quantity"}>{ car && car.products_in_cart.length}</span>
                        </div>
                    </div>
                    <ProfileBox 
                        isOpen={isOpen}
                        handleHistory={handleHistory}
                        toggleModalLogOut={toggleModalLogOut}
                    />
                </div>
                :
                <div className={ !isScrolled ? "navbar_container" : "navbar_container_scroll"}>
                    <div>
                        <Link to="/" style={{textDecoration:"none"}}>
                            <h1>TechShop</h1>
                        </Link>
                    </div>
                    <div className={ !isScrolled ? "navBar_home" : "navBar_home_scroll"}>
                        <h5 onClick={() => toggleModalLogin()}>Iniciar sesión</h5>
                        <h4 onClick={() => toggleModalSignUp() }>Registrarse</h4>
                        <GiShoppingCart size={20} style={{ color: "rgb(209, 209, 209)" }} />
                    </div>
                </div>
            }
        </nav>
    )
};

export default Navbar;