import Express          from 'express';
import React            from 'react';
import ReactDomServer   from "react-dom/server";
import Firebase         from "../../database/firebase";

import Main         from '../../../front/Main';
import Component    from '../../../front/Components/index/index';
import getUserData  from '../../database/utils/getUserData';

const Router = Express.Router();

async function getUser(threads) {
    
    let threadList = Object.keys(threads);
    let result;
    
    await Promise.all(
        threadList.map(async elem => {
            result = await Firebase.ref('/users/' + threads[elem].authorKey).once("value");
            threads[elem].authorKey = result.val();
        })
    )
    return threads;
}

Router.get("/", (req, res)=> {
    
    Firebase.ref('/threads/').once("value").then(async (threadsGet)=>{
        let threads = threadsGet.val();
        
        await getUser(threads);

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