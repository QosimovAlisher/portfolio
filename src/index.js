import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let posts = [
    {id:1 ,  massage:'new masseges here ' , likes: '123'},
    {id:2 ,  massage:'new masseges here ' , likes: '123'},
    {id:3 ,  massage:'new masseges here ' , likes: '123'},
    {id:4 ,  massage:'new masseges here ' , likes: '123'},
]



let dialogs = [
    { id:1, name:'Alisher' },
    { id:2, name:'Alisher'  },
    { id:3, name:'Alisher' },
    { id:4, name:'Alisher' }
   
  ]

  let massage = [
      {id:1, massage: 'new massage'},
      {id:1, massage: 'new massage'},
      {id:1, massage: 'new massage'},
      {id:1, massage: 'new massage'},
  ]


ReactDOM.render(
    <App dialogs ={ dialogs} posts={posts}  massage={massage} />
, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
