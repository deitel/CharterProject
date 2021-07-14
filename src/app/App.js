//import logo from './logo.svg';
import './App.css';
import Rewards from 'app/Rewards';
import transactions from 'data/transactions';

const App = () => {
  return (
    <div role='main' className="App">
      <header className="App-header">
        <h1>
          Charter Rewards
        </h1>
      </header>
      <div className='App-content'>
        <Rewards transactions={transactions} />
      </div>
      <footer>

      </footer>
    </div>
  );
}

export default App;
