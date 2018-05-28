import Express  from 'express';
import uuid     from 'uuid';

import Firebase from '../../database/firebase';
import Thread   from "../../database/models/thread";

const Router = Express.Router();

Router.post("/thread", (req, res)=> {

    let threadKey = uuid.v1();

    Thread.title = req.body.title;
    Thread.key = threadKey;
    //TODO => change moi ça
    //Thread.authorKey = Firebase.app.auth().currentUser.uid;
    Firebase.ref("/threads/" + threadKey).set(Thread);

    res.send();

});

export default Router;