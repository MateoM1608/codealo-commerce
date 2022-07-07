import React, {useState} from "react";
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2'
import { postSignIn} from '../redux/action/index'

const SignUp = ({toggleModalSignUp, isOpenSignUp}) => {

    const dispatch = useDispatch()
    const [ estado , setEstado ] = useState({
        username: "",
        email: "",
        password: ""
    })


    const handleChange = (e) => {
        setEstado({
            ...estado,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(estado.username && estado.email && estado.password){
            dispatch(postSignIn(estado))
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Hay datos sin llenar!',
                footer: '<a href=""></a>'
            })
        }
    }

    return (
        <div className={isOpenSignUp? "Modal_open" : "Modal_close"}>
            <div>
                <button onClick={() => toggleModalSignUp()}>X</button>
                <h1>Crea una cuenta</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label>Usuario:</label>
                    <input 
                        type="text"
                        value={estado.username}
                        name="username"
                        onChange={(e) => handleChange(e)}
                    />
                    <label>Correo electrónico:</label>
                    <input 
                        type="text"
                        value={estado.email}
                        name="email"
                        onChange={(e) => handleChange(e)}
                    />
                    <label>Contraseña:</label>
                    <input 
                        type="password"
                        value={estado.password}
                        name="password"
                        onChange={(e) => handleChange(e)}
                    />
                    <button>Registrarse</button>
                </form>
            </div>
        </div>
    )
};

export default SignUp