
import axios from "axios"
import React, { useEffect, useState } from 'react';

const Reply = (props) => {

        useEffect(() => {
            props.getCommentReplies(props.commentId)
        },[])

    return(
        <div className="reply-container">
            <h2>replies</h2>
            {props.replies.map((element)=>{
                return(
                    <div key={props.commentId}>
                        <h2>{element.user.username}</h2>
                        <p>{element.text}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default Reply