import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import CardCar from '../components/CardCar'
import Swal from 'sweetalert2'
import { changeCarById, createOrder } from "../redux/action";

const Purchase = () => {

    const dispatch = useDispatch()
    const userSignIn = useSelector((state) => state.userSignIn);
    const car = useSelector(state => state.car)
    const carRaw = useSelector(state => state.carRaw)
    const { userInfo } = userSignIn;
    const [ render, setRender ] = useState(false)
    const history = useNavigate()

    console.log('user', userInfo)


    let carrito =  null
    let raw = null;
    if(car){
        carrito = car.products_in_cart;
        raw = carRaw
        var total = 0;
        for(let i = 0; i < carrito.length; i++){
            total = total + (carrito[i].quantity * carrito[i].product.price)
        }
        var result = total.toFixed(2)
    }

  const handleClick = () => {
    history("/productos")
  }

    const handlPay = () => {
        Swal.fire({
            title: 'Desea realizar la compra?',
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Comprar!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              let timerInterval
              Swal.fire({
                title: 'Comprando...',
                html: '',
                timer: 3000,
                timerProgressBar: true,
                didOpen: () => {
                  Swal.showLoading()
                  const b = Swal.getHtmlContainer().querySelector('b')
                  timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                  }, 100)
                },
                willClose: () => {
                  clearInterval(timerInterval)
                }
              }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    dispatch(changeCarById(userInfo.user.id, 
                        {
                            products_in_cart: []
                        }))
                  history("/gracias")
                }
              }).then(
                dispatch(createOrder({
                    cart: userInfo.user.id
                }, userInfo.jwt))
              )
            }
        })
    }

    const increaseProduct = (ids) => {
        carrito.map(p => {
            if(p.id === ids){
                p.quantity = p.quantity + 1;
                raw.map( r => {
                    if(r.product.id === p.product.id){
                        r.quantity = r.quantity + 1;
                    }
                })
                dispatch(changeCarById(userInfo.user.id,
                    {
                        products_in_cart: raw
                    }
                    ))
            }
        })
        setRender(!render)
    }

    const decrementProduct = (ids) =>{
        carrito.map(p => {
            if(p.id === ids && p.quantity > 1){
                p.quantity = p.quantity - 1;
                raw.map( r => {
                    if(r.product.id === p.product.id){
                        r.quantity = r.quantity - 1;
                    }
                })
                dispatch(changeCarById(userInfo.user.id,
                    {
                        products_in_cart: raw
                    }
                ))
            }
        })
        setRender(!render)
    }

    const handleDelete = (idProd) => {
        Swal.fire({
            title: 'Deseas eliminar el producto de tu carrito?',
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Eliminado!',
                'El producto ha sido eliminado.',
                'success'
              )
              const productDelete = raw.filter( p => p.product.id !== idProd)
              dispatch(changeCarById(userInfo.user.id,
                {
                    products_in_cart: productDelete
                }
            ))
            }
          })
    }

    return (
        <div className="purhcase_container">
            {
                userInfo ? 
                <div> 
                    {
                        carrito && carrito.length === 0 ?
                        <div className="purchase_none">
                            <h1>Tu carrito actualmente esta vacio</h1>
                            <p>¿No sabes que comprar?</p>
                            <button onClick={() => handleClick()}>Ir a todos los productos</button>
                        </div>
                        :
                        <div className="purchase_div">
                            {
                                carrito && carrito.map(c => (
                                    <div key={c.id}>
                                        <CardCar 
                                            image={c.product.image.url}
                                            name={c.product.title}
                                            price={c.product.price}
                                            quantity={c.quantity}
                                            id={c.id}
                                            idProd = {c.product.id}
                                            decrementProduct={decrementProduct}
                                            increaseProduct={increaseProduct}
                                            handleDelete={handleDelete}
                                        />
                                    </div>
                                ))
                            }
                            <hr></hr>
                            <div className="purchase_pay">
                                <h2>Total a pagar</h2>
                                <h1>{`$${result}`}</h1>
                            </div>
                            <button className="purchase_button" onClick={() => handlPay()}>Pagar</button>
                        </div>
                    }
                </div>
                :
                <div className="purshase_unsuscribe">
                    <h1>Inicia sesón para entrar al carrito</h1>
                </div>
            }
        </div>
    )
};

export default Purchase;