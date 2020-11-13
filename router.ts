import express from 'express';
import * as DigimonsController from './src/controllers/DigimonsController';
import * as PokemonsController from './src/controllers/PokemonsController';

export const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World with Typescript!')
}) 

router.get('/ts', (req, res) => {
    res.send('Typescript es lo máximo!')
})

// router.get('/digimons', DigimonsController.getAll);
// router.get('/digimons/:id', DigimonsController.get);
// router.get('/digimons/name/:name', DigimonsController.getName);
// router.get('/digimons/type/:type', DigimonsController.getType);
// router.get('/digimons/strongAgainst/:type', DigimonsController.getType);

// Pokemons 
router.get('/pokemons', PokemonsController.getAll);
router.get('/pokemons/:id', PokemonsController.get);
router.get('/pokemons/name/:name', PokemonsController.getName);
router.get('/pokemons/type/:type', PokemonsController.getType);
router.get('/pokemons/against/:name', PokemonsController.getAgainst);
router.get('/pokemons/newpokemon/:name', PokemonsController.getNewPokemon);

router.post("/", (req, res) => {
    console.log("Cuerpo:", req.body);
    res.status(200).send(req.body);
});
