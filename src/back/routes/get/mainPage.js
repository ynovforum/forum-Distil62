import Express          from 'express';
import React            from 'react';
import ReactDomServer   from "react-dom/server";
import Firebase         from "../../database/firebase";

import Main         from '../../../front/Main';
import Component    from '../../../front/Components/index/index';
import getAuthorKeyByThreads from '../../database/utils/getAuthorKeyByThreads';
import getUserData from '../../database/utils/getUserData';

import Thread from '../../database/models/thread.json';

const Router = Express.Router();

Router.get("/", (req, res)=> {
    
    Firebase.ref('/threads/').once("value").then(async (threadsGet)=>{
        let threads = threadsGet.val();
        
        if (threads)
            await getAuthorKeyByThreads(threads);
        else 
            threads = [];

        if (Firebase.app.auth().currentUser)
        {
            
            getUserData((usr)=>{
                let html = ReactDomServer.renderToString(
                React.createElement(Main, 
                {
                    nav : true,
                    user : usr,
                    component : React.createElement(Component, {threads : threads, user : usr})
                }
                ));
                res.send(html);
            });
        }
        else
        {
            let html = ReactDomServer.renderToString(
            React.createElement(Main, 
            {
                nav : true,
                component : React.createElement(Component, {threads : threads})
            }
            ));
            res.send(html);
        }
    })
});

export default Router;