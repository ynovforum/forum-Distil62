import React, { Component } from 'react';
import SearchBox from '../searchBox/searchBox';

class Nav extends Component {
    
    constructor(props)
    {
        super(props);

        this.state = {
            dropDownHidden : false
        };

        this.showDrop = this.showDrop.bind(this);
    }

    showDrop()
    {
        this.setState({
            dropDownHidden : !this.state.dropDownHidden
        });
    }

    isConnectedRight()
    {
        if (this.props.user)
        {
            return (<div>
            {/* Le onClick dysfonctionne en rendu serveur */}
                <a href="/add/thread">
                    <button><i className="fas fa-plus"></i></button>
                </a>
                <a onClick={this.showDrop()}>
                    <img src={this.props.user.icon} alt="icon" width="48px" height="48px"/>
                    <i className="fas fa-angle-down"></i>
                </a>
                <div className="drop-down" hidden={this.state.dropDownHidden}>
                    <ul className="drop-down-list">
                        <li className="valign drop-down-line">
                            <a className="drop-down-link" href="/profile/me">
                                <span className="drop-down-title">Profile</span>
                                <i className="right far fa-user"></i>
                            </a>
                        </li>
                        <li className="valign drop-down-line">
                            <a className="drop-down-link" href="/logout">
                                <span className="drop-down-title" >Logout</span>
                                <i className="right fas fa-sign-out-alt"></i>
                            </a>
                        </li>
                    </ul>
                </div>
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
            <div className="row nav-props">
                <div className="col left">
                    <div className="row valign">                    
                        <a href="/"><img className="logo-nav" src='http://62.img.v4.skyrock.net/2642/50412642/pics/2937742181_1_3.gif' alt="logo" width='56px' height='56px'/></a>
                    </div>
                </div>
                <div className="col">
                    <div className="row right valign">
                        <SearchBox />
                        {this.isConnectedRight()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;