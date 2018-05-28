import Express from 'express';
const Router = Express.Router();

Router.get("/user/:id", (req, res)=> {
    res.send('id');
});

Router.get("/me", (req, res)=> {
    res.send('me');
});

export default Router;