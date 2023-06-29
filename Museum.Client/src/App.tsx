import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import './assets/css/linearicons.css';
import './assets/css/owl.carousel.css';
import './assets/css/font-awesome.min.css';
import './assets/css/nice-select.css';
import './assets/css/magnific-popup.css';
import './assets/css/bootstrap.css';
import './assets/css/main.css';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;



