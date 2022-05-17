import React, { useEffect } from "react";
import CommentForm from "../../components/CommentForm/CommentForm";
import CommentList from "../../components/CommentList/CommentList";
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';

const VideoPage = (props) => {
    useEffect(()=>{
        console.log('whole object:',props.selectedVideo)
    },[])

    return ( 
        <div>
            <h1>{props.selectedVideo.snippet.title}</h1>
            <div>{props.selectedVideo.snippet.description}</div>
            <VideoPlayer videoId={props.selectedVideo.id.videoId} />
            <CommentForm videoId={props.selectedVideo.id.videoId}></CommentForm>
            <CommentList comments={props.comments} getVideoComments={props.getVideoComments} videoId={props.selectedVideo.id.videoId}></CommentList>
            {/* <RelatedVideos videos={props.videos}></RelatedVideos> */}

        </div>
     );
}
 
export default VideoPage;