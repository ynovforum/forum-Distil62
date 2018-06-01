import React, { Component } from 'react';
import SearchBox from '../searchBox/searchBox';

class Nav extends Component {
    
    isConnected()
    {
        if (this.props.user)
        {
            return (<div>
                <img src={this.props.user.icon} alt="icon" width="48px" height="48px"/>
                <i className="fas fa-angle-down"></i>
            </div>)
        }
        else
        {
            return (<div>
                <a href="/login">Login</a>
                <a href="/register">Register</a>
            </div>)
        }
    }

    render() {
        return (
            <div>
                <div className="row nav-props">
                    <div className="col left">
                        <div className="row valign">                    
                            <a href="/"><img className="logo-nav" src='http://62.img.v4.skyrock.net/2642/50412642/pics/2937742181_1_3.gif' alt="logo" width='56px' height='56px'/></a>
                            <a href="/Events">Events <i className="fas fa-angle-down"></i></a>
                            <a href="/Browse">Browse</a>
                            <a href="/Your Tickets">Your Tickets</a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row right valign">
                            <SearchBox />
                            {this.isConnected()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;