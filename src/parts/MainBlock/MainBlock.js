import React from 'react';
import './mainBlock.scss'
import logo from '../../assets/img/logo.png'
import cloudOne from '../../assets/img/cloud.png'
import cloudTwo from '../../assets/img/cloude_two.png'

const MainBlock = () => {
    return (
        <section className="main_block">
            <img className="logo" src={logo} alt="logo"/>
            <img className="cloud_one" src={cloudOne} alt="cloud"/>
            <img className="cloud_one" src={cloudTwo} alt="cloud"/>
        </section>
    );
};

export default MainBlock;