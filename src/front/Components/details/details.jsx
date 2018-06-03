import React, { Component } from 'react';

class details extends Component {
    
    getSolved()
    {
        return this.props.thread.solved ? 
            <i className="sucess-text right fas fa-check-circle card-icon"></i> : 
            <i className="danger-text right fas fa-exclamation-circle card-icon"></i>
    }
    
    getResponses()
    {
        if (this.props.thread.responses.length > 1)
        {
            let res = [];
            for (let i = 1; i < this.props.thread.responses.length; i++)
            {
                res.push(<div className="card pading-profile profile-element">
                        <div>
                            <img src={this.props.thread.responses[i].authorKey.icon} alt="icon" width="48px" height="48px"/>    
                            <div>
                                <p>{this.props.thread.responses[i].authorKey.username}</p>
                                <p><i>{this.props.thread.responses[i].createdDate}</i></p>
                            </div>
                        </div>
                        <hr/>
                        <div className="details-response-content">
                            <p>{this.props.thread.responses[i].content}</p>
                        </div>
                </div>)
            }
            return res;
        }
    }

    putResponse()
    {
        if (this.props.connected)
            return ( <div className="card pading-profile profile-element">
                <form action={"/api/post/create/response/" + this.props.thread.key} method="post">
                    <textarea className="full-width" height="64px" name="content" id="" cols="30" rows="10" placeholder="Write your response">
                    
                    </textarea>
                    <input className="sucess-back white-text" type="submit" value="Answer"/>
                </form>
            </div>)
    }

    render() {
        // this.props.thread.responses.reverse();
        return (
            <div>
                <div className="container">
                <div className="row profile-element">
                    <div className="col">
                        <h1>{this.props.thread.title}</h1>
                    </div>
                    <div className="col">
                        {this.getSolved()}                
                    </div>
                </div>
                    <div className="card pading-profile profile-element">
                        <div className="row">
                            <div className="col"> 
                                <img src={this.props.thread.responses[0].authorKey.icon} alt="icon" width="48px" height="48px"/>    
                            </div>
                            <div className="col">
                                <p>{this.props.thread.responses[0].authorKey.username}</p>
                                <p><i>{this.props.thread.responses[0].createdDate}</i></p>
                            </div>
                        </div>
                        <hr/>
                        <div className="details-response-content">
                            <p>{this.props.thread.responses[0].content}</p>
                        </div>
                    </div>
                    {this.putResponse()}
                    {this.getResponses()}
                </div>
            </div>
        );
    }
}

export default details;