import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2.1,
    title: "Products",
    newTab: false,
    path: "/",
  },
  {
    id: 3,
    title: "Fa System",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Visualization",
        newTab: false,
        path: "/",
      },
      {
        id: 34,
        title: "Digitalization",
        newTab: false,
        path: "/",
      },
      {
        id: 35,
        title: "Process Improvement",
        newTab: false,
        path: "/",
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
        title: "Controll Panel",
        newTab: false,
        path: "/",
      },
      {
        id: 37,
        title: "Industrial M/C",
        newTab: false,
        path: "/",
      }
    ],
  },
  {
    id: 2.2,
    title: "Articles",
    newTab: false,
    path: "/articles",
  },

  {
    id: 2.3,
    title: "About",
    newTab: false,
    path: "/about",
  },
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
