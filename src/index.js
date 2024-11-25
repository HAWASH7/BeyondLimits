import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Ensure this file exists or update the path
import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
