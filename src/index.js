import store from "./Components/Redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import StoreContext from "./storeContext";


let rerenderEntreTre = (props) => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App />
                </StoreContext.Provider>  
        </BrowserRouter>, document.getElementById('root'));
};

rerenderEntreTre(store.getState())

store.subscribe(() => {
    let state = store.getState();
    rerenderEntreTre(state)
});  