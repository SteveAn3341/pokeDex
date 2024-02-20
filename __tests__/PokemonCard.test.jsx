import { describe, it, expect, vi } from "vitest";
import {
  PokemonCard,
  addOrDropPokemonToMyTeam,
  pickBackGroundColor,
} from "../components/PokemonCard";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { myPokemon } from "../App";
import TestRenderer from "react-test-renderer";

describe("PokemonCard.jsx", () => {
  describe("addOrDropPokemonToMyTeam()", () => {
    it("will add or drop pokemon from caught pokemon to ensure no duplicate values exist", () => {
      const pokemonCaugth = [
        { name: "pikachu" },
        { name: "charizard" },
        { mew: "mew" },
        { name: "squirtle" },
        { name: "zapdos" },
        { name: "bulbasaur" },
      ];
      const pokemonToCatch = [
        { name: "pikachu" },
        { name: "charizard" },
        { name: "charizard" },
        { name: "bulbasaur" },
        { name: "charizard" },
        { mew: "mew" },
        { name: "squirtle" },
        { name: "zapdos" },
        { name: "bulbasaur" },
        { name: "bulbasaur" },
        { name: "mew-two" },
      ];
      let caughtPokemon = [];
      const setCaughtPokemon = (v) => {
        caughtPokemon = v;
      };
      for (const idx in pokemonToCatch) {
        addOrDropPokemonToMyTeam(
          pokemonToCatch[idx],
          caughtPokemon,
          setCaughtPokemon
        );
      }

      expect(caughtPokemon).toStrictEqual(pokemonCaugth);
    });
  });

  describe("pickBackGroundColor()", () => {
    it("will run different types of pokemon for corresponding colors", () => {
      const pokemonTypes = [
        "fire",
        "water",
        "ground",
        "rock",
        "psychic",
        "poison",
        "electric",
        "grass",
      ];
      const answer = [
        "red",
        "blue",
        "brown",
        "brown",
        "purple",
        "purple",
        "yellow",
        "green",
      ];
      let testAnswer = [];
      for (const idx in pokemonTypes) {
        testAnswer.push(pickBackGroundColor(pokemonTypes[idx]));
      }
      expect(testAnswer).toStrictEqual(answer);
    });
  });

  it("will test rendered componenets", () => {
    let caughtPokemon = [{}, {}];
    const setCaughtPokemon = (v) => {
      caughtPokemon = v;
    };
    const data = {
      moveFour: "headbutt",
      moveOne: "mega-punch",
      moveThree: "mega-kick",
      moveTwo: "ice-punch",
      name: "wartortle",
      pokemonImg:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
      type: "water",
    };

    vi.mock("react-router-dom", async () => {
      const actual = await vi.importActual("react-router-dom");
      return {
        ...actual,
        useNavigate: vi.fn(),
      };
    });
    useNavigate.mockReturnValue("/");
    const pokemonCard = TestRenderer.create(
      <MemoryRouter>
        <myPokemon.Provider value={{ caughtPokemon, setCaughtPokemon }}>
          <PokemonCard {...data} />
        </myPokemon.Provider>
      </MemoryRouter>
    ).toJSON();

    // CHECK FOR IMG AS FIRST CHILD OF CARD
    expect(pokemonCard.children[0].type).toBe("img");
    expect(pokemonCard.children[0].props.src).toBe(data.pokemonImg);
    // CHECK CATCH / RELEASE BUTTON
    expect(pokemonCard.children[3].type).toBe("button");
    expect("onClick" in pokemonCard.children[3].props).toBe(true);
    expect(pokemonCard.children[3].children[0]).toBe("Catch / Release");
    // CHECKS HOME BUTTON
    expect(pokemonCard.children[2].type).toBe("button");
    expect("onClick" in pokemonCard.children[2].props).toBe(true);
    expect(pokemonCard.children[2].children[0]).toBe("Home");
  });
});
