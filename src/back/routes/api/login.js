import Express from 'express';
import Firebase from '../../database/firebase';

const Router = Express.Router();

Router.post("/login", (req, res)=> {
    Firebase.app.auth().signInWithEmailAndPassword(req.body.email, req.body.password).then(usr=>{
        Firebase.ref("/users/" + usr.uid).once("value").then((userGet)=>{
            res.redirect("/");
        })
    });
});

export default Router;