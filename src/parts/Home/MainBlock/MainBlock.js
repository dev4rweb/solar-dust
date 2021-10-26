import React from 'react';
import './mainBlock.scss'
import logo from '../../../assets/img/logo.png'
import cloudOne from '../../../assets/img/cloud.png'
import cloudTwo from '../../../assets/img/cloude_two.png'
import girl from '../../../assets/img/main-girl.png'
import RedBtn from "../../../components/RedBtn/RedBtn";
import Timer from "../../../components/Timer/Timer";

const MainBlock = () => {
    return (
        <>
            <section className="main_block">
                <img className="logo" src={logo} alt="logo"/>
                <img className="cloud_one" src={cloudOne} alt="cloud"/>
                <img className="cloud_one" src={cloudTwo} alt="cloud"/>
            </section>
            <section className="main_content">
                <div className="content_box">
                    <img src={girl} className="main_girl" alt="avatar"/>
                    <div className="content">
                        <h3>Mint will be opened on October 26</h3>
                        <RedBtn>Adopt me</RedBtn>
                    </div>
                </div>
                <p>
                    We are starting the sale of 10,000 unique collectible NFTs , which are also a pass to the NFT Games
                    BMB World.
                </p>
                <div className="clock_wrapper">
                    <Timer />
                </div>
            </section>
        </>
    );
};

export default MainBlock;