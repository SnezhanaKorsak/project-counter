const initialState = {
    startValue: 0,
    maxValue: 5,
    counterValue: 0,
}
export type CounterStateType = typeof initialState

type ActionsType = ReturnType<typeof increaseValueAC>
    | ReturnType<typeof setCounterValueAC>
    | ReturnType<typeof setStartValueAC>
    | ReturnType<typeof setMaxValueAC>


export const counterReducer = (state: CounterStateType = initialState, action: ActionsType): CounterStateType => {
    switch (action.type) {
        case "INCREASE-VALUE":
            return {...state, counterValue: state.counterValue + 1}

        case "SET-COUNTER-VALUE":
            return {...state, counterValue: action.value}
        case "SET-START-VALUE":
            return {...state, startValue: action.value}
        case "SET-MAX-VALUE":
            return {...state, maxValue: action.value}

        default:
            return state
    }
}

export const increaseValueAC = () => {
    return {
        type: 'INCREASE-VALUE'
    } as const
}
export const setCounterValueAC = (value: number) => {
    return {
        type: 'SET-COUNTER-VALUE',
        value
    } as const
}
export const setStartValueAC = (value: number) => {
    return {
        type: 'SET-START-VALUE',
        value
    } as const
}
export const setMaxValueAC = (value: number) => {
    return {
        type: 'SET-MAX-VALUE',
        value
    } as const
}

