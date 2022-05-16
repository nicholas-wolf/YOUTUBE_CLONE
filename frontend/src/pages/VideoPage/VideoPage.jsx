import React, { useEffect } from "react";
import { useState } from 'react';

import CommentForm from "../../components/CommentForm/CommentForm";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import CommentList from "../../components/CommentList/CommentList";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos"
import axios from "axios";
import { useParams } from "react-router-dom";

const VideoPage = (props) => {
    const [videoInfo, setVideoInfo] = useState({})
    const {videoId} = useParams()
    
    useEffect (() => {
        getVideoInfo(videoId)
    }, [])

    async function getVideoInfo(videoId){
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=AIzaSyCVVxJokbV2pHocNye7rQ3l1tV_FNbCPVU&part=snippet&fields=items(id,snippet)`)
        console.log(response.data)
        setVideoInfo(response.data)
    }
    
    return ( 
        <div>
            <h1>{videoInfo.id}</h1>
            <div>{videoInfo.snippet.description}</div>
            <VideoPlayer />
            <CommentForm></CommentForm>
            <CommentList comments={props.comments} getVideoComments={props.getVideoComments} videoId={videoId} ></CommentList>
            <RelatedVideos videos={props.videos}></RelatedVideos>

        </div>
     );
}
 
export default VideoPage;