import React from 'react';
import Header from "../parts/Header/Header";
import Footer from "../parts/Footer/Footer";

const Layout = ({children}) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;