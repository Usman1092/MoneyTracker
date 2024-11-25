import React, { useState } from 'react';

function Budget({ onSetBudget, budget, remaining }) {
  const [inputBudget, setInputBudget] = useState('');


  // Update the budget and reset remaining budget
  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = parseFloat(inputBudget);
    if (!isNaN(amount) && amount > 0) {
      onSetBudget(amount);
    }
    setInputBudget('');
  };
 

  return (
    <div className="bg-white p-4 rounded-lg mb-4">
      <form onSubmit={handleSubmit} className="flex items-center space-x-2">
        <input
          type="number"
          className="border p-2 rounded-lg w-full"
          placeholder="Enter budget"
          value={inputBudget}
          onChange={(e) => setInputBudget(e.target.value)}
        />
        <button type="submit" className="w-auto bg-blue-500 text-white px-4 py-2 rounded-lg">Budget</button>
      </form>
      <div className="mt-2 flex flex-col text-left">
        <p>{`Total Budget: ${budget} RS`  } </p>
        <p>{`Remaining Budget: ${remaining} RS`}</p>
      </div>
    </div>
  );
}

export default Budget;
