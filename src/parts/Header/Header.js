import React from 'react';
import './header.scss'
import Navigation from "../../components/Navigation/Navigation";
import Social from "../../components/Social/Social";

const Header = () => {
    return (
        <header className="container">
            <div className="header">
                <Navigation />
                <Social />
            </div>
        </header>
    );
};

export default Header;