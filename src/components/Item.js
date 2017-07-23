import React from 'react';

function Item (props) {
    const data = props.data;
    const tags = data.tags;

    let TagList = '';
    if (typeof tags !== 'undefined') TagList = tags.map((tag, key) => <Tag data={tag} key={key}/>);

    function handleClick () {
        alert(data.code);
    }

    return (
        <div className="item">
            <div className="button-group">
                <button className="button button-default" onClick={handleClick}><i className="material-icons">add</i> 서버 추가하기</button>
            </div>
            <div className="item-content">
                <div className="item-title">{data.title}</div>
                <div className="item-description">{data.description}</div>
                <div className="item-tags tags">
                    { TagList }
                </div>
            </div>
        </div>
    );
}

function Tag (props) {
    const data = props.data;
    return (
        <span className="tag">{data.text}</span>
    )
}

export default Item;
