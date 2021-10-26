import React from 'react';
import Layout from "../../components/Layout";
import MainBlock from "../../parts/Home/MainBlock/MainBlock";
import AboutBlock from "../../parts/Home/AboutBlock/AboutBlock";
import ShowCasesBlock from "../../parts/Home/ShowCasesBlock/ShowCasesBlock";
import FaqBlock from "../../parts/Home/FaqBlock/FaqBlock";
import RoadmapBlock from "../../parts/Home/RoadmapBlock/RoadmapBlock";
import ParityBlock from "../../parts/Home/ParityBlock/ParityBlock";
import NewsBlock from "../../parts/Home/NewsBlock/NewsBlock";

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