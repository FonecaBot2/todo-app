import React from "react";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-zinc-900 text-white p-6 h-full w-full">
      <Outlet />
    </div>
  );
};

export default Layout;
