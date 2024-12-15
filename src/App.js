<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
=======
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Boot from "../src/components/boot.jsx";

function App() {
  return (
    <>
      <header>
        <Boot />
      </header>
    </>
>>>>>>> 9089f122305d747850568c43250a5f045cfbaceb
  );
}

export default App;
