import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';

 

const DisplayReplies = (props) => {
    const [replies, setReplies] = useState()
    const [user, token] = useAuth()


    useEffect(()=>{
    const fetchReplies = async ()=>{
        try {
        let response = await axios.get(`http://127.0.0.1:8000/api/comments/${props.commentId}/`, {
            headers: {
                Authorization: "Bearer " + token
            }      
        }
        )
        setReplies(response.data)
        console.log(response.data)
    }
        catch (error) {
            console.log(error.message)
        }
    }
    fetchReplies()

},[token]
)

    return ( 
        <div>
          <div>
     
     {replies &&
       replies.map((reply) => (
         <p key={reply.id}>
              <h3 className='reply-heading'>REPLIES:</h3>
             <div className='reply-container'>
            
             <p className='reply-text'>
           {reply.text}
           </p>
           </div>
         </p>
       ))}
   </div>
        </div>
     );
}
 
export default DisplayReplies;