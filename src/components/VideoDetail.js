import React from "react";
import { Paper, TextField } from "@mui/material";

//class VideoDetail extends React.Component {
//    render() {
//        return <div>Video Detail</div>;
//    }
//}


const VideoDetail = ({ video }) => {
    console.log(video);
    if (!video) return (<div>Oh Snap Loading ...</div>);
    else {
        console.log(video);
        const src = video.id.videoId;
        const videoSource = 'https://www.youtube.com/embed/' + src;
        console.log(videoSource);


        return (
            <React.Fragment>
                <Paper elevation={6} style={{ height: '70%' }}>
                    <iframe height="100%" width="100%" title="Video Player" src={videoSource} />
                </Paper>
                <Paper elevation={6} style={{ padding: '10px' }}>

                </Paper>
            </React.Fragment>
        )
    }
};

export default VideoDetail;