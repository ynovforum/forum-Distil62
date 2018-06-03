import Express  from 'express';
import uuid     from 'uuid';

import Firebase from '../../database/firebase';
import Thread   from "../../database/models/thread.json";
import Response   from "../../database/models/response.json";

const Router = Express.Router();

Router.post("/thread", (req, res)=> {
    if (Firebase.app.auth().currentUser)
    {
        let threadKey = uuid.v4();
        let responseKey = uuid.v4();
    
        Response.authorKey = Firebase.app.auth().currentUser.uid;
        Response.threadKey = threadKey;
        Response.content = req.body.content;
        Response.key = responseKey;
        Response.createdDate = new Date().toDateString();    
        
        Thread.title = req.body.title;
        Thread.key = threadKey;
        Thread.authorKey = Response.authorKey;
        Thread.createdDate = new Date().toDateString();
        Thread.responses = [Response.key];
        
        Firebase.ref("/threads/" + threadKey).set(Thread);
        Firebase.ref('/responses/' + responseKey).set(Response);
        res.redirect("/thread/" + threadKey);
    }
    else
        res.redirect("/");
});

export default Router;