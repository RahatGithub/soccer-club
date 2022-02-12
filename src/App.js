import './App.css';
import PlayersList from './components/PlayersList/PlayersList';
import Summary from './components/Summary/Summary';

function App() {
  return (
    <div className="App">
      <div className="players-list">
        <PlayersList></PlayersList>
      </div>
    </div>
  );
}

export default App;
