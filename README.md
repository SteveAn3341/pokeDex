[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=10798555&assignment_repo_type=AssignmentRepo)
# Assessment 4 : React.js

https://user-images.githubusercontent.com/105952966/230561318-4ba41baf-2939-4e37-9dcd-0a93ef2ea593.mp4

PokeDex React Clone:

- In this project, we will create a PokeDex clone utilizing the [PokeAPI](https://pokeapi.co/), [AXIOS](https://axios-http.com/docs/intro), and the [Vite + React Framework](https://vitejs.dev/guide/)!

## Important Grading Information
- THIS PROJECT WILL BE NAMED `pokeDex`.
- Use the [PokeDex](https://codeplatoon-fullstack.github.io/assessment-4/) site as a reference to what you'll be building.
- You need to get a 75% or better to pass. `10 out of 14 tests` (You must pass all assessments in order to graduate Code Platoon's program.)
- There will be one retake available for this assessment.
  - 5% penalty: If you complete and submit the retake within one week of receiving your grade.
  - 10% penalty: If you complete and submit the retake afterwards.

## Rules / Process

- This test is fully open notes and open Google, but is not to be completed with the help of other students/individuals

## Requirements

- PAGES:
  - Home Page
    - Displays an ordered list of 30 Pokemon names as links
  - Pokemon Page
    - Displays a `Pokemon Card`
  - PokemonTeam Page
    - Displays a list of captured `Pokemon Cards`. `(NO MORE THAN 6 POKEMON AND NO REPETITIVE POKEMON COULD BE CAUGHT)`
- COMPONENTS:
  - Header
    - Displays 'POKEDEX', a link to home, a link to my team, and a search bar utilized to search for pokemon.
    - This component must persist throughout all pages.
  - Pokemon Card [Card from Boot Strap](https://react-bootstrap.github.io/components/cards/#basic-example)
    - Displays a pokemons image
    - Background Color matching the pokemons type (fire -> red)
    - Displays a `PokemonCardContent` component
    - Displays 2 buttons at the bottom of the card:
      - Home Button -> link to the HomePage
      - Catch / Release Button -> Will add a Pokemon to the captured Pokemon list `OR` remove it from the captured list
  - PokemonCardContent 
    - Displays Card Body showing the following:
      - Pokemon name
      - Pokemons first 4 moves in a [container](https://react-bootstrap.netlify.app/layout/grid/#container) of 2 rows and 2 cols 
- Expected Color Map
```bash
    grass <===> "green",
    fire  <===> "red",
    electric  <===> "yellow",
    ground  <===> "brown",
    rock  <===> "brown",
    water <===> "blue",
    psychic <===> "purple",
    poison  <===> "purple",
    dragon  <===> "silver",
    steel <===> "silver",
    flying  <===> "cyan",
    ice <===> "cyan",
    normal  <===> "gray",
```
- Tools to be Utilized:
  1. React
  2. Axios + PokeAPI
  3. useEffect, useState
  4. React Router
  5. useParams
  6. Props


## Running Tests

To run tests, first ensure you install `vitest` and `TestRenderer` into your project.

```bash
  npm install vitest
  npm install react-test-renderer
```

Now in your `package.json`  add the following key to your scripts
```json
 "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    // Here we are adding the test command to run with npm
    "test": "vitest"
  },
```

Now ensure the `__tests__` folder is inside your `src` folder in your project, then go through each testing file and ensure the functions and imports correlate with your project.


Finally run the test suite with the following command
```bash
  npm test
```

## Challenge

In this challenge we will build a PokeDex clone with React.js! Yes, I know super exciting.

User Stories:

- UPON OPENENING YOUR PROJECT

  - User will see a header containing a title of 'POKEDEX' on the left, followed by a link to 'Home', a link to 'My Team', and finally on the right a searchbar to look up an individual pokemon by name or id.
  - User will see a body displaying 30 pokemon names in a numbered list where the pokemon name will serve as a link to each individual pokemon.

- UPON CLICKING ON A POKEMON LINK || SEARCHING FOR A POKEMON

  - User will be sent to a seperate page where the desired pokemon will be displayed in a Pokemon Card.

- UPON CLICKING ON "CATCH / RELEASE" BUTTON

  - User will either add or remove the selected pokemon from their pokemon party.

- UPON CLICKING ON 'MY TEAM' LINK

  - User will be sent to a seperate page where each pokemon in their pokemon party will be displayed in a Pokemon Card.

- UPON CLICKING ON 'HOME' LINK || BUTTON
  - - User will see a body displaying 30 pokemon names in a numbered list where the pokemon name will serve as a link to each individual pokemon.
