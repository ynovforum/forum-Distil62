import Express from 'express';
import Firebase from '../../database/firebase';

const Router = Express.Router();

import User from '../../database/models/user.json';

Router.post("/user", (req, res)=> {
    
    console.log(req.body.email);
    
    Firebase.app.auth().createUserWithEmailAndPassword(req.body.email, req.body.password)
    .then(response => {
        User.key = response.user.uid;
        User.username = req.body.email;
        Firebase.ref("/users/" + response.user.uid).set(User);
    })
    .catch((error) => {
        console.error(error.code);
        console.error(error.message);
    });

    res.send(req.body);
});

export default Router;