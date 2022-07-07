import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { postLogIn } from '../redux/action/index'
import Swal from 'sweetalert2'

const LogIn = ({isOpenLogin, toggleModalLogin}) => {

    const dispatch = useDispatch()
    const [ estado , setEstado ] = useState({
        identifier: "",
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
        if(estado.identifier &&  estado.password){
            dispatch(postLogIn(estado))
            toggleModalLogin()
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
        <div className={isOpenLogin? "Modal_open" : "Modal_close"}>
            <div>
            <button onClick={() => toggleModalLogin()}>X</button>
                <h1>Iniciar sesión</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label>Usuario:</label>
                    <input 
                        type="text"
                        value={estado.identifier}
                        name="identifier"
                        onChange={(e) => handleChange(e)}
                    />
                    <label>Contraseña:</label>
                    <input 
                        type="password"
                        value={estado.password}
                        name="password"
                        onChange={(e) => handleChange(e)}
                    />
                    <button>Iniciar sesión</button>
                </form>
            </div>
        </div>
    )
};

export default LogIn