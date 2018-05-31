import React, { Component } from 'react';

class Select extends Component {
    
    putOption()
    {
        return this.props.options.map(e => <option key={Math.random()} value={e}>
            {e}
        </option>)
    }
    
    render() {
        return (
            <div>
                <label>{this.props.label}</label>
                <select className='full-width'>
                    {this.putOption()}
                </select>
                <i className="fas fa-angle-down select-icon"></i>
            </div>
        );
    }
}

export default Select;