import React from "react";
import StoreContext from "../../../storeContext";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../Redux/profilereducer";
import Myposts from "./Myposts";

const MypostsContainer = () => {
    return <StoreContext.Consumer>
        {store => {

            let addPost = () => {
                store.dispatch(addPostActionCreator());
            }

            let onPostchange = (newText) => {
                let action = (updateNewPostTextActionCreator(newText))
                store.dispatch(action)
            }

            return <Myposts addPost={addPost} onPostchange={onPostchange} posts={store.getState().profilePage.posts}
                newPostText={store.getState().profilePage.newPostText} />
        }
        }

    </StoreContext.Consumer>

}

export default MypostsContainer;