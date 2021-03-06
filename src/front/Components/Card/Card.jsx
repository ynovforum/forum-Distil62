import React, { Component } from 'react';

class Card extends Component {

    solvedOrNot()
    {
        return this.props.thread.solved ? 
            <i className="sucess-text center fas fa-check-circle card-icon"></i> : 
            <i className="danger-text center fas fa-exclamation-circle card-icon"></i>
    }
    
    render() {
        if (this.props.thread)
        {
        return (
            <div>
                <div className="white-back card padding-card card-height">
                    <div className='img-container display-container'>
                        <img className='responsive' src={this.props.src}/>
                        <a href={"/thread/" + this.props.thread.key}>
                            <button className='display-topright featured-button'>Featured</button>
                        </a>
                    </div>
                    <div className='card-content'>
                        <div className='row valign'>
                            <div className='col'>
                                <h2 className='card-title'>{this.props.thread.title}</h2>
                                <p>{this.props.thread.authorKey.key}</p>
                            </div>
                            <div className='col'>
                                { this.solvedOrNot() }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
        }
        else
        return <div></div>
    }
}

export default Card;