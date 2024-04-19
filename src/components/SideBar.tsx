"use client";
import React, { useState } from "react";

const menuOptions = [
  {
    menu: "Add Patient",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6 text-indigo-100 font-bold"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ),
    link: "/create",
  },
  {
    menu: "Patients",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-6 h-6 text-indigo-100 font-bol"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>
    ),
    link: "/list",
  },
];
<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke="currentColor"
  className="w-6 h-6"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
  />
</svg>;

export const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={toggleSidebar}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-indigo-500 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <p className="my-9 p-3 font-bold text-white text-2xl">
              Patients <span className="block text-indigo-900">Administrator</span>
            </p>
            <li className="mt-9">
              {menuOptions.map((menuOption, index) => (
                <a
                  key={index}
                  href={menuOption.link}
                  className="flex my-2 hover:bg-indigo-700 items-center p-2 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group"
                >
                  {menuOption.svg}
                  <span className="ms-3 py-3 text-indigo-100 font-bold">{menuOption.menu}</span>
                </a>
              ))}
            </li>
          </ul>
        </div>
      </aside>

      <div
        className={`fixed top-0 left-0 z-30 w-full h-full bg-gray-50 bg-opacity-70 dark:bg-gray-800 dark:bg-opacity-70 transition-opacity ${
          isSidebarOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } sm:opacity-0 sm:pointer-events-none`}
        onClick={closeSidebar}
      ></div>
    </>
  );
};

export default SideBar;
