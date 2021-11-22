
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { LOGIN } from '../../redux/types';

import './Login.css';


const Login = (props) => {

    const navigate = useNavigate();

    //Hooks
    const [msgError, setmsgError] = useState("");
    const [credentials, setCredentials] = useState({ correo: '', clave: '' });

    //Handler o manejador
    const manejadorInputs = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const logeame = async () => {

        let body = {
            email: credentials.email,
            password: credentials.password
        };

        try {

            let res = await axios.post("https://rgg-backend-videoclub.herokuapp.com/users/signin", body);
            setmsgError(`Hola de nuevo ${res.data.user.name}....`);

            //MÉTODO NO VÁLIDO PRE-REDUX
            //localStorage.setItem("datosLogin", JSON.stringify(res.data.usuario));
            //////////////////////////////////////////////

            //Guardamos en REDUX
            let datos = res.data;

            props.dispatch({ type: LOGIN, payload: datos });

            /*setTimeout(() => {
                navigate("/profile");
            }, 4000);*/
        } catch (error) {
            setmsgError(error);

        }

    }


    return (

        <div className="designLogin">
            {/*<pre>{JSON.stringify(credentials, null,2)}</pre>*/}
            <input type='email' name='email' title='email' onChange={manejadorInputs} lenght='30' />
            <input type='password' name='password' title='password' onChange={manejadorInputs} lenght='30' />
            <div className="sendButton" onClick={() => logeame()}>Login</div>
            <div className="error">{msgError}</div>
        </div>
    )
};

export default connect()(Login);