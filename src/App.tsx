import React from 'react';
import logo from './logo.svg';
import './App.css';
import fetchGraphQL from './fetchGraphql';

const { useState, useEffect } = React;
function App() {

const [name, native] = useState(null);
useEffect(() => {
  fetchGraphQL(`
  query RepositoryNameQuery {
    countries{
      name,native
    }
  }
  `,{}).then(response => {
    console.log(response)
  })
})

console.log(name)
console.log(native)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;