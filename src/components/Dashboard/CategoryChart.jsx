import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";

const COLORS = ["#3b82f6", "#22c55e", "#f59e0b", "#ef4444"];

function CategoryChart({ data }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow w-full flex flex-col items-center">
      <h3 className="font-semibold mb-2">Spending Breakdown</h3>

      <PieChart width={300} height={300}>
        <Pie data={data} dataKey="value" nameKey="name" outerRadius={100} label>
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default CategoryChart;
