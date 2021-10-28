import React from 'react';
import s from './Button.module.css'

type ButtonType = {
    title: string
    callback: () => void
    disabled: boolean
}

export const Button = ({title, callback, ...props}: ButtonType) => {
    const setClass = props.disabled ? `${s.button} ${s.disabled}` : s.button

    return <button className={setClass} onClick={callback} disabled={props.disabled}>
        {title}
    </button>

}