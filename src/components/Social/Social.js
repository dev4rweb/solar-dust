import React from 'react';
import './social.scss'
import {NavLink} from "react-router-dom";
import faceImg from '../../assets/img/social/face.png'
import letterImg from '../../assets/img/social/letter.png'
import fannyImg from '../../assets/img/social/fanny.png'
import twitterImg from '../../assets/img/social/twitter.png'
import instagramImg from '../../assets/img/social/instagram.png'

const Social = () => {
    return (
        <ul className="social">
            <li className="social_item"><NavLink to="#"><img src={faceImg} alt="social"/></NavLink></li>
            <li className="social_item"><NavLink to="#"><img src={letterImg} alt="social"/></NavLink></li>
            <li className="social_item"><NavLink to="#"><img src={fannyImg} alt="social"/></NavLink></li>
            <li className="social_item"><NavLink to="#"><img src={twitterImg} alt="social"/></NavLink></li>
            <li className="social_item"><NavLink to="#"><img src={instagramImg} alt="social"/></NavLink></li>
        </ul>
    );
};

export default Social;