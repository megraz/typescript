import {Todo} from './todo';

const todo = new Todo();

todo.ajouter('ga');
todo.ajouter('zo');
todo.ajouter('bu');

console.log(todo.lister());

todo.supprimer('ga');

console.log(todo.lister());