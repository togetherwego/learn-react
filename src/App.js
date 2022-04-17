import logo from './logo.svg';
import './App.css';

function App() {
  const handleNameCHange = () => {
    const name = ['Firyal', 'Mikasa', 'Eren']
    const int = Math.floor(Math.random() * 3)
    return name[int]
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello {handleNameCHange()}!</p>
      </header>
    </div>
  );
} 

export default App;
