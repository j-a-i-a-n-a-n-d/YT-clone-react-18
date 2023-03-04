import React from "react";

import { Paper,TextField } from "@mui/material";
import { padding } from "@mui/system";

class SearchBar extends React.Component {

    state = {
        searchTerm: '',
    }

    handleChange = (event) => {
        //console.log(event);
        //console.log(event.target.value);
        this.setState({ searchTerm: event.target.value });
    }

    handleSubmit = (event) => {
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;
        console.log("searchTerm", searchTerm)
        onFormSubmit(searchTerm);
        event.preventDefault();
    }
    render() {
        return (
            <Paper  elevation={4} style={{ padding: '10px' }}>
                <form onSubmit={this.handleSubmit}> 
                    <TextField sx={{ width: '65%' }} label="Search..." id="standard-basic" variant="standard" onChange={this.handleChange}/>
                </form>
            </Paper>
        )
    }
}

export default SearchBar;