const transactions = [
  { id: 1, type: "income", category: "Salary", amount: 5000, date: "2024-01-10" },
  { id: 2, type: "expense", category: "Groceries", amount: 1200, date: "2024-01-12" },
  { id: 3, type: "expense", category: "Rent", amount: 2000, date: "2024-01-05" },
  { id: 4, type: "income", category: "Freelance", amount: 1500, date: "2024-01-20" },
  { id: 5, type: "expense", category: "Utilities", amount: 500, date: "2024-01-25" }
];


const totalIncome = transactions.filter(transaction => transaction.type === "income")
console.log("Total Income:", totalIncome.reduce((sum, transaction) => sum + transaction.amount, 0));
const totalExpenses = transactions.filter(transaction => transaction.type === "expense")
console.log("Total Expenses:", totalExpenses.reduce((sum, transaction) => sum + transaction.amount, 0))
const netBalance = totalIncome.reduce((sum, transaction) => sum + transaction.amount, 0) - totalExpenses.reduce((sum, transaction) => sum + transaction.amount, 0);
console.log("Net Balance:", netBalance);