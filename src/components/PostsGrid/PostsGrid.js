import React from 'react';
import {useHistory} from 'react-router-dom'
import './postGrid.scss'
import photo from '../../assets/img/post/post-grid-item.png'
import icon from '../../assets/img/post/ic_cat.png'
import {POST_DETAIL_PAGE} from "../../utils/consts";

const PostsGrid = () => {
    const posts = [
        {id: 1, title: 'The secrets of freelance invoice template proper use'},
        {id: 2, title: 'The secrets of freelance invoice template proper use'},
        {id: 3, title: 'The secrets of freelance invoice template proper use'},
        {id: 4, title: 'The secrets of freelance invoice template proper use'},
        {id: 5, title: 'The secrets of freelance invoice template proper use'},
        {id: 6, title: 'The secrets of freelance invoice template proper use'},
        {id: 7, title: 'The secrets of freelance invoice template proper use'},
        {id: 8, title: 'The secrets of freelance invoice template proper use'},
        {id: 9, title: 'The secrets of freelance invoice template proper use'},
    ]
    const history = useHistory()
    // console.log(history)
    return (
        <div className="posts_grid">

            {
                posts.map(post => {

                    return (
                        <div
                            className="post_grid_item"
                            key={post.id}
                            onClick={() => history.push(POST_DETAIL_PAGE + '/' + post.id)}
                        >
                            <img src={photo} alt="photo" className="grid_photo"/>
                            <div className="post_item_category">
                                <img src={icon} alt="icon" className="ic_cat"/>
                                <span className="cat_name">Article</span>
                            </div>
                            <p className="item_desc">
                                The secrets of freelance invoice template proper use
                            </p>
                            <span className="post_date">
                                Workee Team, 15th October 2021
                            </span>
                        </div>
                    )
                })
            }

        </div>
    );
};

export default PostsGrid;