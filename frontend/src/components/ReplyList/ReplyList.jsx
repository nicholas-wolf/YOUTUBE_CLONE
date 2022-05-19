import React from "react"

const ReplyList = (props) => {
    let num = 0
    return(
        <div className="reply-class-container">
            <div className="individual-replies">
                {props.replies.map((reply)=>{
                    num++
                    return(
                        <div key={num}>
                            <h2>{reply.user}</h2>
                            <p>{reply.text}</p>
                        </div>
                    )
                })}
            </div>     
        </div>
    )
}
export default ReplyList