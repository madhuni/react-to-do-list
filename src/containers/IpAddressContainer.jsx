import React, { Component } from 'react';

import IpAddress from '../components/IpAddress/IpAddress';

class IpAddressContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      ipAddress: ''
    };
  }

  componentDidMount() {
    /* Here we are going to do all the AJAX calls */
    const url = "https://ipinfo.io/json";

    this.fetchIpAddress(url);
  }

  fetchIpAddress = (url) => {
    /* Setting a timeout for retrying fetching data from server */
    var requestTimeout = setTimeout(() => {
      this.fetchIpAddress(url);
    }, 4000);

    fetch(url)
      .then(res => res.json())
      .then(json => {
        // console.log(json);
        const newIpAddress = json.ip;
        this.setState({
          ipAddress: newIpAddress
        });
        
        // If the request was a success then clearing the timeout created
        clearTimeout(requestTimeout);
      })
      .catch(err => {
        console.log(err);
        requestTimeout; // retrying to access the server again
      });
  }

  render() {
    return (
      <IpAddress ipAddress={this.state.ipAddress}/>
    );
  }
}

export default IpAddressContainer;