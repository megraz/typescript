import {router} from './todo-router';
import * as express from 'express'; //import= importer 1 chose d'un module
import * as bodyParser from 'body-parser';// récupérer tout le contenu du bodyParse du module body-parser


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {
    extended:true
}));

//On dit à l'application d'utiliser notre routeur sur
//le chemin /todo
//Toutes les routes définies dedans devront donc être
//précédées de /todo
app.use('/todo', router);

app.listen(3000);
