import React, { Component } from 'react';

class searchBox extends Component {
    render() {
        return (
            <div>
                <input type="search" name="search" id="search" placeholder="Search"/>
                <i className="fas fa-search search-icon"></i>
            </div>
        );
    }
}

export default searchBox;