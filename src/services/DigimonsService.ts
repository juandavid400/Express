import { DigimonI } from "../interfaces/DigimonInterfaces";
const db = require('../db/Digimons.json');

module DigimonsService { 
    export function getAll(): Array<DigimonI> {
        const digimons: Array<DigimonI> = db;
        return digimons
    }

    export function get(id: number): DigimonI {
        const digimons: Array<DigimonI> = db;
        const digimon: Array<DigimonI> = digimons.filter(e => e.id === id);
        if (digimon.length < 1) {
            throw "No se encontró el digimon"
        }
        return digimon[0];
    }
    
    export function getName(name: string): DigimonI {
        console.log("Entre getname");
        
        const digimons: Array<DigimonI> = db;
        const digimon: Array<DigimonI> = digimons.filter(e => e.name === name);
        if (digimon.length < 1) {
            throw "No se encontró el digimon"
        }

        return digimon[0];
    }

    export function getType(type: string): Array<DigimonI> {
        const digimons: Array<DigimonI> = db;
        let matches: Array<DigimonI> = [];
        digimons.forEach(digimon => {
            const found = digimon.type.filter(e => e.name === type);
            if (found.length>0) {
                matches.push(digimon);
            }
        })
         
        if (matches.length < 1) {
            throw "No se encontró el tipo"
        }
        return matches;
    }

}

export default DigimonsService;
