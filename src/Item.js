import React from 'react';

function Item (props) {
    const data = props.data;
    const tagData = data.tags;
    const TagList = Object.keys(tagData).map((key) => {
        return (
            <Tag data={tagData[key]} key={key}/>
        )
    });

    return (
        <div className="item">
            <div className="item-title">{data.title}</div>
            <div className="item-description">{data.description}</div>
            <div className="item-tags tags">
                {TagList}
            </div>
        </div>
    );
}

function Tag (props) {
    const data = props.data;
    return (
        <span className="tag">{data}</span>
    )
}

export default Item;
