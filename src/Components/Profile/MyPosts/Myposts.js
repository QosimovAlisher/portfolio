import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../Redux/profilereducer";


import Posts from "./Posts/Posts";


const Myposts = (props) => {
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostchange = () => {
        let newText = newPostElement.current.value;
       let action  = (updateNewPostTextActionCreator(newText))
       props.dispatch(action)
    }
    let newpost = props.posts.map(post => <Posts posts={post.massage} likes={post.likes} />)

    return (
        <>
            <h1>My posts</h1>
            <textarea onChange={onPostchange} ref={newPostElement} value={props.newPostText} />
            <button onClick={addPost}>add commit</button>
            <h1> {newpost}</h1>

        </>
    )
}

export default Myposts;