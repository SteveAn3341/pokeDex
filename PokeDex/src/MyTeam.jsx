import React, { useContext } from 'react';
import { PokemonContext } from './PokemonContext';
import PokemonCard from './Component/Pokemoncard';

function MyTeam() {
  const { caughtPokemons, setCaughtPokemons } = useContext(PokemonContext);

  const releasePokemon = (pokemonName) => {
    setCaughtPokemons(caughtPokemons.filter(pokemon => pokemon.name !== pokemonName));
  };

  return (
    <div>
      <h2>My Team</h2>
      <div className="pokemon-list">
        {caughtPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} onRelease={() => releasePokemon(pokemon.name)} />
        ))}
      </div>
    </div>
  );
}

export default MyTeam;