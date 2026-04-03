import { useState } from "react";
import useStore from "../../store/useStore";
import FilterBar from "./FilterBar";

function TransactionTable() {
  const { transactions, role, addTransaction } = useStore();
  const [filter, setFilter] = useState("");

  const filtered = filter
    ? transactions.filter((t) => t.type === filter)
    : transactions;

  const handleAdd = () => {
    const amount = prompt("Enter amount:");
    const category = prompt("Enter category (Food, Salary, etc):");
    const type = prompt("Type (income/expense):");

    if (!amount || !category || !type) return;

    if (type !== "income" && type !== "expense") {
      alert("Type must be 'income' or 'expense'");
      return;
    }

    addTransaction({
      date: new Date().toISOString().split("T")[0],
      amount: Number(amount),
      category,
      type,
    });
  };

  return (
    <div className="bg-white p-5 rounded-2xl shadow mt-6">
      <h2 className="text-lg font-semibold mb-3">Transactions</h2>

      <FilterBar setFilter={setFilter} />

      <table className="w-full border-collapse mt-3">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2">Date</th>
            <th className="p-2">Amount</th>
            <th className="p-2">Category</th>
            <th className="p-2">Type</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((tx) => (
            <tr key={tx.id} className="border-b">
              <td className="p-2">{tx.date}</td>
              <td className="p-2 font-medium">₹{tx.amount}</td>
              <td className="p-2">{tx.category}</td>
              <td
                className={`p-2 ${
                  tx.type === "income" ? "text-green-600" : "text-red-500"
                }`}
              >
                {tx.type}
              </td>
            </tr>
          ))}

          {/* Empty State */}
          {filtered.length === 0 && (
            <tr>
              <td colSpan="4" className="text-center p-4 text-gray-400">
                No transactions found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {role === "admin" && (
        <button
          onClick={handleAdd}
          className="mt-3 bg-blue-500 text-white px-3 py-1 rounded"
        >
          Add Transaction
        </button>
      )}
    </div>
  );
}

export default TransactionTable;
