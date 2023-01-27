import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            term: "",
            location: "",
            sortBy: "best_match"
        };
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleKeypress = this.handleKeypress.bind(this);
        this.handleSortByChange = this.handleSortByChange.bind(this);
        this.sortByOptions = {
            "Best Match": "best_match",
            "Highest Rated": "rating",
            "Most Reviewed": "review_count"           
        };        
    }

    getSortByClass(sortByOption) {
        if (this.state.sortBy === sortByOption) {
            return "active";
        } else {
            return "";
        }
    }

    handleSortByChange(sortByOption) {
        this.setState({sortBy: sortByOption});
    }

    handleTermChange(event){
        this.setState({ term: event.target.value });
    }

    handleLocationChange(event){
        this.setState({ location: event.target.value});
    }

    
    // method to handle the search button click
    handleSearch(event) {
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        event.preventDefault();
        console.log("search button clicked")
    }
    
    // method to handle the enter key press
    handleKeypress(event) {
        if (event.keyCode === 13) { 
            this.handleSearch(event);
            console.log("enter pressed")
           } 
    };    
    
    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return <li 
            className={this.getSortByClass(sortByOptionValue)} 
            key={sortByOptionValue} 
            onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
                {sortByOption}
            </li>;
        });
    }
    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input onChange = {this.handleTermChange} placeholder="Search Businesses" />
                    <input onChange = {this.handleLocationChange}  placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                     {/* the button can be clicked or enter can be pressed to search thanks to the two event handlers */}
                    <button className="Search-button" onClick = {this.handleSearch} onKeyDown={this.handleKeypress} >Let's Go</button>
                </div>
            </div>
        );
    }
}
export default SearchBar;

