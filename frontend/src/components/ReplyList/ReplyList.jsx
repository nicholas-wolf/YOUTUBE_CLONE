import axios from "axios"
import { useState } from "react"
import Reply from "../Reply/Reply"
import ReplyForm from "../ReplyForm/ReplyForm"

const ReplyList = (props) => {
    const [replies, setReplies]=useState([])

    async function getCommentReplies(commentId){
        let response = await axios.get(`http://127.0.0.1:8000/api/replies/${commentId}/view`);
        setReplies(response.data);}

    useState(()=>{
        getCommentReplies(props.commentId)
    },[])

    return(
        <div className="reply-class-container">
            <div className="individual-replies">
                {replies.map((element)=>{
                    return(
                        <Reply reply={element} />
                    )
                })}
            </div>
            <ReplyForm commentId={props.commentId} getCommentReplies={getCommentReplies}/>
        </div>
    )
}
export default ReplyList