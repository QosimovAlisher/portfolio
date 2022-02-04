
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

export const profilereducer = (state, action) => {
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