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
                updateNewPostText = {props.updateNewPostText}
                addPost={props.addPost} posts={props.posts} dialogs= {props.dialogs}/>
            </div>
        </>
    )
}

export default Profile