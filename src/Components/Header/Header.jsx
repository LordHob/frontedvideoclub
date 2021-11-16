
import React from 'react';
import "./Header.css";
import Boton from "../Boton/Boton";

const Header = () => {

    return (
        <div className="desingHeader">
                <Boton destino="Home" url="/" />
                <Boton destino="Login" url="/login" />
                <Boton destino="Register" url="/register" />

        </div>
    )
}

export default Header;