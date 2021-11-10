
import React, { useState, useEffect } from 'react';

import axios from 'axios';
import load from '../../Assets/img/load.gif';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {

    let navigate = useNavigate();

    const [peliculas, setPeliculas] = useState([]);


    useEffect(() => {

        setTimeout(() => {

            traePeliculas();
        }, 3000);



    }, []);

    useEffect(() => {

    });

    const traePeliculas = async () => {


        let res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=51c1099989a6923f3d12154210fc2cf7&language=en-US&page=1");

        setPeliculas(res.data.results);



    };

    const escogePelicula = (peliculaEscogida) => {
        localStorage.setItem("choosenFilm", JSON.stringify(peliculaEscogida));

        //redirigire a el perfil de la película....
        navigate("/profPelicula");
    }

    if (peliculas[1]?.title) {

        return (
            <div className="displayPeliculas">
                {
                    peliculas.map((peli) => {
                        return (
                            <div className="peli" key={peli.id}>
                                <img alt={peli.id} className="cartel" onClick={() => escogePelicula(peli)} src={`https://image.tmdb.org/t/p/original/${peli.poster_path}`} />
                            </div>
                        )
                    })
                }

            </div>
        )

    } else {

        return (
            <div className="inicio">
                <img className="loader" src={load} />
            </div>
        )
    }


}

export default Home;