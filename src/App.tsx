import React from 'react';
import './App.css';

// Components
import NewTransaction from './components/AddTransaction'
import TransactionsList from './components/TransactionsList';
import { Header } from './components/Header';
import { GlobalProvider } from './context/GlobalContext';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';

import { GetToken } from './service/firebseServise';

function App() {

  GetToken();

  return (
    <GlobalProvider>

      <Header />

      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionsList />
        <NewTransaction />
      </div>
      
    </GlobalProvider>
  );
}

export default App;