import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import './Users.css';

const Admin = (props) => {
    const [datosusuario, setdatosusuario] = useState("");

    useEffect(() => {

        takeusers();
    }, [])

    const takeusers = async () => {
        try {
            let res = await axios.get("https://rgg-backend-videoclub.herokuapp.com/users", {
                headers: { Authorization: `Bearer ${props.credentials.token}` }
            });

            setdatosusuario(res.data);

        } catch (error) {
            console.log(error);
        }
    };


    if (props.data_user?.token !== '') {

        return (
            <div className="main-container">
                <div className="main-container-one">
                    <h1 className="admin-h1"></h1>
                    <div className="">
                        <h2 className="text-center mt-2">Usuarios Registrados </h2>
                        {datosusuario.length > 0 &&
                            <div>
                                <div className="users-registers-title">
                                    <p className="colum-components-admin-print" >Nombre</p>
                                    <p className="colum-components-admin-print" >Email</p>
                                    <p className="colum-components-admin-print" >Id Usuario</p>
                                    <p className="colum-components-admin-print" >Eliminar Usuarios</p>
                                </div>
                                <div id="table-home-print">
                                    <div className="colum-home-print">
                                        {datosusuario.map(run => {
                                            return (
                                                <p className="colum-components-admin-print-register" key={run._id}>
                                                    {run.nombre}
                                                </p>
                                            )
                                        })}
                                    </div>
                                    <div className="colum-home-print">
                                        {datosusuario.map(run => {
                                            return (
                                                <p className="colum-components-admin-print-register" key={run._id}>
                                                    {run.email}
                                                </p>
                                            )
                                        })}
                                    </div>
                                    <div className="colum-home-print">
                                        {datosusuario.map(run => {
                                            return (
                                                <p className="colum-components-admin-print-register" key={run._id}>
                                                    {run._id}
                                                </p>
                                            )
                                        })}
                                    </div>
                                
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
};
export default connect((state) => ({
    credentials: state.credentials,
    pedidos: state.pedidos,
}))(Admin);
