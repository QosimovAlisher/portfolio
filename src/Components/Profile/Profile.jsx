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
                <Myposts  posts={props.posts}/>
            </div>
        </>
    )
}

export default Profile