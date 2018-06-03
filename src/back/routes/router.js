import Express from 'express';
const Router = Express.Router();

import MainPage     from './get/mainPage';
import Admin        from './get/admin';
import Profile      from './get/profile';
import Login        from './get/login';
import Register     from './get/register';
import Thread       from './get/thread';
import Logout       from './get/logout';
import WriteThread  from "./get/writeThread";

import PostLogin                from './api/login';
import createUser               from './api/createUser';
import createResponse           from './api/createResponse';
import createThread             from './api/createThread';
import beAdmin                  from "./api/beAdmim";

import updateLike               from './api/updateLike';
import updateResponseContent    from './api/updateResponseContent';
import updateUser               from "./api/updateUser";


//Get
Router.use("/", MainPage);
Router.use("/profile", Profile);
Router.use("/admin", Admin);
Router.use("/login", Login);
Router.use("/register", Register);
Router.use("/thread", Thread);
Router.use("/logout", Logout);
Router.use("/add/thread", WriteThread);

//Do
Router.use("/api/post/do/", PostLogin);
Router.use("/api/post/do/", beAdmin);

//Create
Router.use("/api/post/create", createUser);
Router.use("/api/post/create", createResponse);
Router.use("/api/post/create", createThread);

//Update
Router.use("/api/post/update", updateLike);
Router.use("/api/post/update", updateResponseContent);
Router.use("/api/post/update", updateUser);

export default Router;