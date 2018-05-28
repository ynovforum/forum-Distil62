import Express from 'express';
const Router = Express.Router();

Router.get("/", (req, res)=> {
    res.send('admin');
});

export default Router;