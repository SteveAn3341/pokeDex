import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import '../App.css';
import {Link} from 'react-router-dom';
import { PokemonContext } from '../PokemonContext';


const colorMap = {
  grass: 'lightgreen',
  fire: 'red',
  electric: 'yellow',
  ground: 'brown',
  rock: 'brown',
  water: 'blue',
  psychic: 'purple',
  poison: 'purple',
  dragon: 'silver',
  steel: 'silver',
  flying: 'cyan',
  ice: 'cyan',
  normal: 'gray',
  bug: 'rgb(166,185,26)',
  fairy:'pink'
};

function PokemonCard({pokemon:externalPokemon , onRelease}) {

  const { caughtPokemons, setCaughtPokemons } = useContext(PokemonContext);
  const [pokemonData, setPokemonData] = useState(null);
  const {name} = useParams();

  const catchPokemon = () => {
    if (!caughtPokemons.some(p => p.name === pokemonData.name)) {
      setCaughtPokemons([...caughtPokemons, pokemonData]);
    }
  };

  const releasePokemon = () => {
    onRelease(pokemonData.name);
  };

  useEffect(() => {
    if (externalPokemon) {
      setPokemonData(externalPokemon);
    } else {
      const fetchPokemonData = async () => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        setPokemonData(response.data);
      };
      fetchPokemonData();
    }
  }, [name, externalPokemon]);
  
  if (!pokemonData) { 
    return  <div className="notfound-page" style={{ textAlign: 'center', fontWeight: 'bold', color: 'red' }}>
    No Pokemon found
    <img className="img-404" src="https://pm1.narvii.com/6448/abef6f8bc30b53eae71a2a7d495ab1b5c9e9c025_hq.jpg" />
    </div>

  }

  const { name:pokemonName, sprites, types, moves } = pokemonData;
  const type = types[0].type.name;
  const bgColor = colorMap[type] || 'white';
  const style = { backgroundColor: bgColor };

  return (
    <Card bg={bgColor} text="black" style={style}>
      <Card.Img className = "pic" variant="top" src={sprites.front_default} alt={pokemonName} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <div>
        <p>Moves:</p>
        <ul>
        {moves.slice(0, 4).map((move) => (
        <li key={move.move.name}>{move.move.name}</li>))}
      </ul>
     </div>
     <div><Link to="/"><button>Home</button></Link></div>
     <div><Link to="/myteam"><button onClick={catchPokemon}>catch</button></Link></div>
     <div><Link to="/myteam"><button onClick={releasePokemon}>release</button></Link></div>
</Card.Body>
    </Card>
  );
};

export default PokemonCard;