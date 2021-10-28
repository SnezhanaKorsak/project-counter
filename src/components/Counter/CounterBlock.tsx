import React from 'react';
import s from './CounterBlock.module.css'

type CounterBlockType = {
    counterValue: number
    maxValue: number
    error: boolean
    settingsMode: boolean
}

export const CounterBlock = ({counterValue,maxValue, ...props}: CounterBlockType) => {

    const setClass = props.error ? `${s.message} ${s.error}` : s.message
    const setClassForCounterValue = counterValue >= maxValue ? `${s.counterValue} ${s.error}` : s.counterValue


    return (

            <div className={'counter'}>
                {props.settingsMode &&
                <div className={setClass}>
                    {props.error
                        ? `Enter correct values`
                        : `Enter values and press 'set'`}
                </div>}


                <div className={setClassForCounterValue}>
                    {!props.error && counterValue}
                </div>

            </div>
    )
}