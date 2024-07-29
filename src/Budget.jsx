import React, { useContext, useState, useEffect, useRef } from 'react';
import { BudgetContext } from './BudgetContext';
import './Budget.css'

function Budget() {
  const { details } = useContext(BudgetContext);
  const [remaining, setRemaining] = useState(0);
  const [spent, setSpent] = useState(0);

  useEffect(() => {
    let totalSpent = details.reduce((acc, item) => acc + parseFloat(item.Amount), 0);
    setSpent(totalSpent);
    setRemaining(budgetref.current.value - totalSpent);
  }, [details]);

  let budgetref = useRef(null);

  return (
    <div className="budget-container">
      <h1>My Budget Planner</h1>
      <input type="text" value={2000} readOnly ref={budgetref} />
      <button>Remaining Rs. {remaining}</button>
      <button>Spent so far. {spent}</button>
    </div>
  );
}

export default Budget;
