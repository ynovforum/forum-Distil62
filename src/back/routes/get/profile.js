import Express from 'express';
import Firebase from '../../database/firebase';
import React from 'react';
import ReactDomServer from "react-dom/server";

import Main from '../../../front/Main';
import Component from '../../../front/Components/Profile/Profile';
import getUserData from '../../database/utils/getUserData';

const Router = Express.Router();

Router.get("/user/:id", (req, res)=> {
    res.send('id');
});

Router.get("/me", (req, res)=> {
    if (Firebase.app.auth().currentUser)
    {
        getUserData((usr) => {
            let html = ReactDomServer.renderToString(
            React.createElement(Main, 
            {
                nav : true,
                user : usr,
                component : React.createElement(Component, {user : usr})
            }
            ));
            res.send(html);
        })
    }
    else
    {
        res.redirect("/");
    }
});

export default Router;