import React from "react";

const ProfileBox = ({isOpen, handleHistory, toggleModalLogOut, toggleIsOpen}) => {

    const handleHistorial = () => {
        handleHistory()
        toggleIsOpen()
    }

    const handleCerrar = () => {
        toggleModalLogOut()
        toggleIsOpen()
    }

    return(
        <div className={isOpen ? "box_container" : "box_container_hidden"}>
            <h3 onClick={() => handleHistorial()}>Historial</h3>
            <h3 onClick={() => handleCerrar()}>Cerrar Sesión</h3>
        </div>
    )
}

export default ProfileBox;