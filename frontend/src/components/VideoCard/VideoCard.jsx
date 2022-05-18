import React from "react";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const VideoCard = (props) => {
  const reduceText = (text) => {
    if (text.length > 50) {
        let tempText = text.substr(0,49)
        tempText = tempText + ' ...'
        return tempText 
    } else {
        return text
    }
}
const onClick = () => {
  props.setSelectedVideo(props.video) 
  
}

  return (
          <Card sx={{display:'flex',justifyContent:'center' }}>
            <Link to={"/video/" + props.video.id.videoId} onClick={onClick}>
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