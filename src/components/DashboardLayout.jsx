import React from "react";
import TopNav from "./TopNav";
import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";
import "../styles/DashboardLayout.css";

export default function DashboardLayout({ children }) {
  return (
    <div className="dashboard-layout">
      <TopNav />

      <div className="dashboard-body">
        <aside className="sidebar-left">
          <SidebarLeft />
        </aside>

        <main className="dashboard-content">
          {children}
        </main>

        <aside className="sidebar-right">
          <SidebarRight />
        </aside>
      </div>
    </div>
  );
}
