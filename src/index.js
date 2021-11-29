import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from "./App2";
import reportWebVitals from './reportWebVitals';

// react-router-dom module install 
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>, 
  <BrowserRouter>
    <Routes>
      <Route path="/app1" element={<App />} />
      <Route path="/app2" element={<App2 />} />
      <Route path="/" element={<Navigate to ="/app1" />}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
