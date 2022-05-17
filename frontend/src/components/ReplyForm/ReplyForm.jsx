import React, { useState } from 'react';
import useCustomForm from '../../hooks/useCustomForm';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';



const ReplyForm = (props) => {
 

    let initialValues = {
        text:" "
    }
    const [user, token] = useAuth()
   const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, postNewReply)
    const [replies, setReplies] = useState()
    if (!props.modal){
        return null
        }
       
    

    async function postNewReply() {
        try {
          let response = await axios.post(
            `http://127.0.0.1:8000/api/comments/${props.comment}/`,
            formData,
            {
              headers: {
                Authorization: "Bearer " + token,
              },
            }
          );
          setReplies(response.data);
    
        } catch (error) {
          console.log(error.message);
        }
      }
      console.log(props.modal);
      
  

    return ( 
        <div className='modal1'>
            <form className='modal-window1' onSubmit={handleSubmit}>
                <div className='input-button-box'>
                <input type='text' name='text' value={formData.text} onChange={handleInputChange}>
                   
               
                
                </input>

                
                <button className='reply-button' type="submit">Submit</button>
                <span onClick={props.onClose}>&times;</span>
                </div>
            </form>
        </div>
     );
}
 
export default ReplyForm;