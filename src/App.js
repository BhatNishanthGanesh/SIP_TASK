import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import Home from './Pages/Home';
import Model from './Pages/Model';
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/model" element={<Model/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
