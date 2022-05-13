import axios from "axios";
import React, { useState } from "react";



const CreateComment = (props) => {
  
  const [commentText, setCommentText] = useState("");
  
  async function handleSubmit(event) {
    
    event.preventDefault();

    let newComment = {
      text: commentText,
      videoID: "M7lc1UVf-VE",
    };

    await axios
      .post("http://localhost:3000/api/comments", newComment)
      .then((res) => props.AddNewComment(res.data));
  }

  return (
    
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a comment"
        value={commentText}
        onChange={(event) => setCommentText(event.target.value)}
      ></input>
      <span>
        <button type="submit">SEND</button>
      </span>
    </form>
  );
};

export default CreateComment;