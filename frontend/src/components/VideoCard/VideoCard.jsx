import React from "react";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const VideoCard = (props) => {
  console.log(props.video);
  const reduceText = (text) => {
    if (text.length > 50) {
        let tempText = text.substr(0,49)
        tempText = tempText + ' ...'
        return tempText 
    } else {
        return text
    }
}

const handleOnClick = (video_id) => {
    props.parentCallback(video_id)
}

  return (
          <Card sx={{display:'flex',justifyContent:'center' }}>
            <Link to={"/video/:videoId" + props.video.id.videoId} >
            <CardActionArea sx={{minWidth:300}}>
              <CardMedia
                component="img"
                // height="140"
                image={props.video.snippet.thumbnails.default.url}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {props.video.snippet.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {reduceText(props.video.snippet.description)}
                </Typography>
            </CardContent>
          </CardActionArea>
          </Link>
        </Card>
  )
}
export default VideoCard;