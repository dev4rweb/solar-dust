import React from 'react';
import './footer.scss'
import logo from '../../assets/img/footer-logo.png'
import {NavLink} from "react-router-dom";
import Social from "../../components/Social/Social";
import {HOME_PAGE, POSTS_PAGE, RARITIES_PAGE} from "../../utils/consts";
import {useHistory} from 'react-router-dom'

const Footer = () => {
    const history = useHistory()
    return (
        <footer className="footer">
            <div className="card">
                <div className="top_footer">
                    <img
                        src={logo}
                        alt="logo"
                        className="footer_logo"
                        onClick={()=>history.push(HOME_PAGE)}
                    />
                    <ul className="footer_nav">
                        <li><NavLink to="/#about">About</NavLink></li>
                        <li><NavLink to="/#show_cases">ShowCases</NavLink></li>
                        <li><NavLink to="/#faq">FAQ</NavLink></li>
                        <li><NavLink to="/#roadmap">ROADMAP</NavLink></li>
                        <li><NavLink to={RARITIES_PAGE}>RARITY</NavLink></li>
                        <li><NavLink to="/#news">NEWS</NavLink></li>
                        <li><NavLink to={POSTS_PAGE}>MINT</NavLink></li>
                    </ul>
                    <p className="desc">
                        Сollection of 10,000, your ticket to the game.
                        Price of mint X SOL
                    </p>
                    <div className="social_side">
                        <Social />
                        <span className="copyright">
                            SolarDust © 2021
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;