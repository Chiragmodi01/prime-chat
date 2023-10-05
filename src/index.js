import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MainProvider } from './helpers/context/main-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainProvider>
      <App />
    </MainProvider>
  </React.StrictMode>
);