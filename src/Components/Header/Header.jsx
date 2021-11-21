
import React from 'react';
import "./Header.css";
import Boton from "../Boton/Boton";
import { connect } from 'react-redux';

const Header = (props) => {


    return (
        <div className="desingHeader">
            <Boton destino="Home" url="/" />
            <Boton destino="Login" url="/login" />
            <Boton destino="Register" url="/register" />
            <Boton destino="Profile" url="/profile" />
            {props.userLog.usuario.admin ?
                <div>
                    <Boton destino="Orders" url="/orders" />
                    <Boton destino="Users" url="/users" />
                </div>
                : ''
            }
        </div>
    )
}

export default connect((state) => (
    {
        userLog: state.credentials
    }
))(Header);