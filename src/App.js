import logo from './logo.png';
import './App.css';
import Typewriter from 'typewriter-effect';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Typewriter
          options={{
            strings: ['Hello, Welcome to the world of LocalCryptoGod', 'Some cool shit is about to happen'],
             autoStart: true,
             loop: true,
          }}
        />
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
