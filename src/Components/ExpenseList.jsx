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

//******************** * this code if final if below isn't working/
// import React, { useState } from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import { StrictModeDroppable } from "./StrictModeDroppable";
// import { Icon } from "react-icons-kit";
// import { trash } from "react-icons-kit/feather/trash";
// import { edit2 } from "react-icons-kit/feather/edit2";
// import {arrows_square_check} from 'react-icons-kit/linea/arrows_square_check'
// import Swal from "sweetalert2";

// function ExpenseList({
//   expenses,
//   onEditExpense,
//   onRemoveExpense,
//   totalExpenses,
//   setExpenses,
// }) {
//   const [editing, setEditing] = useState(null);
//   const [editDesc, setEditDesc] = useState("");
//   const [editAmount, setEditAmount] = useState("");
//   const [category, setCategory] = useState([]);
//   const [date, setDate] = useState("");

//   const handleEditClick = (expense) => {
//       setEditing(expense.id);
//       Swal.fire({
//         icon: 'info',
//         title: 'You can Edit by clicking on the text below',
//         text: ` Edit now !`,
//       });
//     setEditing(expense.id);
//     setEditDesc(expense.description);
//     setEditAmount(expense.amount);
//     setCategory(expense.category);
//     setDate(expense.date);
//   };

//   const handleSave = () => {
//     onEditExpense({
//       id: editing,
//       description: editDesc,
//       amount: parseFloat(editAmount),
//       category,
//       date,
//     });
//     setEditing(null);
//   };

//   const handleOnDragEnd = (result) => {
//     if (!result.destination) return;

//     // Reorder expenses based on drag-and-drop
//     const reorderedExpenses = Array.from(expenses);
//     const [movedExpense] = reorderedExpenses.splice(result.source.index, 1);
//     reorderedExpenses.splice(result.destination.index, 0, movedExpense);

//     // setExpenses(reorderedExpenses);
//   };

//   return (
//     <div className="bg-white p-4 rounded-lg shadow-md">
//       <h2 className="text-lg font-semibold mb-2">Expenses List</h2>
//       <DragDropContext onDragEnd={handleOnDragEnd}>
//         <StrictModeDroppable droppableId={"expense"}>
//           {(provided) => (
//             <div {...provided.droppableProps} ref={provided.innerRef}>

//               {expenses.map((expense, index) => (

//                 <Draggable
//                   key={expense.id.toString()} // Ensure key and draggableId are strings
//                   draggableId={expense.id.toString()}
//                   index={index}

//                 >

//                   {(provided) => (

//                     <div
//                     ref={provided.innerRef}
//                     {...provided.draggableProps}
//                     {...provided.dragHandleProps}
//                     className="mb-2 p-2 border rounded flex flex-wrap justify-between items-center border border-black"
//                   >
//                     {editing === expense.id  ? (

//                       <>

//                       <div className="flex  flex-row gap-2">
//                         <input
//                           value={editDesc}
//                           onChange={(e) => setEditDesc(e.target.value)}
//                           className="border border-none rounded mr-auto ml-auto  w-[100%]"
//                         />
//                         <input
//                           type="number"
//                           value={editAmount}
//                           onChange={(e) => setEditAmount(e.target.value)}
//                           className="border border-none rounded mr-auto ml-auto  w-[100%] "
//                         />
//                         <input
//                           type="text"
//                           value={category}
//                           onChange={(e) => setCategory(e.target.value)}
//                           className="border border-none rounded  mr-auto ml-auto w-[100%]"
//                         />
//                         <button onClick={handleSave} className="text-blck-900 text-2xl">
//                           <Icon icon={ arrows_square_check}/>
//                         </button>
//                         </div>
//                       </>
//                     ) : (
//                       <>
//                         <span>{expense.description}</span>
//                         <span>{`${expense.amount.toFixed(2)} RS`}</span>
//                         <span>{expense.category}</span>
//                         <div>
//                           <button
//                             onClick={() => handleEditClick(expense)}
//                             className="text-blue-500 mr-2"
//                           >
//                             <Icon icon={edit2} />
//                           </button>
//                           <button
//                             onClick={() => onRemoveExpense(expense.id)}
//                             className="text-red-500"
//                           >
//                             <Icon icon={trash} />
//                           </button>
//                         </div>
//                       </>
//                     )}
//                   </div>

//                   )}
//                 </Draggable>

// // <Draggable key={expense.id} draggableId={expense.id.toString()} index={index}>
// //   {(provided) => (
// //     <div
// //       ref={provided.innerRef}
// //       {...provided.draggableProps}
// //       {...provided.dragHandleProps}
// //       className="mb-2 p-2 border rounded flex justify-between items-center"
// //     >
// //         {(provided) => (

