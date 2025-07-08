import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2.3,
    title: "About TOHO",
    newTab: false,
    path: "/about",
  },
  {
    id: 2.1,
    title: "Products",
    newTab: false,
    path: "/products",
  },
  {
    id: 3,
    title: "FA System",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Visualization",
        newTab: false,
        path: "/visualization",
      },
      {
        id: 34,
        title: "Digitalization",
        newTab: false,
        path: "/digitalization",
      },
      {
        id: 35,
        title: "Process Improvement",
        newTab: false,
        path: "/process-improve",
      },
    ],
  },
  {
    id: 4,
    title: "Engineering",
    newTab: false,
    submenu: [
      {
        id: 36,
        title: "Control Panel",
        newTab: false,
        path: "/control-panel",
      },
      {
        id: 37,
        title: "Industrial M/C",
        newTab: false,
        path: "/industrial",
      }
    ],
  },
  {
    id: 2.2,
    title: "Articles",
    newTab: false,
    path: "/articles",
  },

  // {
  //   id: 2.2,
  //   title: "Careers",
  //   newTab: false,
  //   path: "/careers",
  // },
  {
    id: 2.4,
    title: "Contact",
    newTab: false,
    path: "/contact",
  },


  // {
  //   id: 4,
  //   title: "Support",
  //   newTab: false,
  //   path: "/support",
  // },
];

export default menuData;
