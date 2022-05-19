import React from 'react';
import LikeandDislike from '../LikeAndDislike/LikeandDislike';
import Replies from '../Replies/Replies';

const CommentList = (props) =>{
  
    return(
        <div className="container">
      <h1>Comments</h1>
      {props.comments.map((comment) => {           
                return(
                <div key={comment.id}>
                  <h2>{comment.user.first_name}</h2>
                  <h3>{comment.text}</h3>
                  <h4>likes:{comment.likes}</h4>
                  <h4>dislikes:{comment.dislikes}</h4>
                  <LikeandDislike getVideoComments={props.getVideoComments} comment={comment}/>
                  <Replies comment={comment}/>
                </div>
                )
              })}
    </div>
    )
}
export default CommentList 