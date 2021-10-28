import React from 'react';
import './mintDetailPage.scss'
import {useParams, useHistory} from 'react-router-dom'
import Layout from "../../components/Layout";
import logo from '../../assets/img/page-log.png'
import {HOME_PAGE} from "../../utils/consts";
import avatar from '../../assets/img/mints/avatar.png'
import OnlyTimer from "../../components/OnlyTimer/OnlyTimer";
import RedBtn from "../../components/RedBtn/RedBtn";

const MintDetailPage = () => {
    const {prefix, id} = useParams()
    let isTimer = false
    let isBtn = false;
    let isBalance = false;
    let isLive = false;
    let isContent = false
    let isSold = false
    let isPrice = false
    const history = useHistory()
    console.log('prefix', prefix)

    switch (prefix) {
        case 'skins':
            isPrice = true
            isContent = true
            isTimer = true
            isBtn = true
            break
        case 'eyes':
            isPrice = true
            isContent = true
            isTimer = true
            isBalance = true
            break
        case 'armors':
            isPrice = true
            isContent = true
            isLive = true
            isBtn = true
            break
        case 'weapons':
            isPrice = true
            isContent = true
            isLive = true
            isBalance = true
            break
        case 'hairs':
            isSold = true
            isBalance = true
            break
    }

    return (
        <Layout>
            <section className="detail_page">
                <div className="dt_wrapper">
                    <img
                        src={logo} alt="log"
                        className="page_logo"
                        onClick={() => history.push(HOME_PAGE)}
                    />
                </div>
            </section>

            <section className="dt_card_wrapper">
                <div className="card">
                    <div className="dt_content_side">
                        {
                            isContent &&
                            <p className="dt_content">
                                This world is lifeless. This world will turn into a global arena of military actions of a
                                universal scale and Elves Enchantresses have already found their way here. Thousands of
                                beautiful, dangerous and deadly she-elves are about to open the portals leading to the world
                                filled with SolarDust. Will it be enough for those who desperately desire to possess it?
                            </p>
                        }
                        {
                            isSold &&
                            <div className="td_sold">
                                <h5>100% already minted</h5>
                                <h1>We are <br/> sold out</h1>
                            </div>
                        }
                        <div className="td_timer_wrapper">
                            {
                                isTimer && <OnlyTimer />
                            }
                            {
                                isLive &&
                                <h2 className="td_live">
                                    Mint is live <br/>
                                    XX% already minted
                                </h2>
                            }
                        </div>
                        <div className="dt_btn_wrapper">
                            {
                                isBtn && <RedBtn>Connect wallet</RedBtn>
                            }
                            {
                                isBalance &&
                                <div className="td_balance_wrapper">
                                    <div className="td_cell">
                                        <span>Address:</span>
                                        <h4>4n79...CaZN</h4>
                                    </div>
                                    <div className="td_cell">
                                        <span>Balance:</span>
                                        <h4>12.964 SOL</h4>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="dt_avatar_side">
                        {
                            isPrice &&
                            <h5 className="dt_price">Mint price: 0.99 SOL</h5>
                        }
                        <img src={avatar} alt="avatar" className="dt_avatar"/>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default MintDetailPage;