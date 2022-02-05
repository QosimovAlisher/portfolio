import React from "react"
import { addDialogPostActionCreator, updateDialogActionCreator } from "../Redux/state";
// import { addDialogPostActionCreator, updateDialogActionCreator } from "../reducers/dialogsreducer";


import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Massages from "./Masages/Massages";

const Dialogs = (props) => {
  
    let dialog = props.massagesPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let massage = props.massagesPage.massage.map(m => <Massages massage = { m.massage} id={m.id} /> );


let dialogElement = React.createRef();
let AddDialog = () => {
    props.dispatch(addDialogPostActionCreator())
}

let onDialogsChange = () => {
    let dialogText = dialogElement.current.value;
    let action = (updateDialogActionCreator(dialogText))
    props.dispatch(action);
}


    return (
       <>
        <div className={s.dialogs}>
            <h1>Dialogs </h1>
           <textarea  value={props.massagesPage.addDialogmassage} ref={dialogElement}
            onChange={onDialogsChange}></textarea>
            <button onClick={AddDialog}>add commit</button>
            <div className={s.whatsapp}>
                <div className={s.dialogItem}>
                    {dialog}
                </div>
                <div className={s.dialogmassage}>
                   {massage}
                </div>

            </div>
        </div>
        </>
    )
}



export default Dialogs