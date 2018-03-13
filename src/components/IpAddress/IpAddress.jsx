import React from 'react';

import './IpAddress.css';

const ipAddress = (props) => {
  let msg;
  let subMsg;

  if (props.ipAddress === '') {
    msg = <i className="fa fa-spinner fa-spin"></i>;
    subMsg = 'Your IP address will show above.';
  } else {
    msg = props.ipAddress;
    subMsg = '(This is your IP address...probably:P)';
  }
  return (
    <div className="ip-address-container">
      <p className="ip-address">{msg}</p>
      <p className="msg">{subMsg}</p>
    </div>
  );
};

export default ipAddress;