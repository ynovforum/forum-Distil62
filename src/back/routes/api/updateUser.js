import Express from 'express';
import Firebase from '../../database/firebase';
import getUserData from '../../database/utils/getUserData';

const Router = Express.Router();

Router.post("/user", (req, res)=> {
    if (Firebase.app.auth().currentUser)
    {
        getUserData((usr)=>{
            usr.icon = (req.body.icon !== "" && req.body.icon !== null && req.body.icon !== undefined) ? req.body.icon : usr.icon,
            usr.username = (req.body.username !== "" && req.body.username !== null && req.body.username !== undefined) ? req.body.username : usr.username, 
            usr.bio = (req.body.bio !== "" && req.body.bio !== null && req.body.bio !== undefined) ? req.body.bio : usr.bio
    
            Firebase.ref("/users/" + Firebase.app.auth().currentUser.uid).set(usr);
            res.redirect("/profile/me");
        })
    }
    else
    {
        res.redirect("/");
    }
})

export default Router;