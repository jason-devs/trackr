import { NavLink } from "react-router-dom";

function Landing() {
  return (
    <div className="flex h-[100svh] flex-col items-center justify-center gap-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="py-5 text-9xl">Trackr</h1>
        <span className="text-9xl">🏋️‍♀️</span>
      </div>
      <div className="flex flex-col items-center justify-center gap-1">
        <NavLink
          to="dashboard"
          className="rounded-sm border-2 px-4 py-1 text-xl font-black"
        >
          Sign Up
        </NavLink>
        <p>
          Or Log In <button className="underline">here.</button>
        </p>
      </div>
    </div>
  );
}

export default Landing;
