import Express from 'express';
import Firebase from '../../database/firebase';
import uuid from 'uuid';

import Thread from "../../database/models/thread";

const Router = Express.Router();

Router.post("/thread", (req, res)=> {

    let threadKey = uuid.v1();

    console.log(threadKey);

    Thread.title = req.body.title;
    Thread.key = threadKey;
    Thread.authorKey = Firebase.app.auth().currentUser.uid;
    Firebase.ref("/threads/" + threadKey).set(Thread);
    console.log("USER : ", Firebase.ref("/users/" + Thread.authorKey));

    res.send(Thread);

});

export default Router;