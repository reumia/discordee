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

        this.setState({ createAt: moment().format('YYYY-MM-DD HH:mm:ss') });
        fire.database().ref('servers').push( this.state );
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
                    <form onSubmit={this.handleSubmit}>
                        <label className="label" htmlFor="title">
                            <input
                                type="text"
                                className="input"
                                id="title"
                                name="title"
                                placeholder="서버 이름을 입력해주세요."
                                value={this.state.title}
                                onChange={this.handleInputChange}
                            />
                        </label>
                        <label className="label" htmlFor="description">
                            <textarea
                                name="description"
                                id="description"
                                cols="30"
                                rows="3"
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
                        <div className="button-wrap">
                            <button className="button button-primary" type="submit"><i className="material-icons">check</i> 등록요청</button>
                            <button className="button button-danger" type="button"><i className="material-icons">clear</i> 취소</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;
