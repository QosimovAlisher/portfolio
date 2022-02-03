



let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, massage: 'new masseges here ', likes: '123' },
                { id: 2, massage: 'new masseges here ', likes: '123' },
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
                { id: 2, name: 'Alisher' },
                { id: 3, name: 'Alisher' },
                { id: 4, name: 'Alisher' }

            ],
            dialogs: [
                { id: 1, name: 'Alisher' },
                { id: 2, name: 'Alisher' },
                { id: 3, name: 'Alisher' },
                { id: 4, name: 'Alisher' }

            ]
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
        if (action.type === 'ADD-POST'){
            let newPost = {
                id: 5,
                massage: this._state.profilePage.newPostText,
                likes: 21
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._colSubscriber(this._state)
           
        }   else if(action.type ==='UPDATE-NEW-POST-TEXT' ){
            this._state.profilePage.newPostText = action.newText;
        this._colSubscriber(this._state)
        }
    }


}


export default store


