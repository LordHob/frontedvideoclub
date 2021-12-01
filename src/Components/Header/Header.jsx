
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
    console.log(props);
    return (
        <div className="desingHeader">
            <div>
                <img id="logo" src={logo} alt="logo" onClick={() => llevame()} />
            </div>
            <div id="menu">
            <Boton destino="Home" url="/" />
            {!props.userLog?.user && <Boton destino="Login" url="/login" />}
            {!props.userLog?.user && <Boton destino="Register" url="/register" />}
            {props.userLog?.user && <Boton destino="Profile" url="/profile" />}
            {props.userLog?.user?.admin && <Boton destino="Orders" url="/orders" />}
            {props.userLog?.user?.admin && <Boton destino="Users" url="/users" />}
            </div>
        </div>
    )
};

export default connect((state) => (
    {
        userLog: state.credentials
    }
))(Header);