import React from "react";
import './App.css';
import About from './Components/About/About';
import Acount from './Components/Acount/Acount';
import Dialogs from './Components/Dialogs/Dialogs';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Servis/Services';
import Profile from './Components/Profile/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = (props) => {

 
  return (
    <BrowserRouter>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route path="/profile" element={<Profile  posts={props.state.profilePage.posts}
            newPostText = {props.state.profilePage.newPostText}
            updateNewPostText={props.updateNewPostText}
             addPost={props.addPost} />} />



             
            <Route path="/dialogs" element={<Dialogs dialogs={props.state.massagesPage.dialogs} massage={props.state.massagesPage.massage} />} />
            <Route path="/services" element={<Services />} />
            <Route path="/acount" element={<Acount />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
