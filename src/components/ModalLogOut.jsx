import React from "react";
import { useDispatch } from "react-redux";
import { LogOut } from '../redux/action/index'
import Swal from 'sweetalert2'

const ModalLogOut = ({toggleModalLogOut, isOpenLogOut, reload}) => {


    const dispatch = useDispatch()

    const handleLogOut = () => {
        dispatch(LogOut())

        
    }

    return (
        <div className={isOpenLogOut ? "logOut_container" : "Modal_close"}>
            <div>
                <h1>Cerrar sesión</h1>
                <p>¿Está seguro de que desea cerrar la sesión?</p>
                <div>
                    <button className="logOut_btn1" onClick={() => handleLogOut()}>Si</button>
                    <button  className="logOut_btn2" onClick={() => toggleModalLogOut()}>No</button>
                </div>
            </div>
        </div>
    )
};

export default ModalLogOut