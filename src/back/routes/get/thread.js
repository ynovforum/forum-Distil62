import Express from 'express';
const Router = Express.Router();

import Firebase from '../../database/firebase';
import getResponsesByThread from '../../database/utils/getResponsesByThread';
import getAuthorKeyByResponses from '../../database/utils/getUsersDataByResponses';

Router.get("/:key", (req, res)=> {
    Firebase.ref('/threads/' + req.params.key).once('value').then(async threadGet => {
        let thread = threadGet.val();

        thread = await getResponsesByThread(thread);
        thread.responses = await getAuthorKeyByResponses(thread.responses);

        console.log("APRES : ",thread);

        res.send(thread);
    })
    .catch((error) => {
        console.error('ERROR THREAD DETAILS');
        console.error(error.code);
        console.error(error.message);
    });;
});

export default Router;