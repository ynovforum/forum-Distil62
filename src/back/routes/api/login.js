import Express from 'express';
import Firebase from '../../database/firebase';

const Router = Express.Router();

Router.post("/login", (req, res)=> {
    Firebase.app.auth().signInWithEmailAndPassword(req.body.email, req.body.password);
    res.send(Firebase.app.auth().currentUser);
});

export default Router;