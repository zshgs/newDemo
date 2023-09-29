import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <h1>My App</h1>
      <Todo />
    </div>
  );
}

export default App;

