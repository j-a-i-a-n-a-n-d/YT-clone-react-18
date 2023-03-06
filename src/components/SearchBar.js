import React from "react";
import { Paper,TextField } from "@mui/material";

class SearchBar extends React.Component {

    state = {
        searchTerm: '',
    }
    handleChange = (event) => {this.setState({ searchTerm: event.target.value });}
    handleSubmit = (event) => {
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;
        onFormSubmit(searchTerm);
        event.preventDefault();
    }

    render() {
        return (
            <Paper  elevation={6} style={{ padding: '10px' }}>
                <form onSubmit={this.handleSubmit}> 
                    <TextField sx={{ width: '75%' }} label="Search..." id="standard-basic" variant="standard" onChange={this.handleChange}/>
                </form>
            </Paper>
        )
    }
}
export default SearchBar;