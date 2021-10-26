import React from 'react';
import './logoBlock.scss'
import {Button, Form, FormControl} from "react-bootstrap";
import logo from '../../assets/img/page-log.png'

const LogoBlock = () => {
    return (
        <div className="logo_block">
            <div className="card">
                <div className="wrapper">
                    <img src={logo} alt="log" className="page_logo"/>
                    <Form className="d-flex searching_form">
                        <FormControl
                            type="search"
                            placeholder="Enter #ID or name"
                            className="search_input"
                            aria-label="Search"
                        />
                        <Button
                            variant="danger"
                            className="btn_search"
                        >
                            <span
                                className="material-icons"
                                style={{fontSize: '48px'}}
                            >
                                search
                            </span>
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default LogoBlock;