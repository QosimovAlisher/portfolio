import React from "react"
import Myposts from "./MyPosts/Myposts"
import s from  './Profile.module.css'




const Profile = (props) => {
   
    return (
        <>
            <h1 className={s.profile}>Profile</h1>
            <div>
               
            </div>
            <div>
                <Myposts newPostText={props.newPostText}
                        dispatch= {props.dispatch}
                 posts={props.posts} dialogs= {props.dialogs}/>
            </div>
        </>
    )
}

export default Profile