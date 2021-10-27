import React from 'react';
import {useParams} from 'react-router-dom'
import Layout from "../../components/Layout";
import Timer from "../../components/Timer/Timer";

const MintDetailPage = () => {
    const {prefix, id} = useParams()
    console.log('prefix', prefix)
    return (
        <Layout>
            <section className="container" style={{marginTop: 200}}>
                <Timer endDate={`October 28, 2021 23:23:23`} />

            </section>
            <section className="container" style={{marginTop: 200}}>
                <h2>Завтра сделаю :-)</h2>

            </section>
        </Layout>
    );
};

export default MintDetailPage;