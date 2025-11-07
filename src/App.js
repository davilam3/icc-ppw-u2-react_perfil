import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PerfilPage from './componentes/Perfilpage';

function App() {
  return (
    <Router basename="/icc-ppw-u2-react_perfil">
      <Routes>
        <Route path="/" element={<PerfilPage />} />
      </Routes>
    </Router>
  );
}

export default App;

