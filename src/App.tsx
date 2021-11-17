import React, {ChangeEvent, useEffect, useState} from 'react';
import {SettingsBlock} from "./components/Settings/SettingsBlock";
import {CounterBlock} from "./components/Counter/CounterBlock";
import {Button} from "./components/Button/Button";
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {increaseValueAC, setCounterValueAC, setMaxValueAC, setStartValueAC} from "./state/counterReducer";


function App() {

    let dispatch = useDispatch()
    let startValue = useSelector<AppRootStateType, number>(state => state.counter.startValue)
    let maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue)
    let counterValue = useSelector<AppRootStateType, number>(state => state.counter.counterValue)


    let [error, setError] = useState<boolean>(false)
    let [settingsMode, setSettingsMode] = useState<boolean>(true)


    const setDisabled = !settingsMode || error;
    const setDisabledForInc = counterValue === maxValue || error || settingsMode
    const setDisabledForReset = maxValue === startValue || error || settingsMode


//изменяет значение в инпутах
    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        let currentValue = Number(e.currentTarget.value)
        setSettingsMode(true)

        switch (e.currentTarget.name) {
            case 'startValue':
                dispatch(setStartValueAC(currentValue))
                break;
            case 'maxValue':
                dispatch(setMaxValueAC(currentValue))
                break;
        }
    }

    useEffect(() => {
        if (startValue >= maxValue || startValue < 0) {
            setError(true)
        } else {
            setError(false)
        }
    }, [startValue, maxValue])

//увеличивает значение в счетчике
    const increaseValue = () => {
        dispatch(increaseValueAC())
    }

//устанавливает значение счетчика
    const setCounterValue = () => {
        if (!error) {
            dispatch(setCounterValueAC(startValue))
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
                <Button title='set' callback={setCounterValue} disabled={setDisabled}/>
            </div>
            <div className={'counterBlock'}>
                <CounterBlock counterValue={counterValue}
                              maxValue={maxValue}
                              error={error}
                              settingsMode={settingsMode}/>
                <Button title='inc' callback={increaseValue} disabled={setDisabledForInc}/>
                <Button title='reset' callback={setCounterValue} disabled={setDisabledForReset}/>
            </div>

        </div>
    );
}

export default App;
