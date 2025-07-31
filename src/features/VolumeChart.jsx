import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Pull 1", volume: 500, date: "21/07" },
  { name: "Push 1", volume: 600, date: "23/07" },
  { name: "Legs 1", volume: 200, date: "25/07" },
];

function VolumeChart() {
  return (
    <ResponsiveContainer height={"30%"}>
      <LineChart data={data} margin={{ top: 0, bottom: 0, left: 0, right: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis domain={[0, 1000]} />
        <Line dataKey="volume" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default VolumeChart;
