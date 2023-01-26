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
      <BusinessList businesses = {this.state.businesses} />
    </div>    
    );
    }
}

export default App;

