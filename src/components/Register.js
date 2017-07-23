import React, {Component} from 'react';
import classNames from 'classnames';
import { WithContext as ReactTags } from 'react-tag-input';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            tags: [],
            createAt: '2017-07-20 00:00:00',
            addAt: '2017-07-21 00:00:00',
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

    handleChange = (event) => {
        console.log(event);
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
                            <input
                                type="text"
                                className="input"
                                id="title"
                                name="title"
                                placeholder="서버 이름을 입력해주세요."
                                value={this.state.title}
                                onChange={this.handleChange}
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
                                onChange={this.handleChange}
                            >
                                {this.state.description}
                            </textarea>
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
