import React, { Component } from 'react';
import Input from "../input/input";
import Select from '../select/Select';

class Register extends Component {
    render() {
        return (
            <div className='container form-center'>
                <div className='vertical-center'>
                    <div className='card center'>
                        <div className='top-back'>
                            <div className='container'>
                                <a href="/">
                                    <img className='icon-login' src='http://62.img.v4.skyrock.net/2642/50412642/pics/2937742181_1_3.gif' width='128px' height='128px'/>  
                                </a>
                                <h2>Welcome! get started with a new account.</h2>
                            </div>
                        </div>
                        <div className='container form-container'>
                            <form method='post' action='/api/post/create/user'>
                                <div className='column-flex'>
                                    <Input label="Email" name='email' type='mail' placeholder='Addresse mail' className="full-width" required/>
                                    <Input label="Mot de passe" name='password' type='password' placeholder='Mot de passe' className="full-width" required/>
                                    <input className='sucess-back' type='submit' value='Sign in to Dashboard' />
                                </div>
                            </form>
                        </div>
                        <div className="row">
                            <div className="col col-3">
                                <hr />
                            </div>
                            <div className="col col-6">
                                Signin via social network
                            </div>
                            <div className="col col-3">
                                <hr />
                            </div>
                        </div>
                        <div className="row social-btn-container">
                            <div className="col col-3">
                                <button className="social-button twitter-back"> 
                                    <div className="in-social-button"><i className="fab fa-twitter social-icon twitter-text"></i></div>
                                </button>
                            </div>
                            <div className="col col-3 ">
                                <button className="social-button facebook-back"> 
                                    <div className="in-social-button"><i className="fab fa-facebook-f social-icon facebook-text"></i></div>
                                </button>
                            </div>
                            <div className="col col-3">
                                <button className="social-button pinterest-back"> 
                                    <div className="in-social-button"><i className="fab fa-pinterest-p social-icon pinterest-text"></i></div>
                                </button>
                            </div>
                            <div className="col col-3">
                                <button className="social-button dribble-back"> 
                                    <div className="in-social-button"><i className="fab fa-dribbble social-icon dribble-text"></i></div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="row under-login">
                        <div className='col col-8'>
                            <i>Already have a account ?</i>
                        </div>
                        <div className='col col-4 right'>
                            <a href="/login">login</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;