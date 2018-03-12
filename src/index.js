import React from 'react';
import ReactDOM from 'react-dom';

import App from "./App.jsx";
import './index.css';

const destination = document.querySelector('#root');

/* Attaching the 'APP' component to the root of the Application */
ReactDOM.render(
  <App />,
  destination
);