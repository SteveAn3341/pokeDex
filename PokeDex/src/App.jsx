import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Header from './Header';
import Pokedex from './Component/Pokedex';
import PokemonCard from './Component/Pokemoncard';
import MyTeam from './MyTeam';
import { PokemonContext } from './PokemonContext';
import { useState } from 'react'; 


function App() {
  const [caughtPokemons, setCaughtPokemons] = useState([]);
  return (
    <PokemonContext.Provider value={{ caughtPokemons, setCaughtPokemons }}>
    <Router>
       
      <div>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Pokedex />} />
            <Route path="/pokemon/:name" element={<PokemonCard />} />
            <Route path="/myteam" element={<MyTeam/>} />
          </Routes>
        </div>
      </div>
      
    </Router>
     </PokemonContext.Provider>
  );
}

export default App;





