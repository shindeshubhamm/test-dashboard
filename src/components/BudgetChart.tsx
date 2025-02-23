import { FC } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Over Budget", value: 15, color: "#EF4444" },
  { name: "On Budget", value: 35, color: "#818CF8" },
  { name: "Under Budget", value: 50, color: "#40E6D2" },
];

const BudgetChart: FC = () => {
  return (
    <div className="budget-chart">
      <div className="budget-chart__header">
        <div className="budget-chart__title">
          <h3>Budget</h3>
          <div className="budget-chart__toggle">
            <button className="budget-chart__button">Profitability</button>
            <button className="budget-chart__button active">Status</button>
          </div>
        </div>
      </div>
      <div className="budget-chart__content">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={data} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="budget-chart__center">
          <span className="budget-chart__total">5</span>
          <span className="budget-chart__label">Total projects</span>
        </div>
        <div className="budget-chart__legend">
          {data.map((item) => (
            <div key={item.name} className="budget-chart__legend-item">
              <span className="dot" style={{ backgroundColor: item.color }} />
              <span className="label">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BudgetChart;
