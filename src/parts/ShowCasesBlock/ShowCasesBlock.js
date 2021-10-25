import React from 'react';
import './showCasesBlock.scss'
import MultiCarousel from "../../components/MultiCarousel/MultiCarousel";

const ShowCasesBlock = () => {
    return (
        <section id="show_cases" className="show_cases">
            <h2>SHOWCASES</h2>
            <MultiCarousel/>
        </section>
    );
};

export default ShowCasesBlock;