import React from "react";
import userImage from "./foto/img4.jpg"
import s from  "./DialogItem.module.css"


const DialogItem = (props) => {
    return (
        <div className={s.item}>
               <img className={s.userImage} src={userImage} alt="rasmlar" /> 
            <p>   {props.name}</p>
          <div>  </div>
        </div>
    )
}
export default DialogItem;

