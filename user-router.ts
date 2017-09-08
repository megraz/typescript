import * as express from 'express';
import * as bodyParser from 'body-parser';
import {User} from './utilisateurs';
import {UserList} from './userlist';

export let userRouter = express.Router();
let list= new UserList();

userRouter.use("/", bodyParser.json());

userRouter.post("/", function(req, res) { // add pr créer un utilisateur
    let name = req.body.name; //on récup des données(un nom) que l'utili ns a donné ds le corps(body) de la requête
    let pass = req.body.password; // != = différent de name
    if (!name || !pass) { // || = ou, && = et  
        res.status(400);
        res.send('missing parameter');
        return;
    } 
    let u = new User(name, pass);
    list.add(u); //on ajoute un utili à la liste
    res.send(u);
});

userRouter.get("/", function(req, res) { // auth pr autentifier l'utilisateur
    
});

userRouter.delete("/", function(req, res) { // del pr supp pr autentifier l'utilisateur
        
});
