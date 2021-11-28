
import React from 'react';
import "./Header.css";
import Boton from "../Boton/Boton";
import { connect } from 'react-redux';

const Header = (props) => {


    return (
        <div className="desingHeader">
            <Boton destino="Home" url="/" />
            <Boton destino="Home2" url="/home2" />
            <Boton destino="Login" url="/login" />
            <Boton destino="Register" url="/register" />
            <Boton destino="Profile" url="/profile" />
            <div id="admin">{props.credentials?.user.admin == true && <Boton destino="Admin" url="/admin" />}</div>
            
        </div>
    )
}

export default connect((state) => (
    {
        userLog: state.credentials
    }
))(Header);