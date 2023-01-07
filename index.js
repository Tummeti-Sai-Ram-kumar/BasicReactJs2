import React from 'react';
import ReactDOM from 'react-dom/client';
import FBC from './fbc.js'
import CBC from './cbc.js'
import USer from './states'
import User from './props'
import Event from './events'
import CR from './conditional-rendering'
import LK from './listandkeys'
import reportWebVitals from './reportWebVitals';


const details = [{name : "ram" , role : "front-end"},{name : "paras" , role : "back-end"},{name : "ritesh",role :"dev-ops"}]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LK details = {details}></LK>
  </React.StrictMode>
);

reportWebVitals();