import Express from 'express';
import uuid from 'uuid';
import Firebase from '../../database/firebase';

import Response from '../../database/models/response.json';

const Router = Express.Router();

Router.post('/response/:key', (req, res) => {
    Firebase.ref('/threads/' + req.params.key).once('value').then((threadGet => {
            Firebase.ref('/users/' + Firebase.app.auth().currentUser.uid).once('value').then((userGet) => {
                let responseKey = uuid.v1();
                let thread = threadGet.val();
                let user = userGet.val();

                Response.authorKey = user.key;
                Response.threadKey = req.params.key;
                Response.content = req.body.content;

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
            })
            .catch((error) => {
                console.error('ERROR CREATE RESPONSE');
                console.error(error.code);
                console.error(error.message);
            });
    }))
    .catch((error) => {
        console.error('ERROR CREATE RESPONSE');
        console.error(error.code);
        console.error(error.message);
    });
});

export default Router;