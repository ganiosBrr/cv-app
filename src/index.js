import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home/home';

import './index.css';
import './assets/fonts/Open-Sans/static/OpenSans_Condensed-Regular.ttf'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/inner' element={<App/>}/>
        <Route path='/' element={<Home/>}/>  
      </Routes>
    </Router>
  </React.StrictMode>
);

