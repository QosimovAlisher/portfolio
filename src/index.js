import { state, subscribe } from "./Components/Redux/state";


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {  addPost, updateNewPostText } from './Components/Redux/state';


 let rerenderEntreTre = () => {

    ReactDOM.render(
        <App state={state} updateNewPostText = {updateNewPostText} addPost={addPost} />
        , document.getElementById('root')
    );

}

rerenderEntreTre(state)

subscribe(rerenderEntreTre); 