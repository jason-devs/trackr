import { useState } from "react";
import VolumeChart from "../features/VolumeChart";

function Dashboard() {
  const date = new Date().toLocaleDateString();
  const [curWorkout, setCurWorkout] = useState();

  return (
    <div className="flex h-full flex-col items-center gap-1 px-2">
      <p className="text-xl">Welcome back, Jason! Today is: {date}</p>
      <div className="flex w-full items-center justify-between">
        <h3 className="w-full text-left">Your Workout Volume</h3>
        <select
          value={curWorkout}
          onChange={e => setCurWorkout(e.target.value)}
        >
          <option>Pull 1</option>
          <option>Push 1</option>
          <option>Legs 1</option>
          <option>Pull 2</option>
          <option>Push 2</option>
          <option>Legs 2</option>
        </select>
      </div>
      <VolumeChart />
      <div className="flex h-[50px] w-full items-center justify-center rounded-sm border-2">
        THIS IS FOR OTHER GRAPHS
      </div>
      <div className="flex h-[30px] w-full items-center justify-center rounded-sm border-2">
        TIME SPENT IN GYM
      </div>
      <div className="flex h-[85px] w-full items-center justify-center rounded-sm border-2">
        DASHBOARDY STUFF
      </div>
    </div>
  );
}

export default Dashboard;
