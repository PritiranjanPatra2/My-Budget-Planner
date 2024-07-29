import './App.css'
import Budget from './Budget'
import Expenses from './Expenses'
import { BudgetContext } from './BudgetContext'
import React, { useState } from 'react'

function App() {
  const [details, setDetails] = useState([]);

  return (
    <>
      <BudgetContext.Provider value={{ details, setDetails }}>
        <Budget />
        <Expenses />
      </BudgetContext.Provider>
    </>
  );
}

export default App;
