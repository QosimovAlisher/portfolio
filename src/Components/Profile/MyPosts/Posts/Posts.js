import React from "react";

const Posts = (props) => {
    
    return(
       <>
       <h4>{props.posts}</h4>
       <p>{props.likes}</p>
       </>
    )
}

export default Posts;