function SummaryCard({ title, value }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className="text-2xl font-bold mt-1">₹{value}</p>
    </div>
  );
}

export default SummaryCard;
