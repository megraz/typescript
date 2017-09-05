export class Todo {
    private liste:string[] = [];

    ajouter(item:string):void {
        this.liste.push(item);
    }
    supprimer(item:string):void { //void = la fonction ne renvoie rien
        this.liste=
        this.liste.filter((valeur) => valeur !==item);
    }
    lister():string[] {
        return this.liste;
    }
}