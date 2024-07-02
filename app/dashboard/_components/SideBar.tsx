"use client";
import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideBar = () => {
  const path = usePathname();
  console.log(path);
  const menuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: WalletCards,
      path: "/dashboard/billing",
    },
    {
      name: "Setting",
      icon: Settings,
      path: "/dashboard/setting",
    },
  ];
  return (
    <div className="h-screen p-5 shadow-sm border">
      <div className="flex justify-center">
        <h1>AI-Con</h1>
      </div>
      <hr className=" my-6 border" />
      <div className="mt-3">
        {menuList.map((menu, index) => (
          <Link
            href={menu.path}
            className={`flex gap-3 mt-5 cursor-pointer p-3 hover:bg-primary hover:text-white rounded-md
                  ${path === menu.path && "bg-primary text-white"}
                  `}
            key={index}
          >
            <menu.icon className="h-7 w-7" />
            <h2 className="text-lg font-semibold">{menu.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
