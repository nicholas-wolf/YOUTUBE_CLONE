import React from 'react';
import VideoCard from '../../components/VideoCard/VideoCard';


const SearchPage = (props) => {
    // const [videoId, setVideoId] = useState('')

    function handleSubmit(videoId){
        // event.preventDefault();
        let newVideoId = videoId
        props.submitVideoInfo(newVideoId)
    }

    console.log('search page vids', props.videos)
    return(
        <div style={{display: 'grid',margin:'2rem', gridTemplateColumns: 'repeat(3, 1fr)'}}>
                {props.videos.map((video) => {
                    return(
                        <VideoCard 
                        video={video}
                        key={video.id.videoId}
                        onClick={()=>{handleSubmit(props.video.id.videoId)}}
                        ></VideoCard>
                    )
                })}

        </div>
    )
}
export default SearchPage