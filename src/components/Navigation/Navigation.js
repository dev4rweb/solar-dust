import React from 'react';
import './navigation.scss'
import {Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <Nav as="ul" className="navigation">
            <Nav.Item as="li">
                <Nav.Link href="/#about">
                    <span>About</span>
                    <hr className="underline"/>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link href="/#show_cases">
                    <span>ShowCases</span>
                    <hr className="underline"/>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link href="/#faq">
                    <span>FAQ</span>
                    <hr className="underline"/>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link href="/#roadmap">
                    <span>ROADMAP</span>
                    <hr className="underline"/>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link href="/#parity">
                    <span>RARITY</span>
                    <hr className="underline"/>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link href="/#news">
                    <span>NEWS</span>
                    <hr className="underline"/>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <NavLink to="/mints" className="nav-link">
                    <span>Mint</span>
                    <hr className="underline"/>
                </NavLink>
            </Nav.Item>
        </Nav>
    );
};

export default Navigation;