import React from "react"
import About from "../About/About"
import Navbar from "../Navbar/Navbar"
import s from "./Home.module.css"


const Home = () => {
    return(
        <div className={s.home}>
        {/* <Navbar />  */}
        <h1>Home</h1>
        </div>
    )
}

export default Home