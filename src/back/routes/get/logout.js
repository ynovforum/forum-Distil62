import Firebase from '../../database/firebase';
import Express from 'express';

const Router = Express.Router();

Router.get("/", async (req, res)=> {
    await Firebase.app.auth().signOut();
    res.redirect("/");
});

export default Router;