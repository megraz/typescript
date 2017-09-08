import {router} from './todo-router';
import { userRouter } from './user-router';
import * as express from 'express'; //import= importer 1 chose d'un module
import * as bodyParser from 'body-parser';// récupérer tout le contenu du bodyParse du module body-parser


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {
    extended:true
}));

app.use('/todo', router);
app.use('/utilisateurs', userRouter);

app.listen(3000, function(err) {
    if (err) {
        console.error("fail to start server:", err);
        return;
    }
    console.log("listening on 3000...");
});
