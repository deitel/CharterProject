import React from 'react';
import './App.css';
import Rewards from 'app/Rewards';
//import transactions from 'data/transactions';
import {getTransactions, postTransaction} from 'api/api.js';

const App = () => {
  const [state, setState] = React.useState({transactions:[], disabled: true})
  React.useEffect(() => {
    getTransactions().then((resp) => {
      setState({...state, transactions:resp});
    });
  }, []);
  console.log(state);
  return (
    <div role='main' className="App">
      <header className="App-header">
        <h1>
          Charter Rewards
        </h1>
      </header>
      <div className='App-content'>
        <Rewards transactions={state.transactions} />
      </div>
      <footer className='App-footer'>
        <button disabled={state.disabled} onClick={()=> {
            postTransaction(state.amount).then((resp) => {setState({...state, transactons: resp})});
        }}> Add </button>
        <input type='number' onChange={(event)=> {
          setState({...state, disabled: event.target.value?false:true, amount: event.target.value});
        }} />
      </footer>
    </div>
  );
}

export default App;
