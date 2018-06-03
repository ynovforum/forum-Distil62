import Express from 'express';
const Router = Express.Router();
import React            from 'react';
import ReactDomServer   from "react-dom/server";

import Main         from '../../../front/Main';
import Component    from '../../../front/Components/details/details';
import Firebase from '../../database/firebase';
import getResponsesByThread from '../../database/utils/getResponsesByThread';
import getAuthorKeyByResponses from '../../database/utils/getUsersDataByResponses';
import getUserData from '../../database/utils/getUserData';

Router.get("/:key", (req, res)=> {
    Firebase.ref('/threads/' + req.params.key).once('value').then(async threadGet => {
        let thread = threadGet.val();

        thread = await getResponsesByThread(thread);
        if (thread.responses)
        thread.responses = await getAuthorKeyByResponses(thread.responses);
        
        if (Firebase.app.auth().currentUser)
        {
            getUserData((usr)=>{
                let html = ReactDomServer.renderToString(
                React.createElement(Main, 
                {
                    nav : true,
                    user : usr,
                    component : React.createElement(Component, {thread : thread, connected : true})
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
                    component : React.createElement(Component, {thread : thread, connected : false})
                }
                ));
                res.send(html);
        }



    })
    .catch((error) => {
        console.error('ERROR THREAD DETAILS');
        console.error(error.code);
        console.error(error.message);
    });;
});

export default Router;