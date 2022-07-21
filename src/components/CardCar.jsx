import React from "react";

import { RiDeleteBinLine } from 'react-icons/ri'

const CardCar = ({image, name, price, quantity, id,idProd, increaseProduct , decrementProduct, handleDelete}) => {

    const reducePrice = (price * quantity).toFixed(2)

    return (
        <div className="cardCar_container">
            <img src={`https://codealo-commerce-cms.onrender.com${image}`} alt="img" />
            <h1>{name}</h1>
            <div>
                <button onClick={() => decrementProduct(id)}>-</button>
                <h3>{quantity}</h3>
                <button onClick={()=> increaseProduct(id)}>+</button>
            </div>
            <h2>{`$${reducePrice}`}</h2>
            <div onClick={() => handleDelete(idProd)} style={{cursor:"pointer"}}>
                <RiDeleteBinLine size={20} style={{ color: "red" }} />
            </div>

        </div>
    )
}

export default CardCar;