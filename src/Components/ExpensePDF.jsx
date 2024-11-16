// import React from 'react';
// import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// const styles = StyleSheet.create({
//   page: { padding: 20 },
//   section: { marginBottom: 10 },
//   title: { fontSize: 20, marginBottom: 10 },
// });

// function ExpensePDF({ expenses, budget }) {
//   return (
//     <Document>
//       <Page style={styles.page}>
//         <View style={styles.section}>
//           <Text style={styles.title}>Expense Report</Text>
//           <Text>Total Budget: ${budget.toFixed(2)}</Text>
//         </View>
//         <View style={styles.section}>
//           {expenses.map((expense) => (
//             <Text key={expense.id}>
//               {expense.description} - ${expense.amount.toFixed(2)} ({expense.category})
//             </Text>
//           ))}
//         </View>
//       </Page>
//     </Document>
//   );
// }

// export default ExpensePDF;











// import React from 'react';
// import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// const styles = StyleSheet.create({
//   page: { padding: 20 },
//   section: { marginBottom: 10 },
//   title: { fontSize: 20, marginBottom: 10 },
// });

// function ExpensePDF({ expenses, budget,totalExpenses }) {
//   return (
//     <Document>
//       <Page style={styles.page}>
//         <View style={styles.section}>
//           <Text style={styles.title}>Expense Report</Text>
//           <Text>Total Budget: {`${budget} RS`}</Text>
//         </View>
//         <View style={styles.section}>
//           {expenses.map((expense) => (
//             <Text key={expense.id}>
//               {`${expense.description}  ${expense.amount}  ${expense.category} ${totalExpenses}RS`}
//             </Text>
//           ))}
//         </View>
//         <View>
//         <Text><div className="mt-2 text-lg font-bold">Total Expenses: {`${totalExpenses} RS`}</div></Text>
//         </View>
//       </Page>
//     </Document>
//   );
// }

// export default ExpensePDF;





import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Define PDF styles
const styles = StyleSheet.create({
  page: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textDecoration: 'underline',
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    borderBottomStyle: 'solid',
    marginBottom: 4,
    paddingBottom: 4,
  },
  tableRow: {
    flexDirection: 'row',
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
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

const ExpensePDF = ({ expenses, budget }) => {
  // Function to group expenses by date
  const groupExpensesByDate = () => {
    return expenses.reduce((grouped, expense) => {
      const date = expense.date;
      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(expense);
      return grouped;
    }, {});
  };

  // Total expenses calculation
  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  // Grouped expenses by date
  const groupedExpenses = groupExpensesByDate();

  return (
    <Document>
      <Page style={styles.page}>
        {/* Budget Information */}
        <Text style={styles.sectionTitle}>Budget Information</Text>
        <Text>Total Budget:{`${budget.toFixed(2)} RS`} </Text>
        <Text>Remaining Budget: {`${(budget - totalExpenses).toFixed(2)} RS`}</Text>
        <Text>Total Expenses: {`${totalExpenses.toFixed(2)} RS`}</Text>

        {/* Expense List */}
        <Text style={styles.sectionTitle}>Expense List</Text>
        <View style={styles.tableHeader}>
          <Text style={styles.tableCol}>Date</Text>
          <Text style={styles.tableCol}>Description</Text>
          <Text style={styles.tableCol}>Category</Text>
          <Text style={styles.tableCol}>Amount</Text>
        </View>
        {expenses.map((expense) => (
          <View key={expense.id} style={styles.tableRow}>
            <Text style={styles.tableCol}>{expense.date}</Text>
            <Text style={styles.tableCol}>{expense.description}</Text>
            <Text style={styles.tableCol}>{expense.category}</Text>
            <Text style={styles.tableCol}>{`${expense.amount.toFixed(2)} RS`}</Text>
          </View>
        ))}

        {/* Expense History by Date */}
        <Text style={styles.sectionTitle}>Expense History by Date</Text>
        
        {Object.entries(groupedExpenses).map(([date, expensesOnDate]) => (
          <View key={date} style={styles.groupContainer}>
            <Text style={styles.groupTitle}>{`Date: ${date}`}</Text>
            <View  style={styles.tableRow}>
            
            <Text  style={styles.tableCol}>Description</Text>
            <Text  style={styles.tableCol}>category</Text>
            <Text  style={styles.tableCol}>Amount</Text>
            </View>
            {expensesOnDate.map((expense) => (
              <View key={expense.id} style={styles.tableRow}>
                <Text style={styles.tableCol}>{expense.description}</Text>
                <Text style={styles.tableCol}>{expense.category}</Text>
                <Text style={styles.tableCol}>{`${expense.amount.toFixed(2)} RS`}</Text>
              </View>
            ))}
          </View>
        ))}
      </Page>
    </Document>
  );
};

export default ExpensePDF;
