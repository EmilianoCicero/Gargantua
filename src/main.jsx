import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import ButtonPage from './pages/ButtonPage.jsx';
import './styles/tokens.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/button" element={<ButtonPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
