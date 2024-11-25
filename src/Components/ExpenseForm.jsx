// import React, { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';

// function ExpenseForm({ onAddExpense }) {
//   const [description, setDescription] = useState('');
//   const [amount, setAmount] = useState('');
//   const [category, setCategory] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (description && amount && category) {
//       const expense = {
//         id: uuidv4(),
//         description,
//         amount: parseFloat(amount),
//         category,
//       };
//       onAddExpense(expense);
//       setDescription('');
//       setAmount('');
//       setCategory('');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="  bg-white p-4 rounded-lg mb-4">
    
//       <input
//         type="text"
//         placeholder="Description"
//         className="border p-2 rounded-lg w-full mb-2"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         required
//       /><br/>
//       <input
//         type="number"
//         placeholder="Amount"
//         className="border p-2 rounded-lg w-full mb-2"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//         required
//       /><br/>
//       <select
//         className="border p-2 rounded-lg w-full mb-2"
//         value={category}
//         onChange={(e) => setCategory(e.target.value)}
//       >
//         <option value="">Select Category</option>
//         <option value="Food">Food</option>
//         <option value="Emergency">Emergency</option>
//         <option value="Education">Education</option>
//         <option value="Transportation">Transportation</option>
//         <option value="Utilities">Utilities</option>
//         <option value="Health">Health</option>
//         <option value="Others">Others</option>
//       </select><br/>
//       <button type="submit" className=" bg-green-500 text-white px-4 py-2 rounded-lg w-full">Add Expense</button>
//     </form>
//   );
// }

// export default ExpenseForm;







import React, { useState } from 'react';
import Swal from 'sweetalert2';
function ExpenseForm({ onAddExpense,budgetExceeded }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [date, setDate] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Add the expense
    if(budgetExceeded === true){
      Swal.fire({
        title: 'Error!',
        text: 'Budget exceeded!',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return;
    }
    else{ onAddExpense({
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      category,
      date,
    }); 
    // Clear the form fields
    setDescription('');
    setAmount('');
    setCategory('');
    setDate('');
 
  }
 
  
    // Show SweetAlert confirmation
    // Swal.fire({
    //   title: 'Success!',
    //   text: 'Your expense has been added.',
    //   icon: 'success',
    //   confirmButtonText: 'OK'
    // });
  
   
  
  };


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onAddExpense({
  //     id: Date.now(),
  //     description,
  //     amount: parseFloat(amount),
  //     category,
  //     date,
  //   });
  //   setDescription('');
  //   setAmount('');
  //   setCategory('');
  //   setDate('');
  // };
  console.log(budgetExceeded);

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md mb-4">
      <div className="mb-2">
        <label className="block font-semibold">Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block font-semibold">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block font-semibold">Category</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}  className="w-full p-2 border rounded">
          <option>Food</option>
          <option>Emergency</option>
          <option>Education</option>
          <option>Transportation</option>
          <option>Utilities</option>
          <option>Health</option>
          <option>Others</option>
        </select>
      </div>
      <div className="mb-2">
        <label className="block font-semibold">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;
