import React from 'react';
import './newsBlock.scss'
import {useHistory} from 'react-router-dom'
import books from '../../../assets/img/books.png'
import one from '../../../assets/img/news/image20.png'
import two from '../../../assets/img/news/image21.png'
import three from '../../../assets/img/news/image22.png'
import RedBtn from "../../../components/RedBtn/RedBtn";
import {POSTS_PAGE} from "../../../utils/consts";

const NewsBlock = () => {
    const history = useHistory()
    return (
        <section id="news" className="news_bock">
            <img src={one} alt="cloud" className="cloud"/>
            <img src={two} alt="cloud" className="cloud"/>
            <img src={three} alt="cloud" className="cloud"/>
            <div className="card_wrapper">
                <div className="card">
                    <h2 className="nb_mobile">
                        NEWS & blogs
                    </h2>
                    <div className="card_box">
                        <img src={books} alt="books" className="books"/>
                        <div className="content_block">
                            <h2 className="nb_desktop">NEWS & blogs</h2>
                            <p>
                                We have a lot of useful information you need, News, Blogs, Lore and more - read our blog
                            </p>
                            <RedBtn
                                onClick={() => history.push(POSTS_PAGE)}
                            >
                                Go to
                            </RedBtn>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsBlock;