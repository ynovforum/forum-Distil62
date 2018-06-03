import React, { Component } from 'react';

class Profile extends Component
{
    setRole()
    {
        switch (this.props.user.role)
        {
            case "User":
                return <img width="128px" height="128px" src="http://e-leclerc.scene7.com/is/image/gtinternet/3450970024792?wid=600&hei=600&fit=fit,1"/>
            break;
            case "Admin":
                return <img width="128px" height="128px" src="http://e-leclerc.scene7.com/is/image/gtinternet/3450970056045?wid=300&hei=300&fit=fit,1"/>
            break;
        }
    }

    render()
    {
        return (
            <div>
                <div className="card container pading-profile">
                    <h1>Edit my profile</h1>
                    <form action="/api/post/update/user"  method="post">
                        <div className="row profile-element">
                            <div className="col col-6">
                                <img className="responsive" width="258px" height="258px" src={this.props.user.icon} alt=""/>
                            </div>
                            <div className="col col-6">
                                <div className="valign">
                                    <label className="label-profile" htmlFor="icon">Icon</label>
                                    <input type="text" name="icon" id="" placeholder="Avatar's url"/>
                                </div>
                                <div className="valign">
                                    <label className="label-profile" htmlFor="username">username</label>
                                    <input type="text" name="username" id="" value={this.props.username} placeholder="Update your username"/>
                                </div>
                            </div>
                        </div>
                        <div className="profile-element">
                            <label htmlFor="bio">Bio</label>
                            <textarea className="full-width" name="bio" id="" cols="30" rows="10" >
                            
                            </textarea>
                        </div>
                        <div className="profile-element">
                            <label>You role : {this.props.user.role}</label>
                            {this.setRole()}
                        </div>
                            <input type="submit" value="Profile update"/>
                    </form>
                    <label>Bouton pour le debug</label>
                    <form action="/api/post/do/beAdmin"  method="post">
                        <input className="white-text pinterest-back" type="submit" value="Devenir admin"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default Profile;