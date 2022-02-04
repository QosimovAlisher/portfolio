const ADD_DIALOG = 'ADDIALOG';
const UPDATE_DIA = 'UPDATEDIA';

export const dialogsreduser = (state, action) => {
debugger
    if (action.type === ADD_DIALOG){
            let newDialog = {
                id:5,
                 massage:state.addDialogmassage
            }
            state.massage.push(newDialog)
            state.addDialogmassage = '' ;

        } else if(action.type === UPDATE_DIA){
            state.addDialogmassage = action.dialogText;
        }
}