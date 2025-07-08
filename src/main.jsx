import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import ButtonPage from './pages-components/ButtonPage.jsx';
import CardPage from './pages-components/CardPage.jsx';
import Documentation from './pages/documentation.jsx';  
import About from './pages/about.jsx';
import './index.css';
import './styles/tokens.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/button" element={<ButtonPage />} />
        <Route path="/card" element={<CardPage />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
