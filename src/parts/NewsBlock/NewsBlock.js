import React from 'react';
import './newsBlock.scss'
import books from '../../assets/img/books.png'
import one from '../../assets/img/news/image20.png'
import two from '../../assets/img/news/image21.png'
import three from '../../assets/img/news/image22.png'
import RedBtn from "../../components/RedBtn/RedBtn";

const NewsBlock = () => {
    return (
        <section id="news" className="news_bock">
            <img src={one} alt="cloud" className="cloud"/>
            <img src={two} alt="cloud" className="cloud"/>
            <img src={three} alt="cloud" className="cloud"/>
            <div className="card_wrapper">
                <div className="card">
                    <div className="card_box">
                        <img src={books} alt="books" className="books"/>
                        <div className="content_block">
                            <h2>NEWS & blogs</h2>
                            <p>
                                We have a lot of useful information you need, News, Blogs, Lore and more - read our blog
                            </p>
                            <RedBtn>Go to</RedBtn>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsBlock;