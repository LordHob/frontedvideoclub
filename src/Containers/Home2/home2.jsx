import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import Header from '../../Components/Header/Header';
import { connect } from 'react-redux';
import './home2.css'

const Home = (props) => {

    const [movies, setMovies] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {

        showMovies();
    }, [])

    const showMovies = async () => {
        let res = await axios.get("https://rgg-backend-videoclub.herokuapp.com/movies")
        // props.dispatch({ type: loadMovies, payload: res.data })
        setMovies(res.data);



    }
    //FUNCION PARA ALQUILAR PELICULAS
    const alquilarMovie = async (movies) => {   
        const body = {
            movieId: movies.id,
            userId: props.credentials.user.id,
            fecha_alquiler: new Date(),
            fecha_devolucion: new Date()

        }
        let res = await axios.post("https://rgg-backend-videoclub.herokuapp.com/orders", body);
        navigate("/profile");

    }
     //BUSCADOR
    const filtrar = async () => { 
        let input = document.getElementById("buscador").value;
        let res = await axios.get("https://rgg-backend-videoclub.herokuapp.com/movies/title" + input);

        setMovies(res.data);

    }
    return (
        <div className="generalPeliculas">
            {/* <Header /> */}
            <h1 className="tituloPeliculas"><span>LIST OF MOVIES</span></h1>

            <input id="buscador" placeholder="Buscador de peliculas" />
            <button onClick={() => filtrar()}>Buscar</button>
            <div className="displayHome">

                {movies.map((movie) => {
                    return (


                        <div className="designPeliculas" key={movie.id}>
                            <div className="displayPeliculas">
                                <p>ID movie: {movie.id}</p>
                                <p>Título:{movie.title}</p>
                                <p>Género:{movie.genre}</p>
                                <p>Actor:{movie.cast}</p>
                                <div className="sendButton" onClick={() => alquilarMovie(movie)}>ALQUILAR</div>
                            </div>
                        </div>


                    )
                })}
            </div>
        </div >
    )


}

export default connect((state) => ({
    credentials: state.credentials,
}))(Home);