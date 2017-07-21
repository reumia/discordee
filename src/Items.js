import React from 'react';

function Items (props) {
    return (
        <div className="items">
            <div className="item">
                <div className="item-title">제목</div>
                <div className="item-description">설명</div>
                <div className="item-tags">
                    <a href="#" className="tag">태그1</a>
                    <a href="#" className="tag">태그2</a>
                    <a href="#" className="tag">태그3</a>
                </div>
            </div>
        </div>
    )

}

export default Items;
