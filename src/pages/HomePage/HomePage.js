import React from 'react';
import Layout from "../../components/Layout";
import MainBlock from "../../parts/MainBlock/MainBlock";
import AboutBlock from "../../parts/AboutBlock/AboutBlock";
import ShowCasesBlock from "../../parts/ShowCasesBlock/ShowCasesBlock";
import FaqBlock from "../../parts/FaqBlock/FaqBlock";
import RoadmapBlock from "../../parts/RoadmapBlock/RoadmapBlock";
import ParityBlock from "../../parts/ParityBlock/ParityBlock";
import NewsBlock from "../../parts/NewsBlock/NewsBlock";

const HomePage = () => {
    return (
        <Layout>
            <MainBlock />
            <AboutBlock />
            <ShowCasesBlock />
            <FaqBlock />
            <RoadmapBlock />
            <ParityBlock />
            <NewsBlock />
        </Layout>
    );
};

export default HomePage;