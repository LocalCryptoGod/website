import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the world of:
        </p>
        <a
          className="App-link"
          href="https://twitter.com/localcryptogod"
          target="_blank"
          rel="noopener noreferrer"
        >
          LocalCryptoGod
        </a>
      </header>
    </div>
  );
}

export default App;
