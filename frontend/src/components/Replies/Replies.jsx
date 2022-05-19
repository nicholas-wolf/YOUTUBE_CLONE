import React, { useState, useEffect } from 'react';
// import LikeandDislike from '../LikeAndDislike/LikeandDislike';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import ReplyList from '../ReplyList/ReplyList';
import ReplyForm from '../ReplyForm/ReplyForm'


const Replies = (props) => {
    const [user, token] = useAuth();
    const [replies, setReplies] = useState([])
  async function getCommentReplies(commentId){
    let response = await axios.get(`http://127.0.0.1:8000/api/replies/${commentId}/view/`,{
      headers: {
      Authorization: 'Bearer ' + token
  }})
    setReplies(response.data)
  }
    useEffect(() => {
    getCommentReplies(props.comment.id);
    }, [])  
    return(
        <div >
            <ReplyForm replies={replies} getCommentReplies={getCommentReplies} comment={props.comment} /> 
            <ReplyList replies={replies}/>
        </div>
        )
      }
export default Replies;