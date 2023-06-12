const { getPokemonById, getLocationById,getAbilityById,getContestById, getGenerationtById} = require('../services/pokemonService');

const fs = require('fs');

//ejemplos para la utilizacion de este get "ditto"
exports.getPokemonById = async (req, res) => {
  const { id } = req.params;

  try {
    const pokemon = await getPokemonById(id);
    const data = {
      name: pokemon.name,
      height: pokemon.height,
      moves: pokemon.moves,
      sprite: pokemon.sprites.front_default,
      sprite_shiny: pokemon.sprites.front_shiny
    };

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el Pokémon' });
  }
};

//ejemplos para la utilizacion de este get "canalave-city"
exports.getLocationById = async (req, res) => {
  const { id } = req.params;

  try {
    const location = await getLocationById(id);
    const data={
      name: location.name,
      region: location.region.name
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la ubicación' });
  }
};
//ejemplos para la utilizacion de este get "stench"
exports.getAbilityById = async (req, res) => {
  const { id } = req.params;

  try {
    const ability = await getAbilityById(id);
    const data={
      name: ability.name,
      users: ability.pokemon.map(user => user.pokemon)
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la habilidad' });
  }
};
//ejemplos para la utilizacion de este get "cool"
exports.getContestById = async (req, res) => {
  const { id } = req.params;

  try {
    const contest= await getContestById(id);
    const data={
      id: contest.id,
      name: contest.name,
      berry_flavor: contest.berry_flavor.name
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el conquest' });
  }
};



