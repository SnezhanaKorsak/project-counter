import React, {ChangeEvent, useEffect, useState} from 'react';
import {SettingsBlock} from "./components/Settings/SettingsBlock";
import {CounterBlock} from "./components/Counter/CounterBlock";
import {Button} from "./components/Button/Button";
import './App.css';


function App() {

    let [startValue, setStartValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(5)
    let [counterValue, setCounterValue] = useState<number>(startValue)
    let [error, setError] = useState<boolean>(false)
    let [settingsMode, setSettingsMode] = useState<boolean>(true)

    const setDisabled = !settingsMode || error;
    const setDisabledForInc = counterValue === maxValue || error || settingsMode
    const setDisabledForReset = maxValue === startValue || error || settingsMode

    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {

        let currentValue = Number(e.currentTarget.value)
        setSettingsMode(true)
        switch (e.currentTarget.name) {
            case 'startValue':
                setStartValue(currentValue);
                break;
            case 'maxValue':
                setMaxValue(currentValue);
                break;
        }
        setError(false)
    }
    useEffect(() => {
        let startValueInLS = localStorage.getItem('startValue')
        let maxValueInLS = localStorage.getItem('maxValue')
        if (startValueInLS) {
            setStartValue(JSON.parse(startValueInLS))
            setCounterValue(JSON.parse(startValueInLS))
        }
        if (maxValueInLS) {
            setMaxValue(JSON.parse(maxValueInLS))
        }
    }, [])

    useEffect(() => {
        if (startValue < 0 || startValue >= maxValue) {
            setError(true)
        } else {
            localStorage.setItem('startValue', JSON.stringify(startValue))
            localStorage.setItem('maxValue', JSON.stringify(maxValue))
        }
    }, [startValue, maxValue])


    const increaseHandler = () => {
        setCounterValue(counterValue => counterValue + 1)
    }

    const resetHandler = () => {
        setCounterValue(startValue)
        /*setSettingsMode(false)*/
    }
    const setHandler = () => {
        if (!error) {
            setCounterValue(startValue)
            setSettingsMode(false)
        }
    }


    return (
            <div className="cover">

                <div className={'settingsBlock'}>
                    <SettingsBlock startValue={startValue}
                                   maxValue={maxValue}
                                   changeValue={changeValue}
                                   error={error}/>
                    <Button title='set' callback={setHandler} disabled={setDisabled}/>
                </div>
                <div className={'counterBlock'}>
                    <CounterBlock counterValue={counterValue}
                                  maxValue={maxValue}
                                  error={error}
                                  settingsMode={settingsMode}/>
                    <Button title='inc' callback={increaseHandler} disabled={setDisabledForInc}/>
                    <Button title='reset' callback={resetHandler} disabled={setDisabledForReset}/>
                </div>

            </div>
    );
}

export default App;
