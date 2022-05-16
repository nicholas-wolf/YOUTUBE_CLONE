import React, { useContext, useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import CommentForm from "../../components/CommentForm/CommentForm";
import Comment from "../../components/Comment/Comment";
import "./VideoPage.css";
import DisplayThumbnails from "../../components/DisplayThumbnails/DisplayThumbnails";
import VideoCard from "../../components/VideoCard/VideoCard";


const VideoPage = (props) => {
  const [user, token] = useAuth();
 

  const { video } = useParams();

  useEffect(()=> {
    props.fetchComments(video)
  },[video]
  )
  useEffect(()=> {
    props.fetchSim(video)
  },[video]
  )
  

  
  return (
    <div className="video-comment-container">
      <div>
        <iframe
          width="525"
          height="450"
          src={`https://www.youtube.com/embed/${video}`}
        ></iframe>

        <Comment
          video={video}
          comments={props.comments}
          setComments={props.setComments}
        />

    
      </div>
      <div>
        <VideoCard fetchsim={props.fetchSim} videoData={props.sim} />
      </div>
    </div>
  );
};

export default VideoPage;