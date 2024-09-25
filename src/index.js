import React from "react";
import ReactDOM from "react-dom/client"; // Import from 'react-dom/client' for React 18+
import "./index.css";
import App from "./App"; // Import your main App component
import "./App.css"; // Import global CSS file

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
