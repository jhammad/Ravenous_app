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
            // we will return the Business component and pass the business object
            // the Business component is imported from Business.js
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


