import Express from 'express';
const Router = Express.Router();

Router.get("/", (req, res)=> {
    res.send("index");
});

export default Router;