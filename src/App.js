import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container, Row, Col, Image } from 'react-bootstrap';

import AboutMe from './Components/AboutMe';
import MyWorks from './Components/MyWorks';
import ContactMe from './Components/ContactMe';
import TopBar from './Components/TopBar';
import MiddleBar from './Components/MiddleBar';
import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/AboutMe" component={AboutMe} />
        <Route exact path="/MyWorks" component={MyWorks} />
        <Route exact path="/ContactMe" component={ContactMe} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;