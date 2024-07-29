import React, { useContext, useRef } from 'react';
import { BudgetContext } from './BudgetContext';
import './Expenses.css';

function Expenses() {
  const { details, setDetails } = useContext(BudgetContext);
  const NameRef = useRef(null);
  const AmountRef = useRef(null);

  function deletei(index) {
    let newarr = [...details];
    newarr = newarr.filter((item, i) => i !== index);
    setDetails(newarr);
  }

  return (
    <div className="expenses-container">
      {details && (
        <div className="expenses-list">
          {details.map((item, index) => (
            <div key={index}>
              <span>{item.Name}</span>
              <span>Rs.{item.Amount}</span>
              <button onClick={() => deletei(index)}>X</button>
            </div>
          ))}
        </div>
      )}
      {details.length === 0 && <><div className="add-expenses-message">Add data to the List</div><hr/></>}

      <h1>Add Expenses</h1>
      <label htmlFor="Name">Name</label>
      <input type="text" name="Name" id="Name" ref={NameRef} />
      <label htmlFor="Amount">Amount</label>
      <input type="number" name="Amount" id="Amount" ref={AmountRef} />
      <button onClick={() => {
        setDetails([...details, { Name: NameRef.current.value, Amount: AmountRef.current.value }]);
        NameRef.current.value = '';
        AmountRef.current.value = '';
      }}>Save</button>
    </div>
  );
}

export default Expenses;
