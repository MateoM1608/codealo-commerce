import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from '../redux/action/index'
import CardHistory from "../components/cardHistory";

const HistoryShopping = () => {

    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;
    const orders = useSelector(state => state.orders)

    const dispatch = useDispatch();
    console.log('orders', orders)

    useEffect(()=>{
        dispatch(getOrders(userInfo.jwt))
    },[])

    return(
        <div className="history_container">
            {
                userInfo ? 
                <div>
                    {
                        orders && orders.length === 0 ?
                        <div className="history_div">
                            <h1>No has realizado ninguna compra</h1>
                            <h2>Realizar mi primera compra</h2>
                        </div>
                        :
                        <div className="history_div">
                            <div className="history_rowTitle">
                                <h1>FECHA DE COMPRA</h1>
                                <h1>PRODUCTOS</h1>
                                <h1>VALOR</h1>
                                <h1>CANTIDAD</h1>
                                <h1>TOTAL</h1>
                            </div>
                            {
                                orders && orders.map( o => (
                                    <div key={o.id}>
                                        <CardHistory 
                                            date={o.created_at}
                                            products={o.products}
                                            total={o.total_no_tax}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    }
                </div>
                :
                <div className="history_div">
                    <h1>iniciar sesión para ver historial de compras</h1>
                </div>
            }
        </div>
    )
};

export default HistoryShopping;