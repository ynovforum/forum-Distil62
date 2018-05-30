import React, { Component } from 'react';
import Input from "../input/input";

class login extends Component {
    render() {
        return (
            <div className='container'>
                <div className='vertical-center'>
                    <div className='card center'>
                        <div className='light-grey-back'>
                            <div className='container'>
                                <img className='icon-login' src='https://png.icons8.com/color/1600/c-programming' width='128px' height='128px'/>
                                <h3 className='margin-3'>Welcome back! Please Login.</h3>
                            </div>
                        </div>
                        <div className='container'>
                            <form method='post' action='/api/post/do/login'>
                                <div className='column-flex'>
                                    <Input name='email' type='mail' placeholder='Addresse mail' className="error" valide="error" />
                                    <Input name='password' type='password' placeholder='Mot de passe' valide="error"/>
                                    <input className='sucess-back' type='submit' value='Sign in to Dashboard' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default login;