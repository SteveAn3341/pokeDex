import { describe, it, expect, vi } from "vitest";
import TestRenderer from "react-test-renderer";
import { MemoryRouter, useLoaderData } from "react-router-dom";
import axios from "axios";
import { PokemonPage, getPokemonDetails } from "../Pages/PokemonPage";
import { myPokemon } from "../App";

describe("PokemonPage.jsx", () => {
  describe("getPokemonDetails()", () => {
    it("inspects all details for one pokemon from the pokeAPI", async () => {
      const data = {
        types: [{ type: { name: "fire" } }],
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
        },
        name: "charizard",
        moves: [
          { move: { name: "flamethrower" } },
          { move: { name: "fire punch" } },
          { move: { name: "fly" } },
          { move: { name: "solarflare" } },
        ],
      };
      vi.mock("axios");
      axios.get.mockResolvedValue({ data: data });

      const pokemonData = await getPokemonDetails({ params: "charizard" });

      expect(pokemonData).toStrictEqual(data);
    });
  });

  it("will test rendered html components", () => {
    vi.mock("react-router-dom", async () => {
      const actual = await vi.importActual("react-router-dom");
      return {
        ...actual,
        useLoaderData: vi.fn(),
      };
    });
    const data = {
      types: [{ type: { name: "fire" } }],
      sprites: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
      },
      name: "charizard",
      moves: [
        { move: { name: "flamethrower" } },
        { move: { name: "fire punch" } },
        { move: { name: "fly" } },
        { move: { name: "solarflare" } },
      ],
    };
    useLoaderData.mockReturnValue(data);

    let caughtPokemon = [];
    const setCaughtPokemon = (v) => {
      caughtPokemon = v;
    };

    const pokemonPage = TestRenderer.create(
      <MemoryRouter initialEntries={["/pokemon/charizard/"]}>
        <myPokemon.Provider value={{ caughtPokemon, setCaughtPokemon }}>
          <PokemonPage />
        </myPokemon.Provider>
      </MemoryRouter>
    ).toJSON();

    // expect parent element to be a div
    expect(pokemonPage.type).toBe("div");
    // first child to be an h2 of pokemon
    expect(pokemonPage.children[0].type).toBe("h2");
    expect(pokemonPage.children[0].children[0]).toBe("Pokemon");
    // second child is a bootstrap card with a top image
    expect(pokemonPage.children[1].props.className).toBe("card");
  });
});
