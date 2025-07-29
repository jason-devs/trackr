function Dashboard() {
  const date = new Date().toLocaleDateString();

  return (
    <div className="flex h-full flex-col items-center gap-1">
      <p className="text-xl">Welcome back, Jason! Today is: {date}</p>
      <div className="flex h-[100px] w-full items-center justify-center rounded-sm border-2">
        THIS IS FOR GRAPHS
      </div>
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
