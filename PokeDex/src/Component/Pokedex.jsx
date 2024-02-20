import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Pokedex() {
  const [pokemonData, setPokemonData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=30');
      setPokemonData(response.data.results);
    }
    fetchData();
  }, []);


  return (
    <div>
      <h1>Pokedex</h1>
      <table>
        <thead>
          <tr>
            <th>Number</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {pokemonData.map((pokemon, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <Link to={`/pokemon/${pokemon.name}`} >
                  {pokemon.name}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Pokedex;