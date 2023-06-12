const fetch = require('node-fetch');

//obtener al pokemon por id
exports.getPokemonById = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await response.json();

  return pokemon;
};

//obtener las ciudades disponibles en el juego
exports.getLocationById = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/location/${id}`);
  const location = await response.json();
  return location;
};

//obtener las habilidades del pokemon
exports.getAbilityById = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/ability/${id}`);
  const ability = await response.json();
  return ability;
};

//obtener datos para las competencias pokemon
exports.getContestById = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/contest-type/${id}`);
  const contest = await response.json();
  return contest;
};


