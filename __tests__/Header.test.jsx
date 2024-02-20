import { describe, it, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import TestRenderer from "react-test-renderer";
import { Header } from "../components/Header";

describe("Header.jsx", () => {
  it("will test components in Header.jsx", () => {
    const caughtPokemon = [{}, {}, {}];
    const header = TestRenderer.create(
      <MemoryRouter>
        <Header caughtPokemon={caughtPokemon} />
      </MemoryRouter>
    ).toJSON();

    // EXPECT H1 OF POKEDEX
    expect(header.children[0].type).toBe("h1");
    expect(header.children[0].children[0]).toBe("POKEDEX");
    // Home achor tag (link)
    expect(header.children[1].type).toBe("a");
    expect(header.children[1].props.href).toBe("/");
    expect("onClick" in header.children[1].props).toBe(true);
    expect(header.children[1].children[0]).toBe("Home");
    // My Team #3 anchor tag (link)
    expect(header.children[2].type).toBe("a");
    expect(header.children[2].props.href).toBe("/team/");
    expect("onClick" in header.children[2].props).toBe(true);
    expect(header.children[2].children[0]).toBe("My Team #");
    expect(header.children[2].children[1]).toBe("3");
    // Form to look for pokemon
    expect(header.children[3].type).toBe("form");
    expect("onSubmit" in header.children[3].props).toBe(true);
    expect(header.children[3].children[0].type).toBe("input");
    expect(header.children[3].children[0].props.placeholder).toBe("search");
    expect(header.children[3].children[1].type).toBe("button");
    expect(header.children[3].children[1].children[0]).toBe("Search");
  });
});
