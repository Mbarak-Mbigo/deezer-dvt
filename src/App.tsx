import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Counter } from './features/counter/Counter';
import './App.scss';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="counter" element={<Counter />} />
      </Routes>
    </div>
  );
}

export default App;
