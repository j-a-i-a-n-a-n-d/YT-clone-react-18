import React from "react";
import { Grid } from "@mui/material";
import VideoItem from "./VideoItem";

const VideoList = ({videos,onVideoSelect}) => {
    const list_of_videos = videos.map((video, id)  => <VideoItem onVideoSelect={onVideoSelect} key = {id} video={video} />) 
    return (
        <Grid container spacing={4}>{list_of_videos}</Grid>);
}

export default VideoList;