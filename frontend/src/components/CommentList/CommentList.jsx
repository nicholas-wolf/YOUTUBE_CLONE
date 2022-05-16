import React, { useState, useEffect } from 'react';

import Comment from "../Comment/Comment"

const CommentList = (props) =>{

    useEffect(() => {
        props.getVideoComments(props.videoId);
      }, [])

    return(
        <div className="container">
      <h1>Comment List</h1>
      {props.comments.map((el) => {              
                return(
                <div key={el.id}>
                    <Comment user={el.user.first_name} videoId={el.video_id} comment={el.text} likes={el.likes} dislikes={el.dislikes} />
                </div>
                )
              })}
    </div>
    )
}
export default CommentList