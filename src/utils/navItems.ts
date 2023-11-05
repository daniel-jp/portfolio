// navItems.ts

export const NAV_ITEMS = [
  {
    id:"home_id",
    name: "Home",
    path: "/",
  },
  {
    id:"about_id",
    name: "About",
    path: "/about",
  },
  {
    id:"service_id",
    name: "Services",
    path: "/service",
    children: [
      {
        name: "Frontend Services",
        subName: "Dev. Web App, User Interface (UI)",
        path: "/service/front-end",
      },
      {
        name: "Backend Services",
        subName: "Dev. RESTful APIs, Data Persistence",
        path: "/service/back-end",
      },

      {
        name: "Spring Security",
        subName: "Jwt. Authentication & Authorization",
        path: "#",
      },
     
    ],
  },
  {
    id:"portfolio_id",
    name: "Portfolio",
    path:"/portfolio",
   
  },
  {
    id:"skill_id",
    name: "Skills",
    path:"/skills",
  
  },

  {
    id:"blog_id",
    name: "Blog",
    path: "#",
  },

  {
    id:"contat_id",
    name: "Contact",
    path: "/contact",
  },
];
