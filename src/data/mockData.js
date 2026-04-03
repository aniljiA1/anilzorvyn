const transactions = [
  {
    id: 1,
    date: "2026-03-28",
    amount: 5000,
    category: "Salary",
    type: "income",
  },
  {
    id: 2,
    date: "2026-03-29",
    amount: 300,
    category: "Food",
    type: "expense",
  },
  {
    id: 3,
    date: "2026-03-30",
    amount: 1200,
    category: "Shopping",
    type: "expense",
  },
  {
    id: 4,
    date: "2026-03-31",
    amount: 800,
    category: "Freelance",
    type: "income",
  },
  {
    id: 5,
    date: "2026-04-01",
    amount: 150,
    category: "Transport",
    type: "expense",
  },
  {
    id: 6,
    date: "2026-04-02",
    amount: 2000,
    category: "Salary",
    type: "income",
  },
  {
    id: 7,
    date: "2026-04-03",
    amount: 400,
    category: "Food",
    type: "expense",
  },
  {
    id: 8,
    date: "2026-04-04",
    amount: 700,
    category: "Entertainment",
    type: "expense",
  },
];

// 📊 Balance Trend Data (for line chart)
export const balanceData = [
  { date: "Mar 28", balance: 5000 },
  { date: "Mar 29", balance: 4700 },
  { date: "Mar 30", balance: 3500 },
  { date: "Mar 31", balance: 4300 },
  { date: "Apr 01", balance: 4150 },
  { date: "Apr 02", balance: 6150 },
  { date: "Apr 03", balance: 5750 },
  { date: "Apr 04", balance: 5050 },
];

// 🥧 Category Breakdown (for pie chart)
export const categoryData = [
  { name: "Food", value: 700 },
  { name: "Shopping", value: 1200 },
  { name: "Transport", value: 150 },
  { name: "Entertainment", value: 700 },
];

export default transactions;
