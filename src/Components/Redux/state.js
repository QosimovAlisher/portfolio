const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';



let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, massage: 'new masseges here ', likes: '123' },
                { id: 3, massage: 'new masseges here ', likes: '123' },
            ],
            newPostText: 'it inkubatior'
        },
        massagesPage: {
            massage: [
                { id: 1, massage: 'new massage' },
                { id: 1, massage: 'new massage' },
                { id: 1, massage: 'new massage' },
                { id: 1, massage: 'new massage' },
            ],
          
            dialogs: [
                { id: 1, name: 'Alisher' },
                { id: 2, name: 'massages dialogs' },
                { id: 3, name: 'massages dialogs' },
                { id: 4, name: 'massages dialogs' }

            ],
            // newTextDialog
            addDialogmassage: 'salom'
        }
    },
    _colSubscriber() {
        console.log('state ')
    },
    getState() {
        return this._state;
    },


    subscribe(observer) {
        this._colSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                massage: this._state.profilePage.newPostText,
                likes: 21
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._colSubscriber(this._state)

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._colSubscriber(this._state)
        }
        else if (action.type === 'ADDIALOG'){
            let newDialog = {
                id:5,
                 massage:this._state.massagesPage.addDialogmassage
            }
            this._state.massagesPage.massage.push(newDialog)
            this._state.massagesPage.massage.addDialogmassage = '' ;
            this._colSubscriber(this._state)
        } else if(action.type === 'UPDATEDIA'){
            this._state.massagesPage.addDialogmassage = action.dialogText;
            this._colSubscriber(this._state)
        }
    }
}
export const addDialogPostActionCreator = () => ({type: 'ADDIALOG'})
export const updateDialogActionCreator = (dialogText) => ({type: 'UPDATEDIA',  dialogText:dialogText})
//chiziqli funksiyaning qisqartirilgan tuzilishi
export const addPostActionCreator = () => ({ type: 'ADD-POST' })
export const updateNewPostTextActionCreator = (newText) => ({ type: 'UPDATE-NEW-POST-TEXT', newText: newText })

export default store


