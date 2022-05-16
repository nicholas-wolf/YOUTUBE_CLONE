import React, { useState, useEffect } from 'react';

const Comment = (props) => {

    const [like, setLike] = useState('Like')
    const [dislike, setDislike] = useState('Dislike')
    const [likeTrue, setLikeTrue] = useState(false);
    const [dislikeTrue, setDislikeTrue] = useState(false);
    const [timeCreated, setTimeCreated] = useState();

    useEffect(() => {
        let timeStamp = (new Date())
        setTimeCreated(`Posted ${timeStamp.getMonth()}/${timeStamp.getDate()}/${timeStamp.getFullYear()}`);
    }, []);

    useEffect(() => {
        if(likeTrue){
            setLike('Liked')
            setDislikeTrue(false)
        }
        else{
            setLike('Like')
        }
    }, [likeTrue]);

    useEffect(() => {
        if(dislikeTrue){
            setDislike('Disliked')
            setLikeTrue(false)
        }
        else{
            setDislike('Dislike')
        }
    }, [dislikeTrue]);
    
    function likePost(){
       setLikeTrue(!likeTrue)
    }

    function dislikePost(){
        setDislikeTrue(!dislikeTrue)
    }

    return(<div className='containter'>
        <h5>{props.user}</h5>
        <div>{props.comment}</div>
        <button 
            className={likeTrue ? 'btn btn-primary': 'btn btn-outline-primary'} 
            onClick={() => {likePost()}}>
                {props.likes}
        </button>
        <button
            className={dislikeTrue ? 'btn btn-danger': 'btn btn-outline-danger'}
            onClick={() => {dislikePost()}}>
                {props.dislikes}
        </button>
        
    </div>)
}

export default Comment