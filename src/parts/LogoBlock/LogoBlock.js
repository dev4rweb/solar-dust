import React from 'react';
import './logoBlock.scss'
import {Button, Form, FormControl} from "react-bootstrap";
import logo from '../../assets/img/page-log.png'
import {useHistory} from 'react-router-dom'
import {HOME_PAGE} from "../../utils/consts";

const LogoBlock = ({placeholder = null}) => {
    const history = useHistory()
    return (
        <div className="logo_block">
            <div className="card">
                <div className="wrapper">
                    <img
                        src={logo} alt="log"
                        className="page_logo"
                        onClick={()=> history.push(HOME_PAGE)}
                    />
                    <Form className="d-flex searching_form">
                        <FormControl
                            type="search"
                            placeholder={placeholder ?? 'Enter #ID or name'}
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