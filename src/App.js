import React from "react";
import './App.css';
import About from './Components/About/About';
import Acount from './Components/Acount/Acount';
// import Dialogs from './Components/Dialogs/Dialogs';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Servis/Services';
import Profile from './Components/Profile/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DialogsContainer from "./Components/Dialogs/DialogsContainer";


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

            <Route path="/profile" element={<Profile  store= {props.store}
            />} 
             />


            <Route path="/dialogs" element={<DialogsContainer
            store={props.store} />} />
            <Route path="/services" element={<Services />} />
            <Route path="/acount" element={<Acount />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
