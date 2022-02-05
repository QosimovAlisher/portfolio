const ADD_DIALOG = 'ADDIALOG';
const UPDATE_DIA = 'UPDATEDIA';


let initialSate = {
    massage: [
        { id: 1, massage: 'new massage' },
        { id: 1, massage: 'new ' },
        { id: 1, massage: 'new massage' },
        { id: 1, massage: 'new age' },
    ],
  
    dialogs: [
        { id: 1, name: 'Alisher' },
        { id: 2, name: 'massages dialogs' },
        { id: 3, name: 'massages dialogs' },
        { id: 4, name: 'massages dialogs' }

    ],
    addDialogmassage: 'salom'
}
const dialogsreduser = (state = initialSate, action) => {



    switch (action.type) {
        case ADD_DIALOG:
            let newDialog = {
                id: 5,
                massage: state.addDialogmassage
            }
            state.massage.push(newDialog)
            state.addDialogmassage = '';
            return state;

        case UPDATE_DIA:
            state.addDialogmassage = action.dialogText;
            return state;

        default:
            return state;
    }
    //  if (action.type === ADD_DIALOG){
    //         let newDialog = {
    //             id:5,
    //              massage:state.addDialogmassage
    //         }
    //         state.massage.push(newDialog)
    //         state.addDialogmassage = '' ;

    //     } else if(action.type === UPDATE_DIA){
    //         state.addDialogmassage = action.dialogText;
    //     }
    //   return state
}

export const addDialogPostActionCreator = () => ({type: 'ADDIALOG'})
export const updateDialogActionCreator = (dialogText) => ({type: 'UPDATEDIA',  dialogText:dialogText})
export default dialogsreduser