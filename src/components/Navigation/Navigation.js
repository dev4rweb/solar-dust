import React, {useState} from 'react';
import './navigation.scss'
import {Button, Nav, Offcanvas} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {MINTS_PAGE, RARITIES_PAGE} from "../../utils/consts";
import mobMenu from '../../assets/img/mob-menu.png'

const Navigation = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
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
                    <Nav.Link href={RARITIES_PAGE}>
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
                    <NavLink to={MINTS_PAGE} className="nav-link">
                        <span>Mint</span>
                        <hr className="underline"/>
                    </NavLink>
                </Nav.Item>
            </Nav>
            <>
                <div
                    className="mob_button"
                    onClick={handleShow}
                >
                    <img src={mobMenu} alt="menu" className="mob_menu"/>
                </div>

                <Offcanvas
                    show={show}
                    onHide={handleClose}
                    className="navigation_mobile"
                >
                    <Offcanvas.Header>
                        {/*<Offcanvas.Title/>*/}
                        <span
                            onClick={handleClose}
                            className="btn_close"
                        >
                            X
                        </span>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav as="ul" className="navigation_mobile">
                            <Nav.Item as="li">
                                <Nav.Link href="/#about">
                                    <span
                                        onClick={handleClose}>
                                        About
                                    </span>
                                    <hr className="underline"/>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link href="/#show_cases">
                                    <span
                                        onClick={handleClose}
                                    >
                                        ShowCases
                                    </span>
                                    <hr className="underline"/>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link href="/#faq">
                                    <span
                                        onClick={handleClose}
                                    >
                                        FAQ
                                    </span>
                                    <hr className="underline"/>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link href="/#roadmap">
                                    <span
                                        onClick={handleClose}
                                    >
                                        ROADMAP
                                    </span>
                                    <hr className="underline"/>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link href={RARITIES_PAGE}>
                                    <span>RARITY</span>
                                    <hr className="underline"/>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link href="/#news">
                                    <span
                                        onClick={handleClose}
                                    >
                                        NEWS
                                    </span>
                                    <hr className="underline"/>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <NavLink to={RARITIES_PAGE} className="nav-link">
                                    <span>Mint</span>
                                    <hr className="underline"/>
                                </NavLink>
                            </Nav.Item>
                        </Nav>
                    </Offcanvas.Body>
                </Offcanvas>
            </>
        </>
    );
};

export default Navigation;