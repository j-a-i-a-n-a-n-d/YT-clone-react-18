import { Grid, Paper, Typography } from "@mui/material";
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
    const v_thumbnail = video.snippet.thumbnails.medium.url;
    const v_title = video.snippet.title;
    return (
    <Grid item xs = {12}>
        <Paper style = {{display:'flex', alignItems:'center', cursor:'pointer'}} onClick = {()=>onVideoSelect(video)} >
            <img style={{marginRight:'20px'}} src = {v_thumbnail}></img>
            <Typography variant="subtitle2">
                <b>{v_title}</b>
            </Typography>
        </Paper>
    </Grid>);
}

export default VideoItem;