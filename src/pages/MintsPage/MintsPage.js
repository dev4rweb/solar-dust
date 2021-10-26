import React, {useEffect, useState} from 'react';
import './mintsPage.scss'
import Layout from "../../components/Layout";
import LogoBlock from "../../parts/LogoBlock/LogoBlock";
import DescriptionBlock from "../../parts/Mints/DescriptionBlock/DescriptionBlock";
import one from '../../assets/img/mints/image20.png'
import two from '../../assets/img/mints/image21.png'
import three from '../../assets/img/mints/image22.png'
import traitsData from '../../assets/traits_for_site/traits.json'

const MintsPage = () => {
    const [image, setImage] = useState(null)
    console.log(traitsData)

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
            </div>
        </Layout>
    );
};

export default MintsPage;