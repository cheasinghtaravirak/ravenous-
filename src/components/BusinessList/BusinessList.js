import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business'; //is Business the same as Business.js?
//import <Business /> to BusinessList
//syntax for importing class: import className from 'itsLocation';

class BusinessList extends React.Component {
  render() {
    return (
      <div className ="BusinessList">
      {
        this.props.businesses.map(business => <Business business = {business}
          key = {business.id}/>)
      }
      </div>
    );
  }
}

export default BusinessList;
