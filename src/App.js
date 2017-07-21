import React, {Component} from 'react';
import Items from './Items';

class App extends Component {
    constructor() {
        super();
        this.state = {
            items: {
                one: {
                    title: '배틀그라운드 같이 합시다!',
                    description: '설명글입니다. 이곳에 설명을 넣으면 이렇게 나옵니다. 글자가 길어도 계속 나옵니다. 행간을 적용하여야겠군요. 설명글입니다. 이곳에 설명을 넣으면 이렇게 나옵니다. 글자가 길어도 계속 나옵니다. 행간을 적용하여야겠군요. 설명글입니다. 이곳에 설명을 넣으면 이렇게 나옵니다. 글자가 길어도 계속 나옵니다. 행간을 적용하여야겠군요.',
                    tags: ['배틀그라운드', 'PUBG', 'BATTLEGROUND'],
                    createAt: '2017-07-20 00:00:00',
                    addAt: '2017-07-21 00:00:00',
                    isAdded: false
                },
                two: {
                    title: '제목',
                    description: '설명글입니다. 이곳에 설명을 넣으면 이렇게 나옵니다. 글자가 길어도 계속 나옵니다. 행간을 적용하여야겠군요.',
                    tags: ['배틀그라운드', 'PUBG', 'BATTLEGROUND'],
                    createAt: '2017-07-20 00:00:00',
                    addAt: '2017-07-21 00:00:00',
                    isAdded: false
                },
                three: {
                    title: '제목',
                    description: '설명글입니다. 이곳에 설명을 넣으면 이렇게 나옵니다. 글자가 길어도 계속 나옵니다. 행간을 적용하여야겠군요.',
                    tags: ['배틀그라운드', 'PUBG', 'BATTLEGROUND'],
                    createAt: '2017-07-20 00:00:00',
                    addAt: '2017-07-21 00:00:00',
                    isAdded: false
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
                    <div className="title">최근에 추가된 서버</div>
                    <Items data={this.state.items}/>
                </div>
                <div className="app-footer">
                    &copy; 2017 Discordee All right reserved.
                </div>
            </div>
        );
    }
}

export default App;
