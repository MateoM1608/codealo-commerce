import React from "react";

const CardHistory = ({date, products, total}) => {

    const dateShort = date.slice(0,10)

    return (
        <div className="cardHistory_container">
            <h1>{dateShort}</h1>
            <div>
                {
                   products.length === 0 ?
                   <h2>Ninguno</h2>
                   :
                    products.map( (p, index) => (
                        <div key={index}>
                            <h3>{p.product.title}</h3>
                        </div>
                    ))
                }
            </div>
            <div>
                {
                        products.lenght === 0 ? 
                        <h2>0</h2>
                        :
                        products.map( (p, index) => (
                        <div key={index}>
                            <h3>{p.product.price}</h3>
                        </div>
                    ))  
                }
            </div>
            <div>
                {
                        products.lenght === 0 ?
                        <h2>0</h2>
                        :
                        products.map( (p, index) => (
                        <div key={index}>
                            <h3>{p.quantity}</h3>
                        </div>
                    ))  
                }
            </div>
            <h1>{products.lenght === 0 ? "$ 0" : `$${total}`}</h1>
        </div>  
    )
}

export default CardHistory