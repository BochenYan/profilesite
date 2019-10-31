import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TopNav from './components/TopNav'

function App() {
  return (
    <div className="App">
      <TopNav name="Bochen"></TopNav>
      <header className="App-header">
        <p>hello world</p>
      </header>
    </div>
  );
}

export default App;
