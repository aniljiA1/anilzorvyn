# 💰 Finance Dashboard 

A clean and interactive **Finance Dashboard** built using React. This project allows users to track financial activity, view insights, and explore transactions with a simple and intuitive UI.

---

## 🚀 Live Demo

Live: https://anilzorvyn.vercel.app/

---

## 📌 Features

### 📊 Dashboard Overview

* Displays **Total Balance, Income, and Expenses**
* Visualizes data using:

  * 📈 Balance Trend (Line Chart)
  * 🥧 Spending Breakdown (Pie Chart)

### 📋 Transactions

* View all transactions with:

  * Date
  * Amount
  * Category
  * Type (Income / Expense)
* Filter transactions by type
* Admin can **add transactions**

### 🔐 Role-Based UI

* **Viewer** → Can only view data
* **Admin** → Can add transactions
* Role switch available via dropdown

### 💡 Insights

* Displays:

  * Total Savings
  * Expense Ratio
  * Financial Health Indicator
  * Total Transactions

---

## 🛠️ Tech Stack

* **Frontend:** React (Vite)
* **Styling:** Tailwind CSS
* **Charts:** Recharts
* **State Management:** Zustand

---

## 📁 Project Structure

```
src/
│
├── components/
│   ├── Dashboard/
│   ├── Transactions/
│   ├── Insights/
│   └── RoleSwitcher.jsx
│
├── store/
│   └── useStore.js
│
├── data/
│   └── mockData.js
│
├── pages/
│   └── Dashboard.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## ⚙️ Installation & Setup

# Navigate to project
cd finance-dashboard

# Install dependencies
npm install

# Run development server
npm run dev

```
http://localhost:5173/
---


---

## 🙌 Author

**Anil Kumar**

---

