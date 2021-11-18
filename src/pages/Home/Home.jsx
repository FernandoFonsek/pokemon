import React, {useEffect} from "react";

const Home = () => {

  useEffect(() => {
    const API ="https://pokeapi.co/api/v2/pokemon?limit=100&offset=200"
    const handlePokemonList = async () =>{
      const request = await fetch(API)
      con
    }
  }, []);

  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};

export default Home;
