import {Todo} from './todo';
import * as express from 'express'; //import= importer 1 chose d'un module
/*
import * as bodyParser from 'body-parser';// récupérer tout le contenu du bodyParse du module body-parser
*/
const todo = new Todo();

/*
On utilise un Router pr regrouper ttes les routes d'un type particulier, ici,
notre router regroupera les routes liées au Todo's 
*/
export const router = express.Router(); //on fait un router ac des méthodes et des chemins

//Route permettant de récupérer les todo
router.get('/' , (req, res) => {
    res.json(todo.lister());
});

//Route permettant d'ajouter un todo
router.post('/' , (req, res) => { //ajoute ce qui a été récup par le post dans le body
    let nouveau = req.body.nouveau;
    todo.ajouter(nouveau);
    res.end('todo ajouté');
});


//Route permettant de supprimer un todo
router.delete('/:suppr' , (req, res) => { 
    let suppr = req.params.suppr; //params = pr choper les arguments de l'url
    todo.supprimer(suppr);
    res.end('todo supprimé');
});

/*
const todo = new Todo();
todo.ajouter('ga');
todo.ajouter('zo');
todo.ajouter('bu');

console.log(todo.lister());

todo.supprimer('ga');

console.log(todo.lister());
*/
