import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './css/global.css';  // Import global CSS here

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
