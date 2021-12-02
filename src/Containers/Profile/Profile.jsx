
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './Profile.css';
import { LOGOUT, UPDATE_USER, PEDIDO_PELICULA } from '../../redux/types';
import axios from 'axios';

const Profile = (props) => {

    const [msgError, setmsgError] = useState("");
    const [userData, setUserData] = useState(props.credentials.user);
    const [pedido_peliculas, setPEDIDO_PELICULA] = useState([]);

    const manejaInputs = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }

    let config = {
        headers: { Authorization: `Bearer ${props.credentials.token}` }
    };

    const PEDIDO_PELICULA = async () => {
        let res = await axios.get(`https://rgg-backend-videoclub.herokuapp.com/orders/userId/${props.credentials.user.id}`, config);
        setPEDIDO_PELICULA(res.data);
    };
 
    const logOut = () => {
        props.dispatch({ type: LOGOUT });
    }

    useEffect(() => {
        setUserData(props.credentials.user);

    }, [props.credentials]);

    useEffect(() => {

        PEDIDO_PELICULA()
    }, [])

    if (props.credentials?.token !== '') {
        return (

            <div className="designProfile">
                <div className="pedidopadre">
                    <h5 className="orders">ORDERS</h5>
                    {
                        pedido_peliculas.map((pedido) => {
                            return (
                                <div className="pedido">
                                    {
                                        pedido.title

                                    } : {
                                        pedido.precio
                                    }
                                </div>

                            )
                        })
                    }
                </div>
                <div className="recuadroperfilInfo">
                    <h5 className="datosperfil">PROFILE DATA</h5>

                    <div>User name: {props.credentials.user.name}</div>
                    <div>Email: {props.credentials.user.email}</div>
                    <div>City: {props.credentials.user.city}</div>
                    <div id="logout" onClick={() => logOut()}>Logout</div>
                </div>
            </div>


        )
    } else {
        return (
            <div className="designProfile">
                Usuario desconectado correctamente
            </div>
        )
    };

}
export default connect((state) => ({
    credentials: state.credentials
}))(Profile);