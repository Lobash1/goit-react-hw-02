import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'modern-normalize';
import './index.css';
import App from './component/App/App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './components/App/App';
// import 'modern-normalize';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   // <React.StrictMode>
//   <App />
//   // </React.StrictMode>
// );
