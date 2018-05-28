import Express from "express";
import Dotenv from "dotenv/config";
import Routes from './routes/router';

const app = Express();

app.use(Express.urlencoded({extended: true}));
app.use(Routes);

app.listen(process.env.PORT, console.log("The server is listen on http://127.0.0.1:" + process.env.PORT));