import React from "react";
import { Paper, Typography } from "@mui/material";

const VideoDetail = ({ video }) => {
    console.log(video);
    if (!video) return (<div>Oh Snap Loading ...</div>);
    else {
        console.log(video);
        const videoSource = 'https://www.youtube.com/embed/' + video.id.videoId;
        console.log(videoSource);
        return (
            <>
                <Paper elevation={0} style={{ height: '60%' }}>
                    <iframe height="50%" width="100%" title="Video_Player" src={videoSource} />
                </Paper>
                <Paper elevation={2} style={{ padding: '5px' }}>
                    <Typography variant="h4">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
                    <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
                    <Typography variant="subtitle2">{video.snippet.description}</Typography>
                </Paper>
            </>
        )
    }
};
export default VideoDetail;