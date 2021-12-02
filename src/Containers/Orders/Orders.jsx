import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import './Orders.css';

const Admin = (props) => {
    const [datosorders, setdatosorders] = useState("");

    useEffect(() => {

        takeorders();
    }, [])

    const takeorders = async () => {
        try {
            let res_orders = await axios.get("https://rgg-backend-videoclub.herokuapp.com/orders", {
                headers: { Authorization: `Bearer ${props.credentials.token}`}
            });
            setdatosorders(res_orders.data);

        } catch (error) {
        }

    };

    if (props.data_user?.token !== '') {

        return (
            <div>
                <div>
                    <h2>ORDERS</h2>
                    <div className="last-order-titles">
                        <div className="titles-of-last-orders"><p className="colum-components-admin-print-pedidos-titles">USER ID</p></div>
                        <div className="titles-of-last-orders"><p className="colum-components-admin-print-pedidos-titles">MOVIE ID</p></div>
                        <div className="titles-of-last-orders"><p className="colum-components-admin-print-pedidos-titles">RENT DATE</p></div>
                        <div className="titles-of-last-orders"><p className="colum-components-admin-print-pedidos-titles">RETURN DATE</p></div>
                    </div>
                    {datosorders.length > 0 &&
                        <div id="table-home-print">
                            <div className="colum-home-print">
                                {datosorders.map(run => {

                                    return (
                                        <div className="table-print-pedidos">
                                            <div className="table-home-print-n-order">
                                                <p className="colum-components-admin-print-pedidos" key={run._id}>
                                                    {run.userId}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="colum-components-admin-print-pedidos" key={run._id}>
                                                    {run.movieId}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="colum-components-admin-print-pedidos" key={run._id}>
                                                    {run.rentDate}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="colum-components-admin-print-pedidos" key={run._id}>
                                                    {run.returnDate}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
};
    
export default connect((state) => ({
        credentials: state.credentials,
        orders: state.orders,
    }))(Admin);
