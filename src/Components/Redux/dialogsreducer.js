const ADD_DIALOG = 'ADDIALOG';
const UPDATE_DIA = 'UPDATEDIA';

const dialogsreduser = (state, action) => {



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

export default dialogsreduser