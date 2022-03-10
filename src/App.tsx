import * as React from 'react';
import Logo from './logo.svg';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import Doc1 from './doc1/index'
import VarType from './typescript/varType';


function Home() {
  return (
    <div>123
      <Logo />
      </div>
  )
}

function Home1() {
  return (
    <div>456</div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <Link to="/q1">Invoices</Link>
        </p>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/q1" element={<Home1 />} />
          <Route path="/q2" element={<Doc1 />} />
          <Route path="/varType" element={<VarType />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
