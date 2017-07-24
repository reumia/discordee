import React, {Component} from 'react';
import axios from 'axios';
import querystring from 'querystring';
import fire from '../utils/fire';
import Item from './Item';
import Register from './Register';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRegisterVisible: true,
            servers: []
        }
    }

    componentWillMount(){
        let serversRef = fire.database().ref('servers').orderByKey().limitToLast(100);
        serversRef.on('child_added', snapshot => {
            let server = snapshot.val();
            server.id = snapshot.key;
            this.setState({ servers: [server].concat(this.state.servers) });
        })
    }

    handleRegister = () => {
        // this.setState({isRegisterVisible: this.state.isRegisterVisible === false});
        axios({
            headers: {"Access-Control-Allow-Origin": "*"}
        });

        axios.get('https://discordapp.com/api/oauth2/authorize', {
            params: {
                'client_id': '337506226680102914'
            }
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        const data = this.state.servers;
        const ItemList = data.map((item, key) => {
            if (item.isAdded) {
                return (
                    <Item data={item} key={key}/>
                )
            }
        });

        return (
            <div className="app">
                <header className="app-header">
                    <em className="title">Discordee.</em>
                    <span className="description">Discord Server Sharing Platform.</span>
                </header>
                <nav className="app-nav">
                    <div className="row">
                        <div className="col">
                            <div className="search">
                                <input type="text" name="search" id="search" className="input search-input"/>
                                <label className="search-label" htmlFor="search"><i className="material-icons">search</i></label>
                            </div>
                        </div>
                        <div className="col">
                            <button className="button" onClick={this.handleRegister}><i className="material-icons">add</i></button>
                            <button className="button"><i className="material-icons">refresh</i></button>
                        </div>
                    </div>
                </nav>
                <div className="app-body">
                    <Register isVisible={this.state.isRegisterVisible}/>
                    <div className="title">최근에 추가된 서버</div>
                    <div className="items">
                        {ItemList}
                    </div>
                </div>
                <div className="app-footer">
                    &copy; 2017 Discordee All right reserved.
                </div>
            </div>
        );
    }
}

export default App;
