
import './App.css';
import '../src/Scss/variables.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Containers/Home/Home';
import Header from './Components/Header/Header';
import Login from './Containers/Login/Login';
import Profile from './Containers/Profile/Profile';
import Peliculas from './Containers/Peliculas/Peliculas';
import ProfPelicula from './Containers/ProfPelicula/ProfPelicula';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/peliculas" element={<Peliculas/>} />
          <Route path="/profPelicula" element={<ProfPelicula/>}/>


        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
