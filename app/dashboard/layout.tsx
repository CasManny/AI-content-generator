import React from "react";
import SideBar from "./_components/SideBar";
import Header from "./_components/Header";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-slate-100 h-screen">
      <div className="md:w-64 hidden md:block fixed">
        <SideBar />
      </div>
      <div className="md:ml-64 ">
        <Header />

        {children}
      </div>
    </div>

  );
};

export default DashboardLayout;
