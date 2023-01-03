import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


// Hash Router 
// stores the hashed portion of the url 
// Useful is some (but rare) cases

// Memory Router
// useful for running tests on your code.
// remembers yours browsers

// Static Router
// species a specific location

// Native Router
// ???

