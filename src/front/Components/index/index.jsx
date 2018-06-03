import React from 'react';
import Select from '../select/Select';
import Card from '../Card/Card';
import ListThread from '../ListThread/ListThread';

class Index extends React.Component {
    
    listThread;
    last;
    beforlast;

    constructor(props)
    {
        super(props);
        this.listThread = Object.keys(this.props.threads).map(e => this.props.threads[e]);
        this.listThread.reverse();
        this.last = this.listThread.length - 1;
        this.beforlast = this.last - 1;
    }

    getListThreads()
    {
        if (this.listThread.length > 2)
            this.listThread.splice(this.beforlast, 2);
        else
            this.listThread = [];

        return <ListThread threads={this.listThread} />
    }

    render()
    {
        return (
            <div>
                <div className="row thread-list-container">
                    <div className="col col-2 margin-threads-left">
                        <label>GnaGna</label>
                        <ul className="menu-threads">
                            <li className="menu-threads-item">
                                <button className="menu-threads-button">
                                    <i className="fas fa-trophy icon-thread-list"></i> featured event
                                </button>
                            </li>
                            <li className="menu-threads-item">
                                <button className="menu-threads-button">
                                    <i className="fas fa-trophy icon-thread-list"></i> featured event
                                </button>
                            </li>
                            <li className="menu-threads-item">
                                <button className="menu-threads-button">
                                    <i className="fas fa-trophy icon-thread-list"></i> featured event
                                </button>
                            </li>
                            <li className="menu-threads-item">
                                <button className="menu-threads-button">
                                    <i className="fas fa-trophy icon-thread-list"></i> featured event
                                </button>
                            </li>
                            <li className="menu-threads-item">
                                <button className="menu-threads-button">
                                    <i className="fas fa-trophy icon-thread-list"></i> featured event
                                </button>
                            </li>
                        </ul>
                        <label>GnaGna</label>
                        <ul className="menu-threads">
                            <li className="menu-threads-item">
                                <button className="menu-threads-button">
                                    <i className="fas fa-trophy icon-thread-list"></i> featured event
                                </button>
                            </li>
                            <li className="menu-threads-item">
                                <button className="menu-threads-button">
                                    <i className="fas fa-trophy icon-thread-list"></i> featured event
                                </button>
                            </li>
                            <li className="menu-threads-item">
                                <button className="menu-threads-button">
                                    <i className="fas fa-trophy icon-thread-list"></i> featured event
                                </button>
                            </li>
                            <li className="menu-threads-item">
                                <button className="menu-threads-button">
                                    <i className="fas fa-trophy icon-thread-list"></i> featured event
                                </button>
                            </li>
                            <li className="menu-threads-item">
                                <button className="menu-threads-button">
                                    <i className="fas fa-trophy icon-thread-list"></i> featured event
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="col col-10">
                        <div className="row">
                            <div className="col">
                                <h1>Featured Event</h1>
                            </div>
                            <div className="col">
                                <div className="right">
                                    {/* <Select options={['bonjour', 'je', 'fais', 'de']} /> */}
                                </div>
                            </div>
                        </div>
                        <div className="row valign">
                            <div className="col">
                                <Card thread={this.listThread[this.last]} src='https://image.noelshack.com/fichiers/2018/22/5/1527842703-oscar-ivan-esquivel-arteaga-666572-unsplash.jpg' />
                            </div>
                            <div className="col">
                                <Card thread={this.listThread[this.beforlast]} src='https://image.noelshack.com/fichiers/2018/22/5/1527848506-piotr-chrobot-276746-unsplash.jpg' />                            
                            </div>
                        </div>
                        {this.getListThreads()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Index;