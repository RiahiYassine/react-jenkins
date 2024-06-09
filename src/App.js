import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function Home() {
  return <h1>Hey</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
