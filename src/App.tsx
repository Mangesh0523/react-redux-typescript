import React from 'react';

import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './state';

function App() {

  const dispach=useDispatch()

  const {depositeMoney,withdrawMoney, bankrupt} =bindActionCreators(actionCreators, dispach);
  const amount= useSelector((state: State)=>state.bank)
  return (
    <div className="App">
      <h1>{amount}</h1>
      <button onClick={()=> depositeMoney(1000)}>Deposite</button>
      <button onClick={()=> withdrawMoney(100)}>Withdraw</button>
      <button onClick={()=> bankrupt()}>Bankrupt</button>
    </div>
  );
}

export default App;
