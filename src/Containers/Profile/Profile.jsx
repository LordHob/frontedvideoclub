
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

    const update = async () => {
        props.dispatch({ type: UPDATE_USER, payload: userData });

        let token = {
            headers: { Authorization: `Bearer ${props.credentials.token}` }
        };

        try {

            let res = await axios.put(`https://rgg-backend-videoclub.herokuapp.com/users/${userData._id}`, userData, token);
            setmsgError(`Datos actualizados ${res.data.user.body}....`);

        } catch (error) {
            setmsgError("Fallo al actualizar datos");
        }
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
                        console.log(pedido_peliculas)
                        // pedido_peliculas.map((pedido) => {
                        //     return (
                        //         <div className="order">
                        //             {
                        //                 pedido.titulo

                        //             } : {
                        //                 pedido.precioalquiler
                        //             }
                        //         </div>
                        //     )
                        // })
                    }
                </div>
                <div className="recuadroperfilInfo">
                    <h5 className="datosperfil">PROFILE DATA</h5>

                    <div>User name: {props.credentials.user.name}</div>
                    <div>Email: {props.credentials.user.email}</div>
                    <div>City: {props.credentials.user.city}</div>
                    <div id="logout" onClick={() => logOut()}>Logout</div>
                </div>
                {/* <pre>{JSON.stringify(userData, null, 2)}</pre> */}

                {/* <div className="user">{props.credentials?.user?.apellidos}</div> */}


                {/* <div className="user">{props.credentials?.user?.telefono}</div>
                <div className="user">{props.credentials?.user?.direccion}</div> */}
            </div>


        )
    } else {
        return (
            <div className="designProfile">
                Usuario deslogueado correctamente
            </div>
        )
    };

}
export default connect((state) => ({
    credentials: state.credentials
}))(Profile);