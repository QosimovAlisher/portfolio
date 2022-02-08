import React from "react"
// import Myposts from "./MyPosts/Myposts"
import MypostsContainer from "./MyPosts/MypostsContainer"
import s from './Profile.module.css'

const Profile = (props) => {

    return (
        <>
            <h1 className={s.profile}>Profile</h1>
            <div>

            </div>
            <div>
                <MypostsContainer store={props.store} />
            </div>
        </>
    )
}

export default Profile