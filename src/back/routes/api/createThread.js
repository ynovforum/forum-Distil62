import Express  from 'express';
import uuid     from 'uuid';

import Firebase from '../../database/firebase';
import Thread   from "../../database/models/thread.json";
import Response   from "../../database/models/response.json";

const Router = Express.Router();

Router.post("/thread", (req, res)=> {
    let threadKey = uuid.v1();
    let responseKey = uuid.v1();

    Thread.title = req.body.title;
    Thread.key = threadKey;
    Thread.authorKey = Firebase.app.auth().currentUser.uid;
    Response.authorKey = Thread.authorKey;
    Response.threadKey = threadKey;
    Response.content = req.body.content;
    Response.key = responseKey;

    Firebase.ref("/threads/" + threadKey).set(Thread);
    Firebase.ref('/responses/' + responseKey).set(Response);
    res.send(Thread);
});

export default Router;