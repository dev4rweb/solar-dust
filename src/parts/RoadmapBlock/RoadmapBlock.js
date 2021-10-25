import React from 'react';
import './roadmap.scss'
import map from '../../assets/img/map.png'

const RoadmapBlock = () => {
    return (
        <section id="roadmap" className="roadmap">
            <h2>Roadmap</h2>
            <img src={map} alt="map" className="map"/>
        </section>
    );
};

export default RoadmapBlock;