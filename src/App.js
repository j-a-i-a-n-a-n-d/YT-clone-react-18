import React from "react";
import { Grid } from "@mui/material";
import youtube from "./api/youtube";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
    }

    onVideoSelect = video => {this.setState({ selectedVideo: video }, () =>{});}
    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 6,
                key: 'AIzaSyCKN1xJqOAamqQjo4WKrav0M2f4vy_8dHw',
                q : searchTerm
            }
        })
        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] }, () => {}); 
    };
    componentDidMount()
    {
        this.handleSubmit('top hits');
    }
    render()
    {
        const { videos,selectedVideo } = this.state;
        return (<Grid container justifyContent="center" spacing={3} marginTop='-10px'>
            <Grid item xs={11} >
                <Grid container spacing={16} paddingLeft='-10px'>
                    <Grid item xs={12}>
                        <SearchBar onFormSubmit={this.handleSubmit} />
                    </Grid>
                    <Grid item xs={8}>
                        <VideoDetail video={selectedVideo} />
                    </Grid>
                    <Grid item xs={4}>
                        <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>)
    }
}
export default App