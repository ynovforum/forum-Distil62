import Express from 'express';
import React from 'react';
import Firebase from '../../database/firebase';
import ReactDomServer from "react-dom/server";

import Main from '../../../front/Main';
import Component from '../../../front/Components/writeThread/WriteThread';
import getUserData from "../../database/utils/getUserData";

const Router = Express.Router();

Router.get("/", (req, res)=> {

    if (Firebase.app.auth().currentUser)
    {
        getUserData((usr) => {
            let html = ReactDomServer.renderToString(
            React.createElement(Main, 
            {
                nav : true,
                user : usr,
                component : React.createElement(Component)
            }
            ));
            res.send(html);
        })
    }
    else
        res.redirect("/");
});

export default Router;