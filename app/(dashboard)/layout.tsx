import { LayoutDashboard } from "lucide-react";
import React from "react";

const sidebarItems = [
  { label: "Dashboard", icon: <LayoutDashboard /> },
  // You can add more items here later
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-neutral-800 text-white flex flex-col sticky top-0 h-screen">
        <div className="p-4 border-b border-neutral-700">
          <h1 className="text-xl font-bold">ApplyList</h1>
        </div>
        <nav className="flex-1 overflow-y-auto">
          <ul className="flex flex-col gap-2 mt-6 px-4">
            {sidebarItems.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-neutral-700 cursor-pointer transition"
              >
                {item.icon}
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <header className="sticky top-0 bg-white shadow-sm p-4 z-10">
          <h2 className="font-medium text-xl">Welcome Back 👋</h2>
        </header>
        <main className="flex-1 h-[10000px] overflow-y-auto p-6 bg-neutral-50">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
