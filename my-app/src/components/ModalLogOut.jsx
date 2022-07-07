import React from "react";
import { useDispatch } from "react-redux";
import { LogOut } from '../redux/action/index'
import Swal from 'sweetalert2'

const ModalLogOut = ({toggleModalLogOut, isOpenLogOut}) => {


    const dispatch = useDispatch()

    const handleLogOut = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Su sesión se cerro correctamente',
            showConfirmButton: false,
            timer: 1500
          })
        dispatch(LogOut())
        toggleModalLogOut()
    }

    return (
        <div className={isOpenLogOut ? "logOut_container" : "Modal_close"}>
            <div>
                <h1>Cerrar sesión</h1>
                <p>¿Está seguro de que desea cerrar la sesión?</p>
                <div>
                    <button onClick={() => handleLogOut()}>Si</button>
                    <button onClick={() => toggleModalLogOut()}>No</button>
                </div>
            </div>
        </div>
    )
};

export default ModalLogOut