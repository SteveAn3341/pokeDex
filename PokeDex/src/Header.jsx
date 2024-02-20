import React, { useState } from 'react';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { PokemonContext } from './PokemonContext';

function Header() {
  const { caughtPokemons } = useContext(PokemonContext);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const search = () => {
    navigate(`/pokemon/${searchQuery}`);
  };

  return (
    <Navbar bg="light" expand="lg">
      <h1 className="title">POKEDEX</h1>
      <Link to="/" className="home">
        Home
      </Link>
      <Link className="myteam" to="/myteam">
        Myteam#{caughtPokemons.length}
      </Link>
      <Form inline="true" className="ml-auto">
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          id="search-bar"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button variant="outline-success" className="my-2 my-sm-0" onClick={() => search()}>
          Search
        </Button>
      </Form>
    </Navbar>
  );
}

export default Header;