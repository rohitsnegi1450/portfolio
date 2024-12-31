"use client";

import React, { useState } from "react";
import { Icon } from "@iconify-icon/react";

export const Sidebar = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const handleNavLinkClick = () => {
    if (isSidebarVisible) {
      setSidebarVisible(false);
    }
  };
  return (
    <>
      {/* Toggle Button */}
      <button
        className="lg:hidden flex justify-center items-center text-2xl text-white bg-indigo-600 p-3 rounded-full fixed top-4 right-4 z-50"
        onClick={handleToggleSidebar}
      >
        {!isSidebarVisible ? (
          <Icon icon="material-symbols-light:close" width="24" height="24" />
        ) : (
          <Icon
            icon="material-symbols-light:menu-rounded"
            width="24"
            height="24"
          />
        )}
      </button>

      <header
        id="header"
        className={`header ${
          isSidebarVisible
            ? "hidden"
            : "fixed top-0 left-0 bottom-0 w-72 px-4 bg-black text-white z-40"
        } `}
      >
        {" "}
        {/* Profile Image */}
        <div className="mt-6 w-full flex justify-center">
          <img
            src="img/my-profile-img.jpg"
            alt="Profile"
            className="w-28 h-28 rounded-full border-8 border-gray-700"
          />
        </div>
        {/* Logo */}
        <a
          href="index.html"
          className="mt-2 text-center flex justify-center items-center text-2xl font-bold text-indigo-400 w-full"
        >
          Rohit Singh Negi
        </a>
        {/* Social Links */}
        <div className="mt-4 flex justify-center space-x-2">
          <a
            href="#"
            className="bg-gray-700 flex justify-center items-center w-10 h-10 p-2 rounded-full hover:bg-indigo-600"
          >
            <Icon icon="prime:twitter" width="20" height="20" />{" "}
          </a>
          <a
            href="#"
            className="bg-gray-700 flex justify-center items-center w-10 h-10 p-2 rounded-full hover:bg-indigo-600"
          >
            <Icon icon="ic:baseline-facebook" width="20" height="20" />
          </a>
          <a
            href="#"
            className="bg-gray-700 w-10 h-10 p-2 flex justify-center items-center rounded-full hover:bg-indigo-600"
          >
            <Icon icon="hugeicons:instagram" width="20" height="20" />
          </a>
          <a
            href="#"
            className="bg-gray-700 w-10 h-10 p-2 flex justify-center items-center rounded-full hover:bg-indigo-600"
          >
            <Icon icon="mdi:skype" width="20" height="20" />{" "}
          </a>
          <a
            href="#"
            className="bg-gray-700 w-10 h-10 p-2 flex justify-center items-center rounded-full hover:bg-indigo-600"
          >
            <Icon icon="mdi:linkedin" width="20" height="20" />{" "}
          </a>
        </div>
        {/* Navigation Menu */}
        <nav className="mt-8 w-full">
          <ul className="space-y-4 text-sm">
            <li>
              <a
                href="#hero"
                className="flex items-center text-base py-4 px-2.5 font-normal whitespace-nowrap text-gray-300 hover:text-indigo-400"
              >
                <Icon
                  icon="mdi-light:home"
                  width="24"
                  height="24"
                  className="mr-3"
                />{" "}
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="flex items-center text-base py-4 px-2.5 font-normal whitespace-nowrap text-gray-300 hover:text-indigo-400"
              >
                <Icon
                  icon="mdi:account"
                  width="24"
                  height="24"
                  className="mr-3"
                />{" "}
                About
              </a>
            </li>
            <li>
              <a
                href="#resume"
                className="flex items-center text-base py-4 px-2.5 font-normal whitespace-nowrap text-gray-300 hover:text-indigo-400"
              >
                <Icon
                  icon="mdi:file-outline"
                  width="24"
                  height="24"
                  className="mr-3"
                />{" "}
                Resume
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="flex items-center text-base py-4 px-2.5 font-normal whitespace-nowrap text-gray-300 hover:text-indigo-400"
              >
                <Icon
                  icon="lineicons:photos"
                  width="24"
                  height="24"
                  className="mr-3"
                />
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="flex items-center text-base py-4 px-2.5 font-normal whitespace-nowrap text-gray-300 hover:text-indigo-400"
              >
                <Icon
                  icon="bi:hdd-stack"
                  width="24"
                  height="24"
                  className="mr-3"
                />
                Services
              </a>
            </li>
            {/* Dropdown */}
            {/* <li className="relative group">
            <a
              href="#"
              className="flex items-center text-gray-300 hover:text-indigo-400"
            >
              <i className="bi bi-menu-button mr-3"></i> Dropdown
              <i className="bi bi-chevron-down ml-auto"></i>
            </a>
            <ul className="hidden group-hover:block absolute left-0 bg-gray-800 w-64 mt-2 rounded-md shadow-lg">
              <li className="px-4 py-2 hover:bg-gray-700">
                <a href="#">Dropdown 1</a>
              </li>
              <li className="relative group px-4 py-2 hover:bg-gray-700">
                <a href="#" className="flex justify-between">
                  Deep Dropdown
                  <i className="bi bi-chevron-right"></i>
                </a>
                <ul className="hidden group-hover:block absolute left-full top-0 bg-gray-800 w-64 rounded-md shadow-lg">
                  <li className="px-4 py-2 hover:bg-gray-700">
                    <a href="#">Deep Dropdown 1</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-700">
                    <a href="#">Deep Dropdown 2</a>
                  </li>
                </ul>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700">
                <a href="#">Dropdown 2</a>
              </li>
            </ul>
          </li> */}
            <li>
              <a
                href="#contact"
                className="flex items-center text-base py-4 px-2.5 font-normal whitespace-nowrap text-gray-300 hover:text-indigo-400"
              >
                <Icon
                  icon="ph:envelope"
                  width="24"
                  height="24"
                  className="mr-3"
                />{" "}
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
