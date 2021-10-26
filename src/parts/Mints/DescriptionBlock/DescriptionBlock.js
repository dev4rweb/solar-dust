import React from 'react';
import './descriptionBlock.scss'
import RedBtn from "../../../components/RedBtn/RedBtn";
import girl from "../../../assets/img/mints/image19.png"
import {NavLink} from "react-router-dom";

const DescriptionBlock = () => {
    return (
        <section className="description_block">
            <div className="card">
                <div className="box_desc">
                    <div className="avatar_wrapper">
                        <img src={girl} alt="avatar" className="avatar"/>

                        <div className="btn_wrapper">
                            <RedBtn>Mint soon</RedBtn>
                        </div>
                    </div>
                    <div className="content">
                        <NavLink to="#" className="title_link">
                            <h5>Redsina #10</h5>
                        </NavLink>

                        <p className="desc">
                            Even a pair of sturdy blades behind her back did not save Redsina from the poison of the
                            basilisk. Replacing her lost eye with an implant, she realized that she could see #SolarDust
                            even through walls. I wonder if she can see through clothes?
                        </p>

                        <ul className="list_desc">
                            <li className="list_item">
                                <span>Rank:</span>
                                <span>6</span>
                            </li>
                            <li className="list_item">
                                <span>Rarity:</span>
                                <span className="cyan">6</span>
                            </li>
                            <li className="list_item">
                                <span>Skin:</span>
                                <span>Nomadic Elf (Uncommon - 27.38 %  have this)</span>
                            </li>
                            <li className="list_item">
                                <span>Hair:</span>
                                <span>Elven Princess Style ( Epic - 5.65%  have this)</span>
                            </li>
                            <li className="list_item">
                                <span>Eyes:</span>
                                <span>Emerald Eyes (Rare - 9.05%  have this)</span>
                            </li>
                            <li className="list_item">
                                <span>Charm:</span>
                                <span>Red Pepper (Rare -  6.28%  have this)</span>
                            </li>
                            <li className="list_item">
                                <span>Glasses:</span>
                                <span>Arnie's Red Eye (Legendary - 1.34%  have this)</span>
                            </li>
                            <li className="list_item">
                                <span>Armor:</span>
                                <span>Aristocrat Dress (Rare - 7.71%  have this)</span>
                            </li>
                            <li className="list_item">
                                <span>Background:</span>
                                <span>Orange Hope (Uncommon - 13.57%  have this)</span>
                            </li>
                            <li className="list_item">
                                <span>Weapon:</span>
                                <span>Elven Queen's Swords (Legendary -0.81%  have this)</span>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DescriptionBlock;