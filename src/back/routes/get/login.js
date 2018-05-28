import Express from 'express';
const Router = Express.Router();

Router.get("/", (req, res)=> {
    res.send("Login");
});

export default Router;