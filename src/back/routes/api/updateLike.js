import Express from 'express';
import Firebase from '../../database/firebase';
import getResponsedAndUser from '../../database/utils/getResponseAndUserbyKey';

const Router = Express.Router();

Router.post("/like/:key/:type", (req, res)=> {
    getResponsedAndUser(req.params.key, (response, user)=>{
        user.threadsLiked ? '': user.threadsLiked = {};
        if (Object.keys(user.threadsLiked).includes(thread.key))
        {
            response[req.params.type]--;
            delete user.threadsLiked[thread.key];
        }
        else
        {
            response[req.params.type]++;
            user.threadsLiked = Object.assign({[thread.key] : req.params.type});
        }

        Firebase.ref('/responses/' + req.params.key).set(response);
        Firebase.ref('/users/' + Firebase.app.auth().currentUser.uid).set(user);
        res.send(response);
    });
});

export default Router;