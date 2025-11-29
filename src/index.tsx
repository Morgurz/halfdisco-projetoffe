import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FavoritosProvider } from './context/FavoritosContext'; // <- importar o provider

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <FavoritosProvider>
      <App />
    </FavoritosProvider>
  </React.StrictMode>
);

reportWebVitals();
