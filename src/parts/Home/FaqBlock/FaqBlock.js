import React from 'react';
import './faqBlock.scss'
import cloud from '../../../assets/img/faq-cloud.png'
import FaqAccordion from "../../../components/FaqAccordion/FaqAccordion";

const FaqBlock = () => {
    return (
        <section id="faq" className="faq_block">
            <img src={cloud} alt="cloud" className="faq_cloud"/>
            <h2>Faq</h2>
            <FaqAccordion />
        </section>
    );
};

export default FaqBlock;