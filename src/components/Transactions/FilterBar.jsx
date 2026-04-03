function FilterBar({ setFilter }) {
  return (
    <select
      onChange={(e) => setFilter(e.target.value)}
      className="p-2 border rounded mb-2"
    >
      <option value="">All</option>
      <option value="income">Income</option>
      <option value="expense">Expense</option>
    </select>
  );
}

export default FilterBar;
