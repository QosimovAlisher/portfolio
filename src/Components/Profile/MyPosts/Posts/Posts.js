import React from "react";

const Posts = (props) => {
    
    return(
       <>
       <p>{props.posts}</p>
       <p>{props.likes}</p>
       </>
    )
}

export default Posts;