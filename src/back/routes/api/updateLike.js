import Express from 'express';
import Firebase from '../../database/firebase';

const Router = Express.Router();

Router.post("/like/:key", (req, res)=> {
    Firebase.ref('/threads/' + req.params.key).once('value').then((threadGet) => {

    })
});

export default Router;