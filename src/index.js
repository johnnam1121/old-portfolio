import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';


import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // <BrowserRouter>
  //   <React.StrictMode>
  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/AboutMe" element={<AboutMe />} />
  //       <Route path="/MyWorks" element={<MyWorks />} />
  //       <Route path="/ContactMe" element={<ContactMe />} />
  //     </Routes>
  //   </React.StrictMode>
  // </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more:https://bit.ly/CRA-vitals
reportWebVitals();