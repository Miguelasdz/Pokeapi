const express = require('express');
const app = express();
const pokemonController = require('./controllers/pokemonController');

app.get('/health', (req, res) => res.sendStatus(200)); // Endpoint de salud
app.get('/pokemon/:id', pokemonController.getPokemonById);
app.get('/location/:id', pokemonController.getLocationById);
app.get('/ability/:id', pokemonController.getAbilityById);
app.get('/contest/:id', pokemonController.getContestById);


app.listen(8090, () => {
  console.log('El servidor está escuchando en el puerto 8090');
});
