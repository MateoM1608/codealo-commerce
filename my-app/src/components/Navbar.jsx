import React from "react";
import { Link, useNavigate } from 'react-router-dom'
import { GiShoppingCart } from 'react-icons/gi'
import { FaRegUser } from 'react-icons/fa'


const Navbar = ({toggleModalSignUp, toggleModalLogin, userInfo, toggleModalLogOut}) => {

    const history = useNavigate()

    const handleHistory = () => {
        history("/compras")
    }

    const handleCart = () => {
        history("/comprar")
    }

    console.log('log', userInfo)
    return (
        <nav >
            {
                userInfo && userInfo ?
                <div className="navBar_Container">
                    <div>
                        <Link to="/" style={{textDecoration:"none"}}>
                            <h1>TechShop</h1>
                        </Link>
                    </div>
                    <div className="navBar_user">
                        <p onClick={() => toggleModalLogOut()}>Cerrar sesión</p>
                        <FaRegUser size={20} style={{ color: "rgb(209, 209, 209)" }} />
                        <h2>{userInfo.user.username}</h2>
                        <h3 onClick={() => handleHistory()}>Historial</h3>
                        <GiShoppingCart onClick={() => handleCart()} size={20} style={{ color: "rgb(209, 209, 209)", cursor:"pointer" }}/>
                    </div>
                </div>
                :
                <div className="navBar_Container">
                    <div>
                        <Link to="/" style={{textDecoration:"none"}}>
                            <h1>TechShop</h1>
                        </Link>
                    </div>
                    <div className="navBar_home">
                        <button onClick={() => toggleModalSignUp() }>Registrarse</button>
                        <button onClick={() => toggleModalLogin()}>Iniciar sesión</button>
                        <GiShoppingCart size={20} style={{ color: "rgb(209, 209, 209)" }} />
                    </div>
                </div>
            }
        </nav>
    )
};

export default Navbar;