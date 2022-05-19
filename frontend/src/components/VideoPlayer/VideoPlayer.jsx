
import { useParams } from 'react-router-dom';

  const VideoPlayer = () => {
    const {videoId} = useParams()
    
    return (
      <div >
        <iframe id="ytplayer" type="text/html" width="720" height="480"
            src={`https://www.youtube.com/embed/${videoId}`}frameBorder="0">
        </iframe>
      </div>
    );
  };
  
  export default VideoPlayer;