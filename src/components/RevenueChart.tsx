import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  { date: "19 June", value: 1000 },
  { date: "20 June", value: 3500 },
  { date: "21 June", value: 3700 },
  { date: "22 June", value: 4000 },
  { date: "23 June", value: 5500 },
  { date: "24 June", value: 6500 },
  { date: "25 June", value: 6500 },
];

const RevenueChart = () => {
  return (
    <div className="revenue-chart">
      <div className="revenue-chart__header">
        <div className="revenue-chart__title">
          <h3>Total revenue</h3>
          <span className="revenue-chart__subtitle">Goal €</span>
        </div>
        <div className="revenue-chart__toggle">
          <button className="active">Month</button>
          <button>Week</button>
        </div>
      </div>
      <div className="revenue-chart__content">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="date" />
            <YAxis />
            <Line type="monotone" dataKey="value" stroke="#40E6D2" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;
