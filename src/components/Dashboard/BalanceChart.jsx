import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function BalanceChart({ data }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow w-full">
      <h3 className="font-semibold mb-3 text-center">Balance Trend</h3>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="date" />
          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="balance"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BalanceChart;
