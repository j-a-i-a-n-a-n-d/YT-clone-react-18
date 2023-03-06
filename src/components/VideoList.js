import React from "react";
import { Grid } from "@mui/material";
import VideoItem from "./VideoItem";

const VideoList = ({videos,onVideoSelect}) => {
    // destructuring the prop by curly braces
    const list_of_videos = videos.map((video, id)  => <VideoItem onVideoSelect={onVideoSelect} key = {id} video={video} />) 
    return (
        <Grid container spacing={10}>{list_of_videos}</Grid>);
}

export default VideoList;