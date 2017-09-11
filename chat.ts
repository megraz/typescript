import { AnimalCompagnie } from "./animal-compagnie";

export class Chat implements AnimalCompagnie {
    //ceci equivaut
    constructor(public nom:string,public couleur:string){}
    /*
    à ceci :
    public nom:string; // propriete
    public couleur:string;
    constructor(nom:string,couleur:string){
        this.nom = nom;
        this.couleur = couleur;
    } 
    */

    chasser():void {
        console.log('le chat-sse');
    }
    seGratter(): void {
        console.log('le chat se gratte');
    }
    manger(aliment: string): void {
        console.log('le chat mange '+aliment+' pendant trop longtemps');
    }
    emettreSon(): string {
        return 'miou miou miou';
    }
}