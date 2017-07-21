import React, {Component} from 'react';
import 'reset-css/_reset.scss';
import './App.scss';

class App extends Component {
    constructor() {
        super();
        this.state = {

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

                </nav>
                <div className="app-body">
                    BODY
                </div>
                <div className="app-footer">
                    &copy; 2017 Discordee All right reserved.
                </div>
            </div>
        );
    }
}

export default App;
