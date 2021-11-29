
import React from 'react';
import "./Header.css";
import Boton from "../Boton/Boton";
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../../images/logo1.png';

const Header = (props) => {
    const history = useNavigate();
    const llevame = () => {
        history("/");
    }

    return (
        <div className="desingHeader">
            <div>
                <img id="logo" src={logo} alt="logo" onClick={() => llevame()} />
            </div>
            <div id="menu">
            <Boton destino="Home" url="/" />
            <Boton destino="Login" url="/login" />
            <Boton destino="Register" url="/register" />
            <Boton destino="Profile" url="/profile" />
            </div>
        </div>
    )
};

export default connect((state) => (
    {
        userLog: state.credentials
    }
))(Header);