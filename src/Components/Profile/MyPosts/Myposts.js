import React from "react";
import Posts from "./Posts/Posts";





 
const Myposts = (props) => {
    debugger
    let newpost = props.posts.map(post => <Posts posts={post.massage} likes = {post.likes} />  )
    return (
        <div>
            <h1>My posts</h1>
          <textarea /> 
                <button>add commit</button>
          <h1> {newpost}</h1>
        
           
        </div>
    )
}

export default Myposts;