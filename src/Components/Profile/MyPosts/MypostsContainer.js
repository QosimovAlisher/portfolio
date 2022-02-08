import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../Redux/profilereducer";
import Myposts from "./Myposts";

const MypostsContainer = (props) => {
    let state = props.store.getState();
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostchange = (newText) => {
        let action = (updateNewPostTextActionCreator(newText))
        props.store.dispatch(action)
    }

    return (
        <>
            <Myposts addPost={addPost} onPostchange={onPostchange} posts={state.profilePage.posts}
                newPostText={state.profilePage.newPostText} />
        </>
    )
}

export default MypostsContainer;