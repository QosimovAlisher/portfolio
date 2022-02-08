import React from "react";
import Posts from "./Posts/Posts";


const Myposts = (props) => {
    let newPostElement = React.createRef();

    let addPost = () => {
      props.addPost();
    }

    let onPostchange = () => {
        let newText = newPostElement.current.value;
        props.onPostchange(newText)
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