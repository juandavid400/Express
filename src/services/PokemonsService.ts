import { PokemonI } from "../interfaces/PokemonInterfaces";
const db = require('../db/Pokemons.json');

module PokemonsService { 
    export function getAll(): Array<PokemonI> {
        const pokemons: Array<PokemonI> = db;
        return pokemons
    }

    export function get(id: number): PokemonI {
        const pokemons: Array<PokemonI> = db;
        const pokemon: Array<PokemonI> = pokemons.filter(e => e.id === id);
        if (pokemon.length < 1) {
            throw "No se encontró el pokemon"
        }
        return pokemon[0];
    }

    export function getAgainst(name: string): Array<PokemonI> {
        const pokemons: Array<PokemonI> = db;
        let matchesStrong: Array<PokemonI> = [];
        let matchesWeak: Array<PokemonI> = [];
        let pokemon: Array<PokemonI> = pokemons.filter(function (el) {
            const pokeName = name.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            const comparationName = el.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            return comparationName.toLowerCase().indexOf(pokeName.toLowerCase()) > -1;
        });

        if (pokemon.length < 1) {
            throw "No se encontró el pokemon"
        } else {
            pokemon = pokemon.filter(function(el) {
                const nombre = el.name;                
                const status = el.type.filter(e =>{
                    let tipo = e.name;         
                    pokemons.forEach(pokemon => {
                        const comparation = pokemon.type.filter(z =>{
                            for (let i = 0; i < z.weakAgainst.length; i++) {
                                const element = z.weakAgainst[i];
                                if (element.toString() == tipo){
                                    matchesStrong.push(pokemon);
                                }
                            }
                            for (let j = 0; j < z.strongAgainst.length; j++) {
                                const element2 = z.strongAgainst[j];
                                console.log("Compare");
                                console.log(element2);
                                console.log(tipo);
                                if ( element2.toString() == tipo){
                                    console.log("Entre en if")
                                    matchesWeak.push(pokemon);
                                }
                            }
                        })
                        // if (matchesWeak == null || matchesWeak == undefined){
                        //     let no: any[] = ["no débil contra ningún pokemon actual"];
                        //     matchesWeak.push(no);
                        // }
                        
                    })
                    console.log(matchesStrong);
                    console.log(matchesWeak);
                    matchesStrong.filter(name =>{
                       const nombreFuerte  = name.name;
                       matchesWeak.filter(name =>{
                           
                        const nombreDebil = name.name;
                        throw "Nombre: " + nombre + " tipo: "+ e.name + " es fuerte contra: " + nombreFuerte + " pero es débil contra: " + nombreDebil;
                       })
                       
                    })
                    

                }) 
            });
            console.log(matchesStrong);
            console.log(matchesWeak);
            return pokemon;
        }

    } 
  

    export function getName(name: string): Array<PokemonI> {
        const pokemons: Array<PokemonI> = db;
        let matches: Array<PokemonI> = pokemons.filter(function (el) {
            const pokeName = name.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            const comparationName = el.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            return comparationName.toLowerCase().indexOf(pokeName.toLowerCase()) > -1;
        });
        if (matches.length < 1) {
            throw "No se encontró el pokemon"
        }
        return matches;
    }


    export function getType(type: string): Array<PokemonI> {
        const pokemons: Array<PokemonI> = db;
        let matches: Array<PokemonI> = [];
        pokemons.forEach(pokemon => {
            
            const found = pokemon.type.filter(function(el) {
                const pokeName = type.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                const comparationName = el.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                return comparationName.toLowerCase().indexOf(pokeName.toLowerCase()) > -1;
            });
            if (found.length>0) {
                matches.push(pokemon);
            }
        })
         
        if (matches.length < 1) {
            throw "No se encontró el tipo"
        }
        return matches;
    }

    export function getNewPokemon(name: string): Array<PokemonI> {
        var splitted = name.split(",");
        throw "Nombre: "+splitted[0]+ " tipo: " +splitted[1]+ " es fuerte contra " +splitted[2]+ " es debil contra " +splitted[3]+ " img " + splitted[4];
    }
}

export default PokemonsService;
