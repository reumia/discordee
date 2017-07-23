import React, {Component} from 'react';
import fire from '../utils/fire';
import moment from 'moment';
import classNames from 'classnames';
import { WithContext as ReactTags } from 'react-tag-input';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            code: '',
            description: '',
            tags: [],
            createAt: '',
            addAt: null,
            isAdded: false
        }
    }

    handleDelete = (i) => {
        let tags = this.state.tags;
        tags.splice(i, 1);
        this.setState({tags: tags});
    }

    handleAddition = (tag) => {
        let tags = this.state.tags;
        tags.push({
            id: tags.length + 1,
            text: tag
        });
        this.setState({tags: tags});
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const currentTime = moment().format('YYYY-MM-DD HH:mm:ss');
        this.setState(
            {
                createAt: currentTime
            },
            this.updateDatabase
        );
    }

    updateDatabase = () => {
        fire.database().ref('servers').push( this.state );
        this.resetForm();
    }

    resetForm = () => {
        this.setState({
            title: '',
            code: '',
            description: '',
            tags: [],
            createAt: '',
            addAt: null,
            isAdded: false
        });
    }

    render() {
        const classes = classNames({
            register: true,
            active: this.props.isVisible
        });

        return (
            <div className={classes}>
                <div className="title">서버 추가하기</div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form">
                    <label className="label">
                        <input
                            type="text"
                            className="input"
                            name="title"
                            placeholder="서버 이름을 입력해주세요."
                            value={this.state.title}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <label className="label">
                        <input
                            type="text"
                            className="input"
                            name="code"
                            placeholder="서버 초대코드를 입력해주세요."
                            value={this.state.code}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <label className="label">
                        <textarea
                            cols="30"
                            rows="3"
                            name="description"
                            className="textarea"
                            placeholder="서버에 대한 설명을 입력해주세요."
                            onChange={this.handleInputChange}
                            value={this.state.description}
                        />
                    </label>
                    <ReactTags
                        tags={this.state.tags}
                        handleDelete={this.handleDelete}
                        handleAddition={this.handleAddition}
                        placeholder="태그를 추가해 주세요."
                        classNames={{
                            tags: 'tag-form',
                            tagInput: 'tag-input-wrap',
                            tagInputField: 'input tag-input',
                            selected: 'tag-selected',
                            tag: 'tag-item',
                            remove: 'tag-item-remove'
                        }}
                    />
                    </div>
                    <div className="button-group">
                        <button className="button button-primary" type="submit"><i className="material-icons">check</i> 등록요청</button>
                        <button className="button button-danger" type="button"><i className="material-icons">clear</i> 취소</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Register;
