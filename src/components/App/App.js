import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar'; 
import BusinessList from '../BusinessList/BusinessList';
// importing Yelp from Yelp.js
import  Yelp  from '../../util/Yelp';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);  
    this.state = {
      // businesses is an empty array of objects that will be populated by the Yelp API
      businesses: []
    };
    // We need  to bind the searchYelp method to the App component's this value
    this.searchYelp = this.searchYelp.bind(this);
  }
    // searchYelp will be passed to the SearchBar component as a prop
    searchYelp(term, location, sortBy) {
      // Yelp.search is a promise that will return a list of businesses
      Yelp.search(term, location, sortBy).then(businesses => {
        // we will set the state of the businesses property to the businesses array returned by the Yelp API
        this.setState({businesses: businesses});
      });
    }
    render(){
    return (
      <div className="App">
    <h1>ravenous</h1>
       {/* searchbar will be passed the searchYelp method as a prop */}
      <SearchBar searchYelp = {this.searchYelp}/>
       {/* busineeslist will be passed the businesses array as a prop */}
      <BusinessList businesses = {this.state.businesses} />
    </div>    
    );
    }
}

export default App;

