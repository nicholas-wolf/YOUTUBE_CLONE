
import { useParams } from 'react-router-dom';

  const VideoPlayer = (props) => {
    const {videoId} = useParams()
    
    return (
      <div >
        <iframe title="myFrame"
            src={`https://www.youtube.com/embed/${videoId}`}>
        </iframe>
      </div>
    );
  };
  
  export default VideoPlayer;