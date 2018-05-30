import Express from 'express';
import React from 'react';
import ReactDomServer from "react-dom/server";

import Main from '../../../front/Main';
import Component from '../../../front/Components/login/login';

const Router = Express.Router();

Router.get("/", (req, res)=> {
    let html = ReactDomServer.renderToString(
        React.createElement(Main, 
        {
            component : React.createElement(Component, {name : 'Charles'})
        }
        ));

    res.send(html);
});

export default Router;