import React, { useState, useEffect } from "react"
import useAuth from "../../hooks/useAuth"
import useCustomForm from "../../hooks/useCustomForm"
import axios from 'axios'


let initialValues = {
    user_id: '2',
    text: '',
    comment_id: '2'
}

const ReplyForm = (props) => {
    const [user, token] = useAuth();
    const [commentId, setCommentId] = useState(props.comment.id);
    const [formData, handleInputChange, handleSubmit] = useCustomForm(
        initialValues,
        postNewReply
    );
   
    useEffect(() => {
        setCommentId(props.comment.id)
    },[props.comment.id])
    
    async function postNewReply(){
        try {
            formData.comment = commentId
            formData.user = user.id
            let response = await axios.post(`http://127.0.0.1:8000/api/replies/post/${commentId}/`, formData, {
                headers: {
                    Authorization: 'Bearer '+ token
                }
            })
            if (response.status === 201){
                await props.getCommentReplies(commentId)
            }
        } catch (error){
            console.log(error.message);
        }
    }
    return(
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <label>Reply:{""}
                <input type="text" name="text" value={formData.text} onChange={handleInputChange} />
                </label>
                <button type="submit">Reply</button>
            </form>
        </div>
    )
}

export default ReplyForm