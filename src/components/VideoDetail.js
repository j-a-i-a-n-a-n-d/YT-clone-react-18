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
                <Paper elevation={0} style={{ height: '65%' }}>
                    <iframe height="50%" width="100%" title="Video_Player" src={videoSource} />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div>
                    <Typography variant="h4" style={{paddingLeft:'6px'}}>{video.snippet.title} - {video.snippet.channelTitle}</Typography>
                    <Typography variant="subtitle1" style={{paddingLeft:'20px'}}><b>{video.snippet.channelTitle}</b></Typography>
                    <Typography variant="subtitle2" style={{paddingLeft:'6px'}}><div>{video.snippet.description}</div></Typography>
                    </div>
                </Paper>
            </>
        )
    }
};
export default VideoDetail;