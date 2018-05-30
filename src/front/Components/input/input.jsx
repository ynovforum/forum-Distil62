import React, { Component } from 'react';

class Input extends Component {
    
    inputState()
    {
        if (this.props.valide == "sucess")
        {
            return <i className="fas fa-check-circle" style={{color : "green"}}></i>
        }
        else if (this.props.valide == "error")
        {
            return <i className="fas fa-exclamation-circle" style={{color : "red"}}></i>
        }
    }

    render() {
        return (
            <div>
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input name={this.props.name} id={this.props.id} type={this.props.type} placeholder={this.props.placeholder} className={this.props.className}/>
                {this.inputState()}
            </div>
        );
    }
}

export default Input;