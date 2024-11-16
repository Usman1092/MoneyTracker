// import React from 'react';
// import { Icon } from "react-icons-kit";
// import { trash } from "react-icons-kit/feather/trash";
// import { edit2 } from "react-icons-kit/feather/edit2";

// function ExpenseList({ expenses, onRemoveExpense,remaining }) {

//   return (
//     <div className="bg-white p-4 rounded-lg">
//       <h2 className="text-lg font-semibold mb-2">All Expenses </h2>
//       <ul>
//         {expenses.map((expense) => (
//           <li key={expense.id} className="flex justify-between items-center mb-2 border-b pb-1">
//             {/* <span>{`${expense.description}   (${expense.amount.toFixed(2)})  ${expense.category}  `}</span> */}

//            <span>{`${expense.category}`}</span>
//            <span>{`${expense.description}`}</span>
//       <span>{`${expense.amount} RS`}</span>
//             <button onClick={() => onRemoveExpense(expense.id)} className="text-red-500 "><Icon icon={trash}  /></button>

//           </li>

//         ))}

//       </ul>
//       <p>{`Remaining Budget: ${remaining} RS`}</p>

//     </div>
//   );
// }

// export default ExpenseList;

//"2nd final"
// import React, { useState } from 'react';
// import { Icon } from "react-icons-kit";
// import { trash } from "react-icons-kit/feather/trash";
// import { edit2 } from "react-icons-kit/feather/edit2";

// function ExpenseList({ expenses, onEditExpense, onRemoveExpense,remaining }) {
//   const [editing, setEditing] = useState(null);
//   const [editDesc, setEditDesc] = useState('');
//   const [editAmount, setEditAmount] = useState('');

//   const handleEditClick = (expense) => {
//     setEditing(expense.id);
//     setEditDesc(expense.description);
//     setEditAmount(expense.amount);
//   };

//   const handleSave = () => {
//     onEditExpense({ id: editing, description: editDesc, amount: parseFloat(editAmount) });
//     setEditing(null);
//   };

//   return (
//     <div className="bg-white p-4 rounded-lg h-auto">
//       <h2 className="text-lg font-semibold mb-2">Expenses List</h2>

//       <ul>
//         {expenses.map((expense) => (
//           <li key={expense.id} className="flex justify-between items-center mb-2 border-b pb-1">
//             {editing === expense.id ? (
//               <>
//                 <input
//                   value={editDesc}
//                   onChange={(e) => setEditDesc(e.target.value)}
//                   className="border rounded mr-2"
//                 />
//                 <input
//                   type="number"
//                   value={editAmount}
//                   onChange={(e) => setEditAmount(e.target.value)}
//                   className="border rounded mr-2"
//                 />
//                 <button onClick={handleSave} className="text-green-500">Save</button>
//               </>
//             ) : (
//               <>
//                 {/* <span>{expense.description} </span> */}
//                 <span>{`${expense.amount.toFixed(2)} RS`}</span>
//                 <span> {expense.category}</span>
//                 <div>
//                   <button onClick={() => handleEditClick(expense)} className="text-blue-500 mr-2">  <Icon icon={edit2} /></button>
//                   <button onClick={() => onRemoveExpense(expense.id)} className="text-red-500">  <Icon icon={trash} /></button>
//                 </div>
//               </>
//             )}

//           </li>
//         ))}
//         {/* <p>{`Remaining Budget: ${remaining} RS`}</p> */}
//       </ul>

//     </div>
//   );
// }

// export default ExpenseList;

import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import { trash } from "react-icons-kit/feather/trash";
import { edit2 } from "react-icons-kit/feather/edit2";
import { Page, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    textDecoration: "underline",
  },
  tableHeader: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    borderBottomStyle: "solid",
    marginBottom: 4,
    paddingBottom: 4,
  },
  tableRow: {
    flexDirection: "row",
    marginBottom: 2,
  },
  tableCol: {
    flex: 1,
    fontSize: 12,
  },
  groupContainer: {
    marginVertical: 10,
  },
  groupTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
