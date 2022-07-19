import React from "react";
import { useNavigate } from "react-router-dom";

const Thanks = () => {

    const history = useNavigate()
    const handleHistory = () => {
        history("/compras")
    }

    const handleProducts = () => {
        history("/productos")
    }

    return (
        <div className="thanks_container">
            <h1>GRACIAS POR TU COMPRA</h1>
            <h2>Podrás encontrar el resumen de tu compra <span onClick={() => handleHistory()}>aquí</span></h2>
            <h3 onClick={() => handleProducts()}>Comprar otros productos</h3>
        </div>
    )
}

export default Thanks;