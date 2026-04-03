import { create } from "zustand";

const useStore = create((set) => ({
  role: "viewer",

  transactions: [
    {
      id: 1,
      date: "2026-04-01",
      amount: 5000,
      category: "Salary",
      type: "income",
    },
    {
      id: 2,
      date: "2026-04-02",
      amount: 200,
      category: "Food",
      type: "expense",
    },
    {
      id: 3,
      date: "2026-04-03",
      amount: 1000,
      category: "Shopping",
      type: "expense",
    },
  ],

  setRole: (role) => set({ role }),

  addTransaction: (tx) =>
    set((state) => ({
      transactions: [...state.transactions, { ...tx, id: Date.now() }],
    })),
}));

export default useStore;
