import React from 'react';
import Layout from "../../components/Layout";
import LogoBlock from "../../parts/LogoBlock/LogoBlock";
import TabBlock from "../../components/TabBlock/TabBlock";
import './postPage.scss'

const PostsPage = () => {
    return (
        <Layout>
            <section className="search_block">
                <LogoBlock />
            </section>
            <section className="tab_block">
                <TabBlock />
            </section>
        </Layout>
    );
};

export default PostsPage;