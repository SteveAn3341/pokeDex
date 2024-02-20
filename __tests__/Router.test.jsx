import { expect, it, describe, vi } from "vitest";
import TestRenderer from "react-test-renderer";
import { MemoryRouter, Route, Routes, useLoaderData } from "react-router-dom";
import { myPokemon } from "../App";
import { HomePage } from "../Pages/HomePage";
import { PokemonPage } from "../Pages/PokemonPage";
import { PokemonTeamPage } from "../Pages/PokemonTeamPage";

describe("Routes", () => {
  it("will check index route", () => {
    vi.mock("react-router-dom", async () => {
      const actual = await vi.importActual("react-router-dom");
      return {
        ...actual,
        useLoaderData: vi.fn(),
      };
    });
    useLoaderData.mockReturnValue([
      { name: "squirtle" },
      { name: "squirtle" },
      { name: "squirtle" },
      { name: "squirtle" },
    ]);
    const app = TestRenderer.create(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokemon/:id/" element={<PokemonPage />} />
        </Routes>
      </MemoryRouter>
    ).toJSON();
    expect(app.children[0].children[0]).toBe("Home");
  });

  it("will check for the pokemon/:id/ route", () => {
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
    const app = TestRenderer.create(
      <MemoryRouter initialEntries={["/pokemon/squirtle/"]}>
        <myPokemon.Provider value={{ caughtPokemon, setCaughtPokemon }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pokemon/:id/" element={<PokemonPage />} />
          </Routes>
        </myPokemon.Provider>
      </MemoryRouter>
    ).toJSON();
    expect(app.children[0].children[0]).toBe("Pokemon");
  });

  it("will check the /team/ route", () => {
    let caughtPokemon = [];
    const setCaughtPokemon = (v) => {
      caughtPokemon = v;
    };
    const app = TestRenderer.create(
      <MemoryRouter initialEntries={["/team/"]}>
        <myPokemon.Provider value={{ caughtPokemon, setCaughtPokemon }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pokemon/:id/" element={<PokemonPage />} />
            <Route path="/team/" element={<PokemonTeamPage />} />
          </Routes>
        </myPokemon.Provider>
      </MemoryRouter>
    ).toJSON();
    expect(app.children[0].children[0]).toBe("MY POKEMON TEAM");
  });
});
