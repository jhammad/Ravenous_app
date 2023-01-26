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
      // the empty array will be filled with objects from the Yelp API
      businesses: []
    };
    // We need  to bind the searchYelp method to the App component's this value
    this.searchYelp = this.searchYelp.bind(this);
  }
    searchYelp(term, location, sortBy) {
      Yelp.search(term, location, sortBy).then(businesses => {
        this.setState({businesses: businesses});
      });
    }

    render(){
    return (
      <div className="App">
    <h1>ravenous</h1>
      <SearchBar searchYelp = {this.searchYelp}/>
      {/* this state businesses is an array of objects that we will pass to the
      BusinessList component we used this.state because we are in the App component */}
      <BusinessList businesses = {this.state.businesses} />
    </div>    
    );
    }
}

export default App;

