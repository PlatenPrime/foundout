import { Outlet } from "react-router";
import Navbar from "./components/Navbar/Navbar";

export function App() {
  return (
    <div className="container mx-auto ">
      <Navbar />
      <Outlet />
    </div>
  );
}
