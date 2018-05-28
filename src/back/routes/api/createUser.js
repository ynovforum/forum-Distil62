import Express from 'express';
import Firebase from '../../database/firebase';

const Router = Express.Router();

import User from '../../database/models/user.json';

Router.post("/user", (req, res)=> {
    Firebase.app.auth().createUserWithEmailAndPassword(req.body.email, req.body.password)
        .then(response => {
            User.key = response.user.uid;
            User.username = req.body.email;
            Firebase.ref("/users/" + response.user.uid).set(User);
            res.send(req.body);
        })
        .catch((error) => {
            console.error(error.code);
            console.error(error.message);
        });
});

export default Router;