import React from "react";
import { useNavigate } from "react-router-dom";
import { GiShoppingCart } from 'react-icons/gi'

const Sidebar = ({ toggleSidebar, isOpenSidebar, userInfo, toggleModalLogOut, toggleModalLogin, toggleModalSignUp}) => {
    
    const history = useNavigate()

    const handleCart = () => {
        history("/comprar")
        toggleSidebar()
    }

    const handleHistory = () => {
        history("/compras")
        toggleSidebar()
    }
    
    return (
        <div className={ !isOpenSidebar ? "sidebar_hidden" : "sidebar_container"}>
            <button onClick={() => toggleSidebar()}>X</button>
            {
                userInfo && userInfo ? 
                <div>
                    <div onClick={() => handleCart()}>
                        <h1>Carrito</h1>
                        <GiShoppingCart  size={20} style={{ color: "rgb(209, 209, 209)", cursor:"pointer" }}/>
                    </div>
                    <h1 onClick={() => handleHistory()}>Historial</h1>
                    <h1 onClick={() => toggleModalLogOut()}>Cerrar Sesión</h1>
                </div>
                :
                <div>
                    <h4 onClick={() => toggleModalLogin()}>Iniciar Sesión</h4>
                    <h5 onClick={() => toggleModalSignUp()}>Registrarse</h5>
                </div>
            }
        </div>
    )
}

export default Sidebar;