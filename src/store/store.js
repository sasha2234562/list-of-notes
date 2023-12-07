import {applyMiddleware, combineReducers, createStore} from "redux";
import {thunk} from 'redux-thunk';
import {notesReduser} from "./reduser";

const rootReducer = combineReducers({
    notes: notesReduser
})

export const store = createStore(rootReducer, applyMiddleware(thunk));