function ExpenseList({ expenses, onEditExpense, onRemoveExpense,totalExpenses }) {
  const [editing, setEditing] = useState(null);
  const [editDesc, setEditDesc] = useState("");
  const [editAmount, setEditAmount] = useState("");
  const [category, setCategory] = useState([]);
  const [date, setDate] = useState("");

  const handleEditClick = (expense) => {
    setEditing(expense.id);
    setEditDesc(expense.description);
    setEditAmount(expense.amount);
    setCategory(expense.category);
    setDate(expense.date);      
  };

  const handleSave = () => {
    onEditExpense({
      id: editing,
      description: editDesc,
      amount: parseFloat(editAmount),
      category,
      date,
    });
    setEditing(null);
  };
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <Document>
        <Page style={styles.page}>
          <h2 className="text-lg font-semibold mb-2">Expenses List</h2>
          <ul>
            {/* <table>
              <th>
                <tr>
                  <td>Description</td>
                  <td>Amount</td>
                  <td>Category</td>
                  <td>Action</td>
                </tr>
              </th> */}
           
            {/* {expenses.map((expense) => (
             

           <li
                key={expense.id}
                className="flex justify-between items-center mb-2 border-b pb-1"
              >
                {editing === expense.id ? (
                  <>
                    <input
                      value={editDesc}
                      onChange={(e) => setEditDesc(e.target.value)}
                      className="border rounded mr-2 w-auto"
                    />
                    <input
                      type="number"
                      value={editAmount}
                      onChange={(e) => setEditAmount(e.target.value)}
                      className="border rounded mr-2 w-auto"
                    />
                    <input
                      type="text"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="border rounded mr-2 w-auto"
                    />
                    <button onClick={handleSave} className="text-green-500">
                      Save
                    </button>
                  </>
                ) : (
                  <>
                    <span>{expense.description} </span>
                    <span>{`${expense.amount.toFixed(0)} RS`}</span>
                    <span> {expense.category}</span>
                    <div>
                      <button
                        onClick={() => handleEditClick(expense)}
                        className="text-blue-500 mr-2"
                      >
                        {" "}
                        <Icon icon={edit2} />
                      </button>
                      <button
                        onClick={() => onRemoveExpense(expense.id)}
                        className="text-red-500"
                      >
                        {" "}
                        <Icon icon={trash} />
                      </button>
                    </div>
                  </>
                )}
              </li>
             
            ))} */}
            

<div class="relative  overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Description
                </th>
                <th scope="col" class="px-6 py-3">
                    Amount
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
               
            </tr>
        </thead>
        <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id} class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
               {editing === expense.id ? (
                  <>
                    <input
                      value={editDesc}
                      onChange={(e) => setEditDesc(e.target.value)}
                      className="border rounded mr-2 w-auto"
                    />
                    <input
                      type="number"
                      value={editAmount}
                      onChange={(e) => setEditAmount(e.target.value)}
                      className="border rounded mr-2 w-auto"
                    />
                    <input
                      type="text"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="border rounded mr-2 w-auto"
                    />
                    <button onClick={handleSave} className="text-green-500">
                      Save
                    </button>
                  </>
                ) : (
                  <>
            
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {expense.description} 
                </th>
                <td class="px-6 py-4">
                    {expense.amount}
                </td>
                <td class="px-6 py-4">
                {expense.category}
                </td>
                <td class="px-6 py-4">
                <div>
                      <button
                        onClick={() => handleEditClick(expense)}
                        className="text-blue-500 mr-2"
                      >
                        {" "}
                        <Icon icon={edit2} />
                      </button>
                      <button
                        onClick={() => onRemoveExpense(expense.id)}
                        className="text-red-500"
                      >
                        {" "}
                        <Icon icon={trash} />
                      </button>
                    </div>
                  
                </td> 
                <td>{totalExpenses}</td>
                 </>
                  )}
             
            </tr>
           ))}
        </tbody>
    </table>
</div>


             {/* </table> */}
          </ul>
        </Page>
      </Document>
    </div>
  );
}

export default ExpenseList;
