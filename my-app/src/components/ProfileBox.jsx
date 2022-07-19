import React from "react";

const ProfileBox = ({isOpen, handleHistory, toggleModalLogOut}) => {

    return(
        <div className={isOpen ? "box_container" : "box_container_hidden"}>
            <h3 onClick={() => handleHistory()}>Historial</h3>
            <h3 onClick={() => toggleModalLogOut()}>Cerrar Sesión</h3>
        </div>
    )
}

export default ProfileBox;