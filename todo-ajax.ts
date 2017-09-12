//appel ajax vers le serveur
import * as $ from 'jquery'; // je vais chercher jquery

export class TodoAjax {
    private urlApi:string = 'http://localhost:3000/todo';

    getAllTodos():Promise<string[]> {
        return $.ajax({
            url: this.urlApi
        });

    }
}