import React from "react";
//default export 
import { Grid } from "@mui/material";
// not a default export hence curly braces required
import youtube from "./api/youtube";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
    }


    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 50,
                key: 'AIzaSyCKN1xJqOAamqQjo4WKrav0M2f4vy_8dHw',
                q : searchTerm
            }
        }
        )
        

        console.log(response.data.items[0].id.videoId);
        this.setState = ({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };
    render()
    {
        return (<Grid container justifyContent="center" spacing={16} style={{ background: 'blue' }}>
            <Grid item xs={12}>
                <Grid container spacing={16}>
                    <Grid item xs={12}>
                        <SearchBar onFormSubmit={this.handleSubmit} />
                    </Grid>
                    <Grid item xs={8}>
                        {console.log(this.state.selectedVideo)}
                        <VideoDetail video={this.state.selectedVideo} />
                    </Grid>
                    <Grid item xs={4}>
                        <VideoList />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>)
    }
}

//const App = () => {
//    return <div>Hi there!</div>;
//};
export default App