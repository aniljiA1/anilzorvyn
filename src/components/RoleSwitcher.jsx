import useStore from "../store/useStore";

function RoleSwitcher() {
  const { role, setRole } = useStore();

  return (
    <select
      value={role}
      onChange={(e) => setRole(e.target.value)}
      className="p-2 border rounded"
    >
      <option value="viewer">Viewer</option>
      <option value="admin">Admin</option>
    </select>
  );
}

export default RoleSwitcher;
