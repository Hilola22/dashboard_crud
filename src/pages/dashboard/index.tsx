import { memo } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";

const Dashboard = () => {
  return (
    <div className="flex bg-slate-100">
      <Sidebar />
      <main className="flex-1">
        <Header />
        <div className="p-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default memo(Dashboard);
