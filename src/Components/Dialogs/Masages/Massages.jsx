import React from "react"

import s from "./Massages.module.css";


const Massages = (props) => {
    return (
        <div className={s.massages}>
           <p>  {props.massage}</p>
        </div>
    )
}



export default Massages