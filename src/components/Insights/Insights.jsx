import useStore from "../../store/useStore";

function Insights() {
  const { transactions } = useStore();

  // Calculate income
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  // Calculate expense
  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  // Savings
  const saving = income - expense;

  return (
    <div className="bg-white p-4 rounded-2xl shadow mt-4">
      <h2 className="font-bold mb-2">Insights</h2>

      <p>💰 Savings: ₹{saving}</p>

      <p>
        📊 Expense Ratio:{" "}
        {income === 0 ? "0%" : ((expense / income) * 100).toFixed(1) + "%"}
      </p>

      {expense > income ? (
        <p className="text-red-500">⚠️ Spending too high</p>
      ) : (
        <p className="text-green-600">✅ Good financial health</p>
      )}
    </div>
  );
}

export default Insights;
