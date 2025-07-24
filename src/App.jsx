import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Workout from "./pages/Workout";
import AppLayout from "./pages/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="*" element={<AppLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="workout" element={<Workout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
