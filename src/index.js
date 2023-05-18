import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home/home';
import { makeServer } from './services/server';
import store from './app/store';

import './index.css';
import './assets/fonts/Open-Sans/static/OpenSans_Condensed-Regular.ttf'

if (process.env.NODE_ENV === 'development') {
  makeServer({ environment: "development" });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
            <Route path='/inner' element={<App/>}/>
          <Route path='/' element={<Home/>}/>  
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

