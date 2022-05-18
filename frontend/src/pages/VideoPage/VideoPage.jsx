import React from "react";
import CommentForm from "../../components/CommentForm/CommentForm";
import CommentList from "../../components/CommentList/CommentList";
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';




const VideoPage = (props) => {
    
    return ( 
        <div>
            <h1>{props.selectedVideo.snippet.title}</h1>
            <div>{props.selectedVideo.snippet.description}</div>
            <VideoPlayer videoId={props.selectedVideo} />
            <CommentForm videoId={props.selectedVideo.id.videoId}></CommentForm>
            <CommentList style={{margin:'2rem'}} comments={props.comments} getVideoComments={props.getVideoComments} videoId={props.selectedVideo.id.videoId}></CommentList>
            {/* <RelatedVideos videos={props.videos}></RelatedVideos> */}

        </div>
     );
}
 
export default VideoPage;