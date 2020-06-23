import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import "./primevideo-global.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "jquery/dist/jquery.js";
import "popper.js/dist/popper.js";


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById("root")
);