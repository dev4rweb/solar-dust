import React, {useEffect, useState} from 'react';
import './timer.scss'
import RedBtn from "../RedBtn/RedBtn";

const Timer = ({endDate = null}) => {
    const [distance, setDistance] = useState(null);
    const time = endDate ?? `November 15, 2021 00:00:25`;
    const countDownDate = new Date(time).getTime();

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            setDistance((countDownDate - now));
            // console.log('This will run every second!', countDownDate);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    function splitNumber(number) {
        let output = [];
        if (number > 9) {
            let sNumber = number.toString();
            for (let i = 0; i < sNumber.length; i++) {
                output.push(sNumber.charAt(i));
            }
        } else {
            output.push('0');
            output.push(number.toString());
        }
        return output;
    }
    return (
        <div className="timer">
            <div className="table_timer">
                <div className="pairs">
                    <span className="cell">{splitNumber(days)[0]}</span>
                    <span className="cell">{splitNumber(days)[1]}</span>
                </div>
                <span className="sign">Days</span>
            </div>
            <div className="table_timer">
                <div className="pairs">
                    <span className="cell">{splitNumber(hours)[0]}</span>
                    <span className="cell">{splitNumber(hours)[1]}</span>
                </div>
                <span className="sign">Hours</span>
            </div>
            <div className="table_timer">
                <div className="pairs">
                    <span className="cell">{splitNumber(minutes)[0]}</span>
                    <span className="cell">{splitNumber(minutes)[1]}</span>
                </div>
                <span className="sign">Minutes</span>
            </div>
            <div className="table_timer">
                <div className="pairs">
                    <span className="cell">{splitNumber(seconds)[0]}</span>
                    <span className="cell">{splitNumber(seconds)[1]}</span>
                </div>
                <span className="sign">Seconds</span>
            </div>
            <RedBtn>
                Mint soon
            </RedBtn>
        </div>
    );
};

export default Timer;