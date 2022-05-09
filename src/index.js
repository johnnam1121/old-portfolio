import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import AboutMe from './Components/AboutMe';
import MyWorks from './Components/MyWorks';
import ContactMe from './Components/ContactMe';

import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/MyWorks" element={<MyWorks />} />
        <Route path="/ContactMe" element={<ContactMe />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more:https://bit.ly/CRA-vitals
reportWebVitals();