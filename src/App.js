import { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AboutMe from './Components/AboutMe';
import MyWorks from './Components/MyWorks';
import ContactMe from './Components/ContactMe';
import TopBar from './Components/TopBar';
import MiddleBar from './Components/MiddleBar';
import Home from './Components/Home';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter basename="/portfolio">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/#/AboutMe" element={<AboutMe />} />
            <Route path="/#/MyWorks" element={<MyWorks />} />
            <Route path="/#/ContactMe" element={<ContactMe />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App