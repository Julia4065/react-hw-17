import React, { useState, useEffect } from 'react';
import '../App.css';

function Timer(props) {

    const [time, setTime] = useState(props.time);
    const [isOn, setIsOn] = useState(false);
    const [step, setStep] = useState(props.step);
    const [autostart, setAutostart] = useState(props.autostart);
    const [key, setKey] = useState(props.timerKey);

    function delay(ms) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }

    useEffect(() => {
        for (let i = time; i > 0; i--) {
            let chunk = (1540 / props.time).toFixed(2);
            delay(step)
                .then(() => {
                    if (isOn) {
                        setTime(time - step / 1000);
                        let chunks = (time - step / 1000) * chunk;
                        document.getElementById(key).style.width = `${chunks}px`;
                        if (time <= step / 1000) {
                            document.getElementById(key).style.width = "0px";
                            setIsOn(false);
                            setButtonText("Start");
                            document.querySelector(`.timerIsEnd-${key}`).innerText = props.onTimeEnd();
                        }
                    }
                })
        }
    }, [time, isOn]);

    useEffect(() => {
        if (autostart) {
            setButtonText("Stop");
            setIsOn(true);
        }
    }, []);

    function time1(ms) {
        return new Date(ms).toISOString().slice(11, -5);
    }

    const [buttonText, setButtonText] = useState("Start");
    const changeText = (text) => {
        if (text === "Start") {
            setIsOn(true);
            setButtonText("Stop");
        } else if (text === "Stop") {
            setIsOn(false);
            setButtonText("Start");
        }
    }

    return (
        <div className="App">
            <h2>{time1(time * 1000)}</h2>
            <p className={'timerIsEnd-' + key}></p>
            <button onClick={() => changeText(buttonText)}>{buttonText}</button>
            <div className="rectangle" id={key}></div>
        </div>
    );
}

export default Timer;