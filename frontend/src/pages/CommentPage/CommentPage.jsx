import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DisplayReplies from '../../components/Reply/Reply';
import useAuth from '../../hooks/useAuth';


const CommentPage = (props) => {

    const [comment, setComment] = useState()
    const { commentId} = useParams();
    const [user, token] = useAuth()
    console.log(props.comments)
    console.log(commentId)

useEffect(()=>{
   let commentPage= props.comments.filter((comment)=>{
        if (comment.id===commentId)
        return true

    }
 
    )
    setComment(commentPage)
    console.log(commentPage)
},[token]
)
    return ( 
<div>
        <div className='comment-box'>
            <div className='comment-title'>
            <h3 >COMMENT:</h3>
            {props.user.comments[0].text}
            </div>
   



      <DisplayReplies className='display-replies'commentId={commentId}/>  
        </div >
     
        </div>
     );
}
 
export default CommentPage;