"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import LanguageSelect from "../LanguageSelect";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState<number | null>(null);
  const [stickyMenu, setStickyMenu] = useState(false);

  const pathUrl = usePathname();

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  });

  return (
    <header
      className={`fixed left-0 top-0 z-99999 w-full transition-all duration-300 ${stickyMenu
        ? "backdrop-blur-md bg-white/80 dark:bg-black/80 shadow-lg border-b border-blue-100 dark:border-gray-800 py-3"
        : "bg-transparent py-7"
        }`}
    >
      <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
        <div className="flex w-full items-center justify-between xl:w-1/4">
          <Link href="/">
            <Image
              src="/images/logo-toho4.png"
              alt="logo"
              width={119.03}
              height={30}
              className="w-full dark:hidden"
            />
            <Image
              src="/images/logo-toho4.png"
              alt="logo"
              width={119.03}
              height={30}
              className="w-full dark:block hidden"
            />
          </Link>

          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-label="hamburger Toggler"
            className="block xl:hidden rounded-full p-2 transition hover:bg-blue-100 dark:hover:bg-gray-800"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <span className="relative block h-6 w-6 cursor-pointer">
              <span className="absolute right-0 block h-full w-full">
                <span
                  className={`absolute left-0 top-1 block h-0.5 w-full rounded bg-blue-900 dark:bg-white transition-all duration-300 ${navigationOpen ? "rotate-45 top-3" : ""}`}
                ></span>
                <span
                  className={`absolute left-0 top-3 block h-0.5 w-full rounded bg-blue-900 dark:bg-white transition-all duration-300 ${navigationOpen ? "opacity-0" : ""}`}
                ></span>
                <span
                  className={`absolute left-0 top-5 block h-0.5 w-full rounded bg-blue-900 dark:bg-white transition-all duration-300 ${navigationOpen ? "-rotate-45 top-3" : ""}`}
                ></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}
        </div>

        {/* Nav Menu Start   */}
        <div
          className={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full ${navigationOpen &&
            "navbar visible! mt-4 h-auto max-h-[400px] rounded-md bg-white/95 p-7.5 shadow-solid-5 dark:bg-blacksection xl:h-auto xl:p-0 xl:shadow-none xl:dark:bg-transparent"
            }`}
        >
          <nav>
            <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
              {menuData.map((menuItem, key) => (
                <li key={key} className={menuItem.submenu && "group relative"}>
                  {menuItem.submenu ? (
                    <>
                      <button
                        onClick={() => setDropdownToggler(dropdownToggler === key ? null : key)}
                        className="flex cursor-pointer items-center justify-between gap-2 font-semibold text-blue-900 dark:text-white relative group-hover:text-blue-600 transition-colors"
                      >
                        {menuItem.title}
                        <span>
                          <svg
                            className="h-3 w-3 cursor-pointer fill-waterloo group-hover:fill-blue-600 transition-colors"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                          </svg>
                        </span>
                        <span className="absolute left-0 -bottom-1 h-0.5 w-full scale-x-0 bg-blue-600 transition-transform duration-300 group-hover:scale-x-100" />
                      </button>

                      <ul
                        className={`dropdown absolute left-0 top-full z-50 mt-2 min-w-[180px] origin-top rounded-xl bg-white/95 p-3 shadow-lg ring-1 ring-blue-100 dark:bg-blacksection dark:ring-gray-800 transition-all duration-300 ${dropdownToggler === key ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
                      >
                        {menuItem.submenu.map((item, subKey) => (
                          <li key={subKey} className="hover:text-blue-600 transition-colors py-1.5 px-2 rounded-lg">
                            <Link href={item.path || "#"}>{item.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={`${menuItem.path}`}
                      className={`font-semibold relative transition-colors text-blue-900 dark:text-white hover:text-blue-600 ${pathUrl === menuItem.path
                        ? "text-blue-600 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-blue-600 after:rounded after:content-['']"
                        : ""
                        }`}
                    >
                      {menuItem.title}
                      <span className="absolute left-0 -bottom-1 h-0.5 w-full scale-x-0 bg-blue-600 transition-transform duration-300 group-hover:scale-x-100" />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-7 flex items-center gap-6 xl:mt-0">
            <ThemeToggler />
            <LanguageSelect />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
