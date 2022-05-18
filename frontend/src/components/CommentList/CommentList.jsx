import React, { useState, useEffect } from 'react';
import LikeDislike from '../LikeDislike/LikeDislike';
import Reply from '../Reply/Reply';
import ReplyForm from '../ReplyForm/ReplyForm'
import axios from 'axios';

const CommentList = (props) =>{
  const [replies, setReplies] = useState([])
  async function getCommentReplies(commentId){
    let response = await axios.get(`http://127.0.0.1:8000/api/replies/${commentId}/view`);
    setReplies(response.data)
  }

    useEffect(() => {
        props.getVideoComments(props.videoId);
      }, [])

    return(
        <div className="container">
      <h1>Comments</h1>
      {props.comments.map((el) => {              
                return(
                <div key={el.id}>
                  <h2>{el.user.first_name}</h2>
                  <h3>{el.text}</h3>
                  <h4>likes:{el.likes}</h4>
                  <h4>dislikes:{el.dislikes}</h4>
                    <LikeDislike getVideoComments={props.getVideoComments} comment={el} videoId={el.video_id}/>
                    <Reply replies={replies} getCommentReplies={getCommentReplies} commentId={el.id} />
                    <ReplyForm replies={replies} getCommentReplies={getCommentReplies} comment={el} /> 
                </div>
                )
              })}
    </div>
    )
}
export default CommentList 