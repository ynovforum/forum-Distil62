import Express from 'express';
import Firebase from '../../database/firebase';
import getUserData from '../../database/utils/getUserData';

const Router = Express.Router();

Router.post("/user/:key", (req, res)=> {
    getUserData((usr)=>{
        getUserData((me)=>{
            if (Firebase.app.auth().currentUser.key === usr.key || me.role === "Admin")
            {

            }
            else
            {
                res.redirect("/")
            }
        })
    }, req.param.key)
})