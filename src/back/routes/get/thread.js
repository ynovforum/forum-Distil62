import Express from 'express';
import Firebase from '../../database/firebase';
import getResponsesByThread from '../../database/utils/getResponsesByThread';
const Router = Express.Router();

Router.get("/:key", (req, res)=> {
    Firebase.ref('/threads/' + req.params.key).once('value').then(threadGet => {
        let thread = threadGet.val();
        let responses =  getResponsesByThread(thread);

        res.send(thread);
    })
    .catch((error) => {
        console.error('ERROR THREAD DETAILS');
        console.error(error.code);
        console.error(error.message);
    });;
});

export default Router;