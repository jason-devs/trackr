import { Outlet } from "react-router-dom";
import PageTitle from "../ui/PageTitle";
import AppNav from "../ui/AppNav";

function AppLayout() {
  return (
    <div className="grid h-[100svh] w-full grid-cols-1 grid-rows-[auto_1fr_auto]">
      <header>
        <PageTitle />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <AppNav />
      </footer>
    </div>
  );
}

export default AppLayout;
