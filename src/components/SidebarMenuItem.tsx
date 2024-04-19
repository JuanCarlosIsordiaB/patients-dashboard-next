'use client'
import React from "react";
import { usePathname } from "next/navigation";

interface Props {
    menu: string;
    svg: JSX.Element;
    link: string;
}

export const SidebarMenuItem = ({ menu,svg,link}:Props) => {
    const pathName = usePathname();
  return (
    <a
      key={menu}
      href={link}
      className={` ${
        pathName === link ? 'bg-indigo-700 ': ""
      } w-full px-2 inline-flex space-x-2 items-center  py-3  hover:bg-white/5 transition ease-linear duration-50 rounded-md my-1`}
    >
      {svg}
      <span className="ms-3 py-3 text-indigo-100 font-bold">
        {menu}
      </span>
    </a>
  );
};

export default SidebarMenuItem;
