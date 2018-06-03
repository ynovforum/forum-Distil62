import Express from 'express';
import Firebase from '../../database/firebase';
import getUserData from '../../database/utils/getUserData';

const Router = Express.Router();

Router.post("/beAdmin", (req, res)=> {
    if (Firebase.app.auth().currentUser)
    {
        getUserData((usr)=>{
            usr.role = "Admin";
    
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