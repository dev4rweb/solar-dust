import React from 'react';
import './tabBlock.scss'
import {Tab, Tabs} from "react-bootstrap";
import ArticlesTab from "../Navigation/tab-content/ArticlesTab/ArticlesTab";

const TabBlock = () => {
    return (
        <div className="tab_wrapper">
            <Tabs
                defaultActiveKey="articles"
                id="uncontrolled-tab-example"
                className="mb-5">
                <Tab
                    eventKey="all_posts"
                    title="All posts"
                    className="post_tab"
                >
                    <div className="tab_content">
                        1
                    </div>
                </Tab>
                <Tab
                    eventKey="articles"
                    title="Articles"
                    className="post_tab"
                >
                    <ArticlesTab />
                </Tab>
                <Tab
                    eventKey="news"
                    title="News"
                    className="post_tab"
                >
                    <div className="tab_content">
                        3
                    </div>
                </Tab>
                <Tab
                    eventKey="giveaway"
                    title="Give away"
                    className="post_tab"
                >
                    <div className="tab_content">
                        4
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
};

export default TabBlock;