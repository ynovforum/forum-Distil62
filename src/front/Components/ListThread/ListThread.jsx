import React, { Component } from 'react';

class ListThread extends Component {
    
    getContent()
    {
        return this.props.threads.map(e => <div key={Math.random()}>
            <div className="row valign">
                <div className="col col-3">
                    <p className="no-margin">{e.title}</p>
                    {/* <p className="no-margin">{e.authorKey.username}</p> */}
                </div>
                <div className="col col-3">
                    {e.createdDate}
                </div>
                <div className="col col-3">
                {
                    e.solved ? 
                        <i className="list-thread-icon sucess-text center fas fa-check-circle"></i> : 
                        <i className="list-thread-icon danger-text center fas fa-exclamation-circle"></i>
                }
                </div>
                <div className="col col-3">
                    <a href={"/thread/" + e.key}>
                        <button className="sucess-back">Go to Thread</button>
                    </a>
                </div>
            </div>
            <hr/>
        </div>)
    }

    render() {
        return (
            <div className='card list-thread-margin'>
                <div className='row valign'>
                    <h1>Tous les threads :</h1>
                    <p className="no-margin">
                        <span style={{marginLeft : "12px"}}> {this.props.threads.length} Threads</span>
                    </p>
                </div>
                <div className='row'>
                    <div className="col col-3">
                        <h4>Title</h4>
                    </div>
                    <div className="col col-3">
                        <h4>Date</h4>                       
                    </div>
                    <div className="col col-3">
                        <h4>Solved</h4>                        
                    </div>
                    <div className="col col-3">
                        <h4></h4>
                    </div>
                </div>
                <hr/>
                {this.getContent()}
            </div>
        );
    }
}

export default ListThread;