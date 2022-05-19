import React, { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import useCustomForm from "../../hooks/useCustomForm"
import axios from 'axios'
import { useParams } from "react-router-dom";

let initialValues = {
        user: "2",
        video_id:'',
        text: "",
        likes: "0",
        dislikes: "0"
};

const CommentForm = (props) =>{
    const [user, token] = useAuth();
    const [videoId, setvideoId] = useState(props.videoId)
    const [formData, handleInputChange, handleSubmit] = useCustomForm(
        initialValues,
        postNewComment
        );
    
       
        useEffect(() => {
            props.getVideoComments(props.videoId);
        }, [props.comments])   
        
    async function postNewComment(){
        try {
            formData.video_id=videoId
            let response = await axios.post('http://127.0.0.1:8000/api/comments/post/', formData,  {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            if (response.status === 201){ 
                console.log('did I get here')
                props.getVideoComments(videoId)
            }
        } catch (error) {
            console.log(error.message);
        }
    }


    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <label>
                    Comment:{" "}
                    <input 
                        type="text"
                        name="text"
                        value={formData.text}
                        onChange={handleInputChange}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default CommentForm