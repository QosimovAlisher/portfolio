
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';


 const profilereducer = (state, action) => {

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

export default profilereducer