import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { myPokemon } from "../App";
import TestRenderer from "react-test-renderer";
import { PokemonTeamPage } from "../Pages/PokemonTeamPage";

describe("PokemonTeamPage.jsx", () => {
  it("will check pages children", () => {
    let caughtPokemon = [
      {
        moveFour: "scratch",
        moveOne: "mega-punch",
        moveThree: "thunder-punch",
        moveTwo: "fire-punch",
        name: "charmeleon",
        pokemonImg:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
        type: "fire",
      },
      {
        moveFour: "whirlwind",
        moveOne: "razor-wind",
        moveThree: "wing-attack",
        moveTwo: "gust",
        name: "pidgeotto",
        pokemonImg:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
        type: "normal",
      },
      {
        moveFour: "headbutt",
        moveOne: "mega-punch",
        moveThree: "mega-kick",
        moveTwo: "ice-punch",
        name: "wartortle",
        pokemonImg:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
        type: "water",
      },
    ];
    const setCaughtPokemon = (v) => {
      caughtPokemon = v;
    };

    const pokemonTeamPage = TestRenderer.create(
      <MemoryRouter>
        <myPokemon.Provider value={{ caughtPokemon, setCaughtPokemon }}>
          <PokemonTeamPage />
        </myPokemon.Provider>
      </MemoryRouter>
    ).toJSON();

    // EXPECT h2 HEADER WITH 'MY POKEMON TEAM'
    expect(pokemonTeamPage.children[0].type).toBe("h2");
    expect(pokemonTeamPage.children[0].children[0]).toBe("MY POKEMON TEAM");
    // THERE IS THREE POKEMON CARDS BEING DISPLAYED
    expect(pokemonTeamPage.children[1].children.length).toBe(3);
    // CHECKS POKEMON ARE RENDERED IN CARDS
    expect(pokemonTeamPage.children[1].children[1].props.className).toBe(
      "card"
    );
  });


  it("will check pages children if no pokemon are caught", () => {
    let caughtPokemon = [];
    const setCaughtPokemon = (v) => {
      caughtPokemon = v;
    };

    const pokemonTeamPage = TestRenderer.create(
      <MemoryRouter>
        <myPokemon.Provider value={{ caughtPokemon, setCaughtPokemon }}>
          <PokemonTeamPage />
        </myPokemon.Provider>
      </MemoryRouter>
    ).toJSON();

    expect(pokemonTeamPage.children[1].children[0].children[0]).toBe("YOU DON'T HAVE ANY POKEMON")
  });
});
