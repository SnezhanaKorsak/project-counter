import React, {ChangeEvent} from 'react';
import s from './SettingsBlock.module.css'
import {Input} from "../Input/Input";

type SettingsBlockType = {
    startValue: number
    maxValue: number
    changeValue: (e: ChangeEvent<HTMLInputElement>) => void
    error: boolean
}

export const SettingsBlock = (props: SettingsBlockType) => {

    let setClassNameForInput = props.error ? s.error : s.input;


    return (

            <div className='settings'>
                <Input labelText={'start value:'}
                       className={setClassNameForInput}
                       inputName={'startValue'}
                       value={props.startValue}
                       callback={props.changeValue}/>

                <Input labelText={'max value:'}
                       className={setClassNameForInput}
                       inputName={'maxValue'}
                       value={props.maxValue}
                       callback={props.changeValue}/>

            </div>




    )
}