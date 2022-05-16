import React, { useState, useEffect } from "react";
import useCustomForm from "../../hooks/useCustomForm";
import "./AddCommentModal.css";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

let initialValues = {
  video_id: "",
  text: "",
  likes: 0,
  dislikes: 0,
};

const CommentForm = (props) => {
  const [user, token] = useAuth();
  const [comments, setComments] = useState();

  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
    initialValues,
    postNewComment
  );

  formData.video_id = props.video;

  async function postNewComment() {
    try {
      let response = await axios.post(
        "http://127.0.0.1:8000/api/comments/",
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
          }
        }
      );
      setComments(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="modal">
      <div className="modal-window">
        <form className="form" onSubmit={handleSubmit}>
          <input
            placeholder="ADD COMMENT"
            type="text"
            name="text"
            value={formData.text}
            onChange={handleInputChange}
          ></input>
          <button type="submit">Submit</button>

          <span className="close">&times;</span>
        </form>
      </div>
    </div>
  );
};

export default CommentForm;