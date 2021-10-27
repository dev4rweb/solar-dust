import React from 'react';
import './mintsPage.scss'
import Layout from "../../components/Layout";
import LogoBlock from "../../parts/LogoBlock/LogoBlock";
import DescriptionBlock from "../../parts/Mints/DescriptionBlock/DescriptionBlock";
import one from '../../assets/img/mints/image20.png'
import two from '../../assets/img/mints/image21.png'
import three from '../../assets/img/mints/image22.png'
import traitsData from '../../assets/traits_for_site/traits.json'
import TraitsCarousel from "../../components/TraitsCarousel/TraitsCarousel";

const MintsPage = () => {
    // console.log(traitsData)

    return (
        <Layout>
            <section className="searching_section">
                <img src={one} alt="clouds" className="clouds"/>
                <img src={two} alt="clouds" className="clouds"/>
                <img src={three} alt="clouds" className="clouds"/>
                <LogoBlock />
            </section>
            <DescriptionBlock />
            <div className="traits_section">
                <h2>Traits</h2>
                <div className="skin">
                    <h3>Skin</h3>
                    <TraitsCarousel data={traitsData.skins} />
                </div>
                <div className="eyes">
                    <h3>Eyes</h3>
                    <TraitsCarousel data={traitsData.eyes} />
                </div>
                <div className="armor">
                    <h3>Armor</h3>
                    <TraitsCarousel data={traitsData.armors} />
                </div>
                <div className="weapons">
                    <h3>Weapons</h3>
                    <TraitsCarousel data={traitsData.weapons} classWith={`wrap_six`} amount={6} />
                </div>
                <div className="erings">
                    <h3>Erings</h3>
                    <TraitsCarousel data={traitsData.hairs} classWith={`wrap_four`} amount={4} />
                </div>
            </div>
        </Layout>
    );
};

export default MintsPage;