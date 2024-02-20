import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { PokemonCardContent } from "../components/PokemonCardContent";
import TestRenderer from "react-test-renderer";

describe("PokemonCardContent.jsx", () => {
  it("will tests the elements rendered", () => {
    const data = {
      pokemonName: "pikachu",
      moveOne: "shockwave",
      moveTwo: "thunder",
      moveThree: "lightning",
      moveFour: "thunderwave",
    };
    const cardContent = TestRenderer.create(
      <MemoryRouter>
        <PokemonCardContent {...data} />
      </MemoryRouter>
    ).toJSON();
    // INSPECTS THE CARD BODY FROM REACT BOOTSTRAP
    expect(cardContent.props.className).toBe("card-body");
    // ENSURES CARD TITLE IS THE NAME OF THE POKEMON
    expect(cardContent.children[0].children[0]).toBe(data.pokemonName);
    // ENSURES CONTAINER | ROW | COL IS IN CARD BORY FROM REACT BOOTSTRAP
    expect(cardContent.children[1].props.className).toBe("container");
    expect(cardContent.children[1].children[0].props.className).toBe("row");
    expect(
      cardContent.children[1].children[0].children[0].props.className
    ).toBe("col");
    // ENSURES MOVES ARE INSIDE COLS IN OUR CARD BODY
    expect(cardContent.children[1].children[0].children[0].children[0]).toBe(
      data.moveOne
    );
  });
});
