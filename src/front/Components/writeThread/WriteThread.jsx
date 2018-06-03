import React, { Component } from 'react';

class WriteThread extends Component {
    render() {
        return (
            <div>
                <div className="card container pading-profile">
                    <h1>Creer un thread</h1>
                    <form action="/api/post/create/thread" method="post">
                    <div className="valign">
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" placeholder="Write your title" required/>
                    </div>
                    <label htmlFor="content">Content</label>
                    <textarea className="full-width" name="content" id="" cols="30" rows="10">
                    
                    </textarea>
                    <input className="twitter-back white-text" type="submit" value="Post"/>
                    </form>
                </div>                
            </div>
        );
    }
}

export default WriteThread;