import React from "react"
import DialogItem from "./DialogItem/DialogItem";

import s from "./Dialogs.module.css";


const Dialogs = (props) => {

let dialog = props.dialogs.map(d => <DialogItem name= {d.name}  id = {d.id} /> );
    return(
        <div className={s.dialogs}>

            <h1>Dialogs </h1>
        <input type="text"  />
        <button>add commit</button>
        <div className={s.massage}> {dialog}</div>
        </div>
    )
}



export default Dialogs