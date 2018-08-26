import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const history = createBrowserHistory({basename: window.location.pathname})
// ใช้ Router ธรรมดาสร้าง เพราะเราสร้าง custom
ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>
, document.getElementById('root'));
registerServiceWorker();