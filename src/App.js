import React from "react";
//default export 
import { Grid } from "@mui/material";
// not a default export hence curly braces required
import youtube from "./api/youtube";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";
import { blue } from "@mui/material/colors";

class App extends React.Component{
    render()
    {
        return (<Grid container justifyContent="center" spacing={16} style={{ background: 'blue' }}>
            <Grid item xs={12}>
                <Grid container spacing={16}>
                    <Grid item xs={12}>
                        <SearchBar onFormSubmit={this.handleSubmit} />
                    </Grid>
                    <Grid item xs={8}>
                        <VideoDetail />
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