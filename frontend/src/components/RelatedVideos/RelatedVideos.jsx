import { VIDEODATA } from "../../VideoData"
import React, { useState } from 'react';


const RelatedVideos = (props) =>{

    //https://www.googleapis.com/youtube/v3/search?relatedToVideoId={VIDEO ID HERE}&type=video&key={API KEY HERE}

    return(
        <div className="container">
      <h1>Related Videos</h1>
      {props.videos &&
        props.videos.items.map((video) => (
          <p key={video.id.videoId}>
            {video.id.videoId}
          </p>
        ))}
    </div>
        )
}
export default RelatedVideos