// //                   <div
// //                   ref={provided.innerRef}
// //                   {...provided.draggableProps}
// //                   {...provided.dragHandleProps}
// //                   className="mb-2 p-2 border rounded flex justify-between items-center"
// //                 >
// //                   {editing === expense.id ? (
// //                     <>
// //                       <input
// //                         value={editDesc}
// //                         onChange={(e) => setEditDesc(e.target.value)}
// //                         className="border rounded mr-2 w-auto"
// //                       />
// //                       <input
// //                         type="number"
// //                         value={editAmount}
// //                         onChange={(e) => setEditAmount(e.target.value)}
// //                         className="border rounded mr-2 w-auto"
// //                       />
// //                       <input
// //                         type="text"
// //                         value={category}
// //                         onChange={(e) => setCategory(e.target.value)}
// //                         className="border rounded mr-2 w-auto"
// //                       />
// //                       <button onClick={handleSave} className="text-green-500">
// //                         Save
// //                       </button>
// //                     </>
// //                   ) : (
// //                     <>
// //                       <span>{expense.description}</span>
// //                       <span>{`${expense.amount.toFixed(2)} RS`}</span>
// //                       <span>{expense.category}</span>
// //                       <div>
// //                         <button
// //                           onClick={() => handleEditClick(expense)}
// //                           className="text-blue-500 mr-2"
// //                         >
// //                           <Icon icon={edit2} />
// //                         </button>
// //                         <button
// //                           onClick={() => onRemoveExpense(expense.id)}
// //                           className="text-red-500"
// //                         >
// //                           <Icon icon={trash} />
// //                         </button>
// //                       </div>
// //                     </>
// //                   )}
// //                 </div>

// //                 )}
// //     </div>
// //   )}
// // </Draggable>

//               ))}

//               {provided.placeholder}
//             </div>
//           )}
//         </StrictModeDroppable>
//       </DragDropContext>

//       <div className="mt-2 text-lg font-bold">
//         Total Expenses: {`${totalExpenses.toFixed(2)} RS`}
//       </div>
//     </div>
//   );
// }

// export default ExpenseList;

import React, { useState } from "react";
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import { StrictModeDroppable } from "./StrictModeDroppable";
import { Icon } from "react-icons-kit";
import { trash } from "react-icons-kit/feather/trash";
import { edit2 } from "react-icons-kit/feather/edit2";
import { arrows_square_check } from "react-icons-kit/linea/arrows_square_check";
import Swal from "sweetalert2";

function ExpenseList({
  expenses,
  onEditExpense,
  onRemoveExpense,
  totalExpenses,
  setExpenses,
}) {
  const [editing, setEditing] = useState(null);
  const [editDesc, setEditDesc] = useState("");
  const [editAmount, setEditAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleEditClick = (expense) => {
    setEditing(expense.id);
    Swal.fire({
      icon: "info",
      title: "You can edit by clicking on the fields below.",
      text: "Edit now!",
    });
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

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedExpenses = Array.from(expenses);
    const [movedExpense] = reorderedExpenses.splice(result.source.index, 1);
    reorderedExpenses.splice(result.destination.index, 0, movedExpense);

    setExpenses(reorderedExpenses);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">Expenses List</h2>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <StrictModeDroppable droppableId="expenses">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {expenses.length > 0 ? (
                expenses.map((expense, index) => (
                  <Draggable
                    key={expense.id.toString()}
                    draggableId={expense.id.toString()}
                    index={index}
                  >
                
                    {(provided) => (
                     
                        <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="mb-2 p-2 border rounded flex justify-between items-center"
                      >
                       
                        {editing === expense.id ? (
                         

                         <div className="flex  flex-row gap-2">
                                              <input
                                                   value={editDesc}
                                                   onChange={(e) => setEditDesc(e.target.value)}
                                                   className="border border-none rounded mr-auto ml-auto  w-[100%]"
                                                 />
                                                 <input
                                                   type="number"
                                                   value={editAmount}
                                                   onChange={(e) => setEditAmount(e.target.value)}
                                                   className="border border-none rounded mr-auto ml-auto  w-[100%] "
                                                 />
                                                 <input
                                                   type="text"
                                                   value={category}
                                                   onChange={(e) => setCategory(e.target.value)}
                                                   className="border border-none rounded  mr-auto ml-auto w-[100%]"
                                                 />
                                                 <button onClick={handleSave} className="text-blck-900 text-2xl">
                                                   <Icon icon={ arrows_square_check}/>
                                                 </button>
                                                 </div>

                        ) : (
                          <>
                            <span>{expense.description}</span>
                            <span>{`${expense.amount.toFixed(2)} RS`}</span>
                            <span>{expense.category}</span>
                            <div>
                              <button
                                onClick={() => handleEditClick(expense)}
                                className="text-blue-500 mr-2"
                              >
                                <Icon icon={edit2} />
                              </button>
                              <button
                                onClick={() => onRemoveExpense(expense.id)}
                                className="text-red-500"
                              >
                                <Icon icon={trash} />
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                      
                    )}

                  </Draggable>
                ))
              ) : (
                <p>No expenses to display.</p>
              )}
              {provided.placeholder}
            </div>
          )}
        </StrictModeDroppable>
      </DragDropContext>
      <div className="mt-2 text-lg font-bold">
        Total Expenses: {`${totalExpenses.toFixed(2)} RS`}
      </div>
    </div>
  );
}

