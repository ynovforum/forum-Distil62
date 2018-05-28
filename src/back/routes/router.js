import Express from 'express';
const Router = Express.Router();

import MainPage from './get/mainPage';
import Admin    from './get/admin';
import Login    from './get/login';
import Register from './get/register';
import Thread   from './get/thread';

import createUser               from './api/createUser';
import createResponse           from './api/createResponse';
import createThread             from './api/createThread';
import updateLike               from './api/updateLike';
import updateResponseContent    from './api/updateResponseContent';

Router.use("/", MainPage);
Router.use("/admin", Admin);
Router.use("/login", Login);
Router.use("/register", Register);
Router.use("/thread", Thread);

Router.use("/api/post/create", createUser);
Router.use("/api/post/create", createResponse);
Router.use("/api/post/create", createThread);

Router.use("/api/post/update", updateLike);
Router.use("/api/post/update", updateResponseContent);

export default Router;