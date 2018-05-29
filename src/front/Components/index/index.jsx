import React from 'react';

class Index extends React.Component {
    render()
    {
        return (
            <h1 className='test'>Bonjour {this.props.name}</h1>
        )
    }
}

export default Index;