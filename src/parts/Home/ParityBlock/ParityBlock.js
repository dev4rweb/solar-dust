import React from 'react';
import './parityBlock.scss'
import RoadmapCarousel from "../../../components/RoadmapCarousel/RoadmapCarousel";
import girl from '../../../assets/img/parity-girl.png'
import RedBtn from "../../../components/RedBtn/RedBtn";

const ParityBlock = () => {
    return (
        <section className="parity_block">
            <RoadmapCarousel />

            <h2 className="hide_title">Rarity</h2>
            <div className="card_wrapper">
                <div className="card_box">
                    <div className="left_content">
                        <h2 className="desktop"  id="parity">Rarity</h2>
                        <ul className="parity_list">
                            <li>
                                All our characters have different races, and more than 140 different traits
                            </li>
                            <li>
                                All generated NFTs are ranked according to the rarity of their traits
                            </li>
                            <li>
                                We also have 15 Mythical characters, with their own history in the solarDast world
                            </li>
                            <li>
                                RarityTable and Rarity and Rank NFT you can check on our RARITY page
                            </li>
                            <li>
                                A complete list of the rarity of all components and also determine how rare your NFT is, you can see in the "Rarity" section
                            </li>
                        </ul>
                        <div className="btn_wrapper">
                            <RedBtn>
                                Go to
                            </RedBtn>
                        </div>
                    </div>
                    <img src={girl} alt="girl" className="girl"/>
                </div>
            </div>
        </section>
    );
};

export default ParityBlock;