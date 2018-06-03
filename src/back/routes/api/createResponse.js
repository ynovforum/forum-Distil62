import Express from 'express';
import uuid from 'uuid';
import getThreadAndUser from '../../database/utils/getThreadAndUserbyKey';
import Firebase from '../../database/firebase';

import Response from '../../database/models/response.json';

const Router = Express.Router();

Router.post('/response/:key', (req, res) => {

    getThreadAndUser(req.params.key, (thread, user)=>{
        let responseKey = uuid.v4();

        Response.authorKey = user.key;
        Response.threadKey = req.params.key;
        Response.content = req.body.content;
        Response.key = responseKey;
        Response.createdDate = new Date();

        if (!thread.responses)
            thread.responses = [responseKey];
        else
            thread.responses.push(responseKey)

        if (!user.responses)
            user.responses = [responseKey];
        else
            user.responses.push(responseKey);

        Firebase.ref('/responses/' + responseKey).set(Response);
        Firebase.ref('/threads/' + req.params.key).set(thread);
        Firebase.ref('/users/' + user.key).set(user);

        res.send(Response);
    });
});

export default Router;