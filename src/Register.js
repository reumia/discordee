import React, {Component} from 'react';
import classNames from 'classnames';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '배틀그라운드 같이 합시다!',
            description: '설명글입니다. 이곳에 설명을 넣으면 이렇게 나옵니다. 글자가 길어도 계속 나옵니다. 행간을 적용하여야겠군요. 설명글입니다. 이곳에 설명을 넣으면 이렇게 나옵니다. 글자가 길어도 계속 나옵니다. 행간을 적용하여야겠군요. 설명글입니다. 이곳에 설명을 넣으면 이렇게 나옵니다. 글자가 길어도 계속 나옵니다. 행간을 적용하여야겠군요.',
            tags: ['배틀그라운드', 'PUBG', 'BATTLEGROUND'],
            createAt: '2017-07-20 00:00:00',
            addAt: '2017-07-21 00:00:00',
            isAdded: false
        }
    }

    render() {
        const classes = classNames({
            register: true,
            active: this.props.isVisible
        });

        return (
            <div className={classes}>
                <div className="title">서버 추가하기</div>
                <div className="form">
                    <form action="">
                        <label className="label" htmlFor="title">
                            <input type="text" className="input" id="title" name="title" placeholder="서버 이름을 입력해주세요."/>
                        </label>
                        <label className="label" htmlFor="description">
                            <textarea name="description" id="description" cols="30" rows="3" className="textarea" placeholder="서버에 대한 설명을 입력해주세요."/>
                        </label>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;
