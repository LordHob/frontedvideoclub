
import React from 'react';
import "./Boton.css";
import { useNavigate } from 'react-router-dom';

const Boton = (props) => {

    const navigate = useNavigate();

    const llevame = () => {
        navigate(props.url);
    }

    return (
        <div className="desingBoton" onClick={() => llevame()}>{props.destino}</div>
    )
};

export default Boton;