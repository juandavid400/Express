import { Request, Response } from "express";
import PokemonsService from "../services/PokemonsService";

export function getAll(_: any, res: Response) {
    const pokemons = PokemonsService.getAll();
    res.status(200).json(pokemons);
}

export function get(req: Request, res: Response) {
    try {
        const id = req.params.id && +req.params.id || undefined;
        if(!id){ throw "Se requiere el numero del pokemon."}
        const pokemon = PokemonsService.get(id);
        res.status(200).json(pokemon);
    } catch (error) {
        res.status(400).send(error);
    }
}

export function getName(req: Request, res: Response) {
    try {
        const name = req.params.name && req.params.name || undefined;
        if(!name){ throw "Se requiere el nombre del pokemon."}
        const pokemon = PokemonsService.getName(name);
        
        res.status(200).json(pokemon);
    } catch (error) {
        res.status(400).send(error);
    }
}

export function getType(req: Request, res: Response) {
        try {
            const type = req.params.type && req.params.type || undefined;
            if(!type){ throw "Se requiere el Tipo del pokemon."}
            const pokemons = PokemonsService.getType(type);
            res.status(200).json(pokemons);
        } catch (error) {
            res.status(400).send(error);
        }
}


export function getAgainst(req: Request, res: Response) {
    try {
        const name = req.params.name && req.params.name || undefined;
        if(!name){ throw "Se requiere el nombre del pokemon."}
        const pokemons = PokemonsService.getAgainst(name);
        res.status(200).json(pokemons);
    } catch (error) {
        res.status(400).send(error);
    }
}

export function getNewPokemon(req: Request, res: Response) {
    try {
        const name = req.params.name && req.params.name;
        const pokemons = PokemonsService.getNewPokemon(name);
        res.status(200).json(pokemons);
    } catch (error) {
        res.status(400).send(error);
    }
}
    
