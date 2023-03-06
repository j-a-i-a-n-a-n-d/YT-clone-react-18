import { Grid, Paper} from "@mui/material";
import React from "react";

const VideoItem = ({ video, onVideoSelect }) =>
{
    const v_thumbnail = video.snippet.thumbnails.medium.url;
    const v_title = video.snippet.title;
    return (
    <Grid item xs = {7}>
        <Grid style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => onVideoSelect(video)} >
            <Grid>
            <img style={{marginRight:'20px'}} src = {v_thumbnail}></img>
                <div><center>{v_title}</center></div>
            </Grid>
        </Grid>
    </Grid>);
}
export default VideoItem;