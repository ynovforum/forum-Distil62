import Express from 'express';
import db from '../../database/firebase';
import Firebase from 'firebase';
const Router = Express.Router();

Router.get("/", (req, res)=> {
    res.send(db.app.auth().signInWithPopup(provider));
});

export default Router;