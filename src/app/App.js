import React from 'react';
import './App.css';
import Rewards from 'app/Rewards';
import {getTransactions, postTransaction} from 'api/api.js';

const App = () => {
  const [state, setState] = React.useState({transactions:[], disabled: true, amount: '0.00'})

  React.useEffect(() => {
    getTransactions().then((resp) => {
      setState((prevstate)=>({...prevstate, transactions:resp}));
    });
  }, []);

  const handleAmountChange = (event) => {
    let {value} = event.target;
    let amount = Number(value);
    if (Number.isNaN(amount)) {
      amount = state.amount;
    }
    
    setState({...state, disabled: Number(amount)>1?false:true, amount: Number(amount).toFixed(2)});
  }

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
        <label>Add Transaction over $1.00 </label>
        <input type='text' value={state.amount} onChange={handleAmountChange} />
        <button disabled={state.disabled} onClick={()=> {
            postTransaction(state.amount).then((resp) => {setState({...state, amount: '0.00', disabled: true, transactons: resp})});
        }}> Add </button>
      </footer>
    </div>
  );
}

export default App;
