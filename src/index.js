import store from "./Components/Redux/state";


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


let rerenderEntreTre = (state) => {

    ReactDOM.render(
        <App state={state} store={store} dispatch={store.dispatch.bind(store)} />
        , document.getElementById('root')
    );

}

rerenderEntreTre(store.getState())

store.subscribe(() => {
    let state = store.getState();
    rerenderEntreTre(state)
}); 