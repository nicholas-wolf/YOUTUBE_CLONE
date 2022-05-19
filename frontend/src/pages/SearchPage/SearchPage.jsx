import React from 'react';
import VideoCard from '../../components/VideoCard/VideoCard';


const SearchPage = (props) => {
    
    return(
        <div style={{display: 'grid',margin:'2rem', gridTemplateColumns: 'repeat(3, 1fr)'}}>
                {props.videos.map((video) => {
                    return(
                        <VideoCard 
                        video={video}
                        key={video.id.videoId}
                        setSelectedVideo={props.setSelectedVideo}
                        ></VideoCard>
                    )
                })}

        </div>
    )
}
export default SearchPage
