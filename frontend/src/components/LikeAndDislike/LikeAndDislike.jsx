import axios from 'axios';
import React, { useState, useEffect } from 'react';

const LikeandDislike = (props) => {
    const [like, setLike] = useState(false)
    const [dislike, setDislike] = useState(false)

    async function likeOrDislike(){
        let body={}
        let response=''
        if (like === true){
            body = {
                user: props.comment.user,
                video_id: props.comment.video_id,
                text: props.comment.text,
                likes: props.comment.likes +1,
                dislikes: props.comment.dislikes,
            }
            response = await axios.put(`http://127.0.0.1:8000/api/comments/edit/${props.comment.id}/`, body)
        }
            else if (dislike === true){
                body = {
                    user: props.comment.user,
                    video_id: props.comment.video_id,
                    text: props.comment.text,
                    likes: props.comment.likes,
                    dislikes: props.comment.dislikes +1
                }
                response = await axios.put(`http://127.0.0.1:8000/api/comments/edit/${props.comment.id}/`, body)
            }
            if (response.status === 201){
                await props.getVideoComments(props.videoId)
            }
            }
        useEffect(() => {
            likeOrDislike()
        }, [like, dislike])

    return(<div>
        <button onClick={() => setLike(true)}>Like</button>
        <button onClick={() => setDislike(true)}>Dislike</button>
    </div>)
}

export default LikeandDislike