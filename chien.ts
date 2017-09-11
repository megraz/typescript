import { AnimalCompagnie } from "./animal-compagnie";

export class Chien implements AnimalCompagnie {
    nom: string;
    race: string;

    constructor(nom:string, race: string) {
        this.nom = nom;
        this.race = race;
    }

    allerChercher():void { //methode
        console.log('le chien va chercher le truc');
    }

    seGratter():void {
        console.log('le chien se gratte');
    }
    
    manger(aliment: string): void {
        console.log('le chien mange goulument '+aliment);
    }
    emettreSon(): string {
        return 'ouaf ouaf ouaf';
    }
}