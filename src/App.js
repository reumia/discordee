import React, {Component} from 'react';
import Items from './Items';

class App extends Component {
    constructor() {
        super();
        this.state = {
            items: {
                one: {

                }
            }
        }
    }

    render() {
        return (
            <div className="app">
                <header className="app-header">
                    <em className="title">Discordee.</em>
                    <span className="description">Discord Server Sharing Platform.</span>
                </header>
                <nav className="app-nav">
                    <div className="app-nav-left">
                        <input type="text" name="search" id="search" className="search input"/>
                        <label htmlFor="search"><i className="material-icons">search</i></label>
                    </div>
                    <div className="app-nav-right">
                        <button className="button"><i className="material-icons">add</i></button>
                        <button className="button"><i className="material-icons">refresh</i></button>
                    </div>
                </nav>
                <div className="app-body">
                    <Items/>
                </div>
                <div className="app-footer">
                    &copy; 2017 Discordee All right reserved.
                </div>
            </div>
        );
    }
}

export default App;
