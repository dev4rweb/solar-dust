import React from 'react';
import './postCard.scss'
import photo from '../../../../assets/img/post/post-card.png'
import icon from '../../../../assets/img/post/ic_article.png'
import {NavLink} from "react-router-dom";

const PostCard = () => {
    return (
        <div className="post_card">
            <img src={photo} alt="photo" className="card_photo"/>
            <div className="card_content">
                <div className="post_category">
                    <img src={icon} alt="icon"/>
                    <span>Article</span>
                </div>
                <p className="title">
                    The secrets of freelance invoice template proper use
                </p>
                <div className="tag_wrapper">
                    <NavLink to="#" className="post_tag">Tag 1</NavLink>
                    <NavLink to="#" className="post_tag">Tag 1</NavLink>
                </div>
                <p className="post_desc">
                    Workee Team, 15th October 2021
                </p>
            </div>
        </div>
    );
};

export default PostCard;