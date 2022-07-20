import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Artists } from './features/artists/Artists';
import './App.scss';

function App() {
  return (
    <div className="App">
      <h1>DEEZER DVT</h1>
      <Routes>
        <Route path="/" element={<Artists />} />
        {/* <Route path="artists" element={<Artists />} /> */}
      </Routes>
    </div>
  );
}

export default App;