export default ExpenseList;

// import React, { useState } from 'react';
// import { Icon } from 'react-icons-kit';
// import { trash } from 'react-icons-kit/feather/trash';
// import { Page, Document, StyleSheet } from "@react-pdf/renderer";
// import
//  { edit2 } from 'react-icons-kit/feather/edit2';
// import
//  { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import ListItem from './ListItem';
// // import { StyleSheet } from '@react-pdf/renderer';

// const styles = StyleSheet.create({
//   page: {
//     padding: 20,
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: "bold",
//     marginBottom: 10,
//     textDecoration: "underline",
//   },
//   tableHeader: {
//     flexDirection: "row",
//     borderBottomWidth: 1,
//     borderBottomColor: "#000",
//     borderBottomStyle: "solid",
//     marginBottom: 4,
//     paddingBottom: 4,
//   },
//   tableRow: {
//     flexDirection: "row",
//     marginBottom: 2,
//   },
//   tableCol: {
//     flex: 1,
//     fontSize: 12,
//   },
//   groupContainer: {
//     marginVertical: 10,
//   },
//   groupTitle: {
//     fontSize: 14,
//     fontWeight: "bold",
//     marginBottom: 5,
//   },
// });

// function ExpenseList({ expenses, onEditExpense, onRemoveExpense, totalExpenses, handleOnDragEnd }) {
//   const [editing, setEditing] = useState(null);
//   const [editDesc, setEditDesc] = useState("");
//   const [editAmount, setEditAmount] = useState("");
//   const [category, setCategory] = useState([]);
//   const [date, setDate] = useState("");

//   const handleEditClick = (expense) => {
//     setEditing(expense.id);
//     setEditDesc(expense.description);
//     setEditAmount(expense.amount);
//     setCategory(expense.category);
//     setDate(expense.date);
//   };

//   const handleSave = () => {
//     onEditExpense({
//       id: editing,
//       description: editDesc,
//       amount: parseFloat(editAmount),
//       category,
//       date,
//     });
//     // ... your success message
//     setEditing(null);
//   };

//   return (
//     <div className="bg-white p-4 rounded-lg shadow-md">
//       <Document>
//         <Page style={styles.page}>
//           <h2 className="text-lg font-semibold mb-2">Expenses List</h2>
//           <DragDropContext
//   onDragEnd={(result) => {
//     // Ensure `handleOnDragEnd` handles the logic for reordering items
//     if (!result.destination) return; // No destination means no action needed
//     const reorderedExpenses = Array.from(expenses);
//     const [movedItem] = reorderedExpenses.splice(result.source.index, 1);
//     reorderedExpenses.splice(result.destination.index, 0, movedItem);
//     handleOnDragEnd(reorderedExpenses); // Pass updated list to parent or state
//   }}
// >
//   <Droppable droppableId="droppable">
//     {(provided) => (
//       <div
//         ref={provided.innerRef}
//         {...provided.droppableProps}
//         className="todo"
//       >
//         <div   class="relative  overflow-x-auto shadow-md sm:rounded-lg">
//         <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
//           <thead>
//             <tr className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//               <th scope="col" className="px-6 py-3">Description</th>
//               <th scope="col" className="px-6 py-3">Amount</th>
//               <th scope="col" className="px-6 py-3">Category</th>
//               <th scope="col" className="px-6 py-3">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {expenses.map((expense, index) => (

//               <Draggable
//                 key={expense.id.toString() }         // Always convert `id` to string
//                 draggableId={expense.id.toString()}  // Ensure `draggableId` is unique
//                 index={index}
//                >

//                 {(provided) => (
//                   <tr
//                     ref={provided.innerRef}
//                     {...provided.draggableProps}
//                     {...provided.dragHandleProps}
//                     className="odd:bg-white even:bg-gray-50 border-b dark:border-gray-700"
//                   >
//                     <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                       {expense.description}
//                     </td>
//                     <td className="px-6 py-4">{expense.amount}</td>
//                     <td className="px-6 py-4">{expense.category}</td>
//                     <td className="px-6 py-4">
//                       <button
//                         onClick={() => handleEditClick(expense)}
//                         className="text-blue-500 mr-2"
//                       >
//                         <Icon icon={edit2} />
//                       </button>
//                       <button
//                         onClick={() => onRemoveExpense(expense.id)}
//                         className="text-red-500"
//                       >
//                         <Icon icon={trash} />
//                       </button>
//                     </td>
//                   </tr>
//                 )}
//               </Draggable>

//             ))}
//             {provided.placeholder}
//           </tbody>
//         </table>
//         </div>
//       </div>
//     )}
//   </Droppable>
// </DragDropContext>

//           <div className="mt-2 text-lg font-bold">
//             Total Expenses: {`${totalExpenses.toFixed(2)} RS`}
//           </div>
//         </Page>
//       </Document>
//     </div>
//   );
// }

// export default ExpenseList;
