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
            return <Business business = {business} />
          }
        )
      }     
      </div>
    );
  }
}

export default BusinessList;


