import useStore from "../store/useStore";
import SummaryCard from "../components/Dashboard/SummaryCard";
import TransactionTable from "../components/Transactions/TransactionTable";
import Insights from "../components/Insights/Insights";
import RoleSwitcher from "../components/RoleSwitcher";
import BalanceChart from "../components/Dashboard/BalanceChart";
import CategoryChart from "../components/Dashboard/CategoryChart";
import { balanceData, categoryData } from "../data/mockData";

function Dashboard() {
  const { transactions } = useStore();

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Finance Dashboard</h1>
        <RoleSwitcher />
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SummaryCard title="Balance" value={income - expense} />
        <SummaryCard title="Income" value={income} />
        <SummaryCard title="Expense" value={expense} />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <BalanceChart data={balanceData} />
        <CategoryChart data={categoryData} />
      </div>

      {/* Sections */}
      <div className="mt-8">
        <TransactionTable />
      </div>

      <div className="mt-6">
        <Insights />
      </div>
    </div>
  );
}

export default Dashboard;
