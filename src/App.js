import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter basename="/portfolio">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/AboutMe" element={<AboutMe />} />
            <Route path="/MyWorks" element={<MyWorks />} />
            <Route path="/ContactMe" element={<ContactMe />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App