import React from "react"
import StoreContext from "../../storeContext";
import { addDialogPostActionCreator, updateDialogActionCreator } from "../Redux/dialogsreducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    return <StoreContext.Consumer>
        {store => {
            let AddDialog = () => {
                store.dispatch(addDialogPostActionCreator())
            }

            let onDialogsChange = (dialogText) => {
                let action = (updateDialogActionCreator(dialogText))
                store.dispatch(action);
            }
            return (

                <Dialogs AddDialog={AddDialog} onDialogsChange={onDialogsChange} state={store.getState()} />

            )
        }
        }
    </StoreContext.Consumer>
}
export default DialogsContainer