import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteApp from './routes/RouteApp'
import reportWebVitals from './reportWebVitals';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouteApp />
  </React.StrictMode>
);

reportWebVitals();
