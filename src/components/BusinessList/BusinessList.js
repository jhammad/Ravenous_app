import React from "react";
import "./BusinessList.css";
import Business from "../Business/Business";

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">{
        // with curly brackets because we are injecting js this will
        // map the businesses const we will pass this object to App.js
        this.props.businesses.map( 
          // Callback function with Arrow function syntax
          business => {
            // return the business object with the key of business.id and the value of business
            return <Business
             business={business} key={business.id} />
          }
        )
      }     
      </div>
    );
  }
}

export default BusinessList;


