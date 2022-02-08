import React from "react"
import { addDialogPostActionCreator, updateDialogActionCreator } from "../Redux/dialogsreducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
let state = props.store.getState();
let AddDialog = () => {
    props.store.dispatch(addDialogPostActionCreator())
}

let onDialogsChange = (dialogText) => {
    let action = (updateDialogActionCreator(dialogText))
    props.store.dispatch(action);
}
    return (
       <>
       <Dialogs AddDialog={AddDialog}onDialogsChange={onDialogsChange} state={state} /> 
        </>
    )
}
export default DialogsContainer