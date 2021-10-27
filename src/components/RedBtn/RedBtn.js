import React from 'react';
import './redBtn.scss'
import {Button} from "react-bootstrap";

const RedBtn = ({children, ...props}) => {
    return (
        <Button
            {...props}
            className="red_btn"
            variant="danger"
        >
            {children}
        </Button>
    );
};

export default RedBtn;