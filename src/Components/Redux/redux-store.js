import { combineReducers, createStore } from "redux"
import dialogsreduser from "./dialogsreducer";
import profilereducer from "./profilereducer";

// uchta qiymatni birlashtiruvchi funksiya 


let reducers = combineReducers({
    dialogsreduser: dialogsreduser,
    profilereducer: profilereducer
});

export let store = createStore(reducers);


    