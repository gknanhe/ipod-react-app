import React from 'react';
import ReactDOM from 'react-dom/client';
import "./assets/css/index.css";
import App from "./components/stateful/App";

// Rendering the React App into the HTML DOM Element "root"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
