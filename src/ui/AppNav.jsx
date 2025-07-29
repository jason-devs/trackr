import { NavLink } from "react-router-dom";

function AppNav() {
  return (
    <nav className="flex w-full items-center justify-between px-4 py-5">
      <NavLink to="/dashboard" className="text-2xl">
        🏠
      </NavLink>
      <NavLink to="/workout" className="text-2xl">
        🏋️‍♀️
      </NavLink>
      <NavLink to="/templates" className="text-2xl">
        📝
      </NavLink>
      <NavLink to="/profile" className="text-2xl">
        🙂
      </NavLink>
    </nav>
  );
}

export default AppNav;
