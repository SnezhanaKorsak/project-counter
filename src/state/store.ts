import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";

export const rootReducer = combineReducers({
    counter: counterReducer
})

let preloadedState;
const persistedTodosString = localStorage.getItem('state')
if (persistedTodosString) {
    preloadedState = JSON.parse(persistedTodosString)
}

export const store = createStore(rootReducer, preloadedState)

store.subscribe(() => {
    localStorage.setItem('state', JSON.stringify(store.getState()))
})

export type AppRootStateType = ReturnType<typeof rootReducer>