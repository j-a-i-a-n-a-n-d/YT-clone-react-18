import react from "react";
import { Grid } from "@mui/material";
import VideoItem from "./VideoItem";

const VideoList = () => {
    // destructuring the prop by curly braces 
    const Bideos = ({ videos }) => {
        console.log(videos);
        const listofvid = videos.map((video) => <VideoItem />)
        return listofvid
    }

}

export default VideoList;