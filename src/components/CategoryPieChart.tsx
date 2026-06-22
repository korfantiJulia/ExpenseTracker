import type { Expense } from "@/types/expense";
import { sumByCategory } from "@/features/expenses/sumByCategory";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface CategoryPieChartProps {
  expenses: Expense[];
}

export function CategoryPieChart({ expenses }: CategoryPieChartProps) {
  const totals = sumByCategory(expenses);
  const data = Object.entries(totals).map(([name, value]) => ({ name, value }));

  if (data.length === 0) {
    return <p>No data to display</p>;
  }

  const COLORS = [
    "#6366f1",
    "#06b6d4",
    "#f59e0b",
    "#ef4444",
    "#10b981",
    "#8b5cf6",
    "#ec4899",
    "#64748b",
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie data={data} dataKey="value" nameKey="name" outerRadius={100} label>
          {data.map((entry, index) => (
            <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}
