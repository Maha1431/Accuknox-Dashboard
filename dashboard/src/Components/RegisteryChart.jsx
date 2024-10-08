import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const RegisteryChart = ({ chartData }) => {
  const data = [
    {
      Critical: chartData.critical,
      High: chartData.high,
      Moderate: chartData.moderate,
      Normal: chartData.normal,
      Safe: chartData.safe,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={50}>
      <BarChart layout="vertical" data={data} stackOffset="expand">
        <XAxis type="number" hide />
        <YAxis type="category" dataKey="name" hide />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="Critical"
          stackId="a"
          fill="#b72b2b"
          radius={[10, 0, 0, 10]}
        />
        <Bar dataKey="High" stackId="a" fill="#e74c3c" />
        <Bar dataKey="Moderate" stackId="a" fill="#f39c12" />
        <Bar dataKey="Normal" stackId="a" fill="#f1c40f" />
        <Bar
          dataKey="Safe"
          stackId="a"
          fill="#bdc3c7"
          radius={[0, 10, 10, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RegisteryChart;