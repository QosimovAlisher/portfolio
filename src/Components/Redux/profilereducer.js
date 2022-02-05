
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
    posts: [
        { id: 1, massage: 'new masseges here ', likes: '123' },
        { id: 3, massage: 'new masseges here ', likes: '123' },
    ],
    newPostText: 'it inkubatior'
}
 const profilereducer = (state = initialState, action) => {

    // if (action.type === ADD_POST) { 
    //     let newPost = {
    //         id: 5,
    //         massage: state.newPostText,
    //         likes: 21
    //     };
    //     state.posts.push(newPost);
    //     state.newPostText = '';
    // } else if (action.type === UPDATE_NEW_POST_TEXT) {
    //     state.newPostText = action.newText;
    // }





    switch (action.type) {
        case ADD_POST:
            let newPost = { id: 5, massage: state.newPostText, likes: 21 };
            state.posts.push(newPost);
            state.newPostText = '';
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state

        default:
    return state
    }
}
export const addPostActionCreator = () => ({ type: 'ADD-POST' })
export const updateNewPostTextActionCreator = (newText) => ({ type: 'UPDATE-NEW-POST-TEXT', newText: newText })


export default profilereducer