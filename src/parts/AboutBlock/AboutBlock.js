import React from 'react';
import './aboutBlock.scss'
import dragon from '../../assets/img/dragon.png'
import girl from '../../assets/img/about-girl.png'
import {NavLink} from "react-router-dom";
import iconOne from '../../assets/img/union.png'

const AboutBlock = () => {
    return (
        <section id="about" className="about_block">
            <img src={dragon} alt="dragon" className="dragon"/>
            <div className="about_clouds"/>
            <div className="about_content_wrapper">
                <img src={girl} alt="girl" className="about_girl"/>
                <div className="about_content">
                    <h2>About</h2>
                    <p>
                        They were once roaming the streets of New Fang City. But now a pack of 8888 Fangsters have
                        assembled with one clear goal in mind; to take over the ETH blockchain. By far the toughest
                        block in the metaverse.
                    </p>
                    <p>
                        Some would argue they’re wolves. Others say they're cats. Maybe foxes?! All we know for sure is
                        that they’re randomly generated NFT creatures with the wildest attitude, assembled from over 160
                        traits and with 3.676.470 possible combinations.
                    </p>
                    <NavLink to="#" className="link">Verified Smart contract</NavLink>
                </div>
            </div>

            <div className="about_grid_wrapper">
                <div className="about_grid_item">
                    <img src={iconOne} alt="icon" className="icon"/>
                    <span className="title">
                        Unique
                    </span>
                    <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et
                        dolore magna aliqua.
                    </p>
                </div>
                <div className="about_grid_item">
                    <img src={iconOne} alt="icon" className="icon"/>
                    <span className="title">
                        Unique
                    </span>
                    <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et
                        dolore magna aliqua.
                    </p>
                </div>
                <div className="about_grid_item">
                    <img src={iconOne} alt="icon" className="icon"/>
                    <span className="title">
                        Unique
                    </span>
                    <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et
                        dolore magna aliqua.
                    </p>
                </div>
                <div className="about_grid_item">
                    <img src={iconOne} alt="icon" className="icon"/>
                    <span className="title">
                        Unique
                    </span>
                    <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et
                        dolore magna aliqua.
                    </p>
                </div>
                <div className="about_grid_item">
                    <img src={iconOne} alt="icon" className="icon"/>
                    <span className="title">
                        Unique
                    </span>
                    <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et
                        dolore magna aliqua.
                    </p>
                </div>
                <div className="about_grid_item">
                    <img src={iconOne} alt="icon" className="icon"/>
                    <span className="title">
                        Unique
                    </span>
                    <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et
                        dolore magna aliqua.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutBlock;