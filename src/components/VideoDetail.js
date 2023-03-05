import React from "react";
import { Paper, TextField, Typography } from "@mui/material";

//class VideoDetail extends React.Component {
//    render() {
//        return <div>Video Detail</div>;
//    }
//}


const VideoDetail = ({ video }) => {
    console.log(video);
    if (!video) return (<div>Oh Snap Loading ...</div>);
    else {
        //video id only fetched 
        console.log(video);
        const videoSource = 'https://www.youtube.com/embed/' + video.id.videoId;
        console.log(videoSource);
        return (
            <React.Fragment>
                <Paper elevation={0} style={{ height: '100%' }}> {/*style={{ height: '100%' }}*/}
                    <iframe height="50%" width="100%" title="Video Player" src={videoSource} />
                </Paper>
                <Paper elevation={2} style={{ padding: '15px' }}>
                    <Typography variant="sh4">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
                    <Typography variant="subtitle2">{video.snippet.channelTitle}</Typography>
                    <Typography variant="subtitle2">{video.snippet.description}</Typography>
                </Paper>
            </React.Fragment>
        )
    }
};

export default VideoDetail;