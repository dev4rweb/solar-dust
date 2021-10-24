import React from 'react';
import './redBtn.scss'
import {Button} from "react-bootstrap";

const RedBtn = ({children}) => {
    return (
        <Button
            className="red_btn"
            variant="danger"
        >
            {children}
        </Button>
    );
};

export default RedBtn;