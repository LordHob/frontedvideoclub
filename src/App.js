
import './App.css';
import '../src/Scss/variables.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Containers/Home/Home';
import Header from './Components/Header/Header';
import Login from './Containers/Login/Login';
import Profile from './Containers/Profile/Profile';
import Peliculas from './Containers/Peliculas/Peliculas';
import ProfPelicula from './Containers/ProfPelicula/ProfPelicula';
import Register from './Containers/Register/Register';
import Home2 from './Containers/Home2/home2';
import Users from './Containers/Users/Users';
import Orders from './Containers/Orders/Orders';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home2" element={<Home2 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/peliculas" element={<Peliculas />} />
          <Route path="/profPelicula" element={<ProfPelicula />} />
          <Route path="/users" element={<Users />} />
          <Route path="/orders" element={<Orders />} />

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
