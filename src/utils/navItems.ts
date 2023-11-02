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
        name: "Explore Design Work",
        subName: "Trending Design to inspire you",
        path: "#",
      },
      {
        name: "New & Noteworthy",
        subName: "Up-and-coming Designers",
        path: "#",
      },
    ],
  },
  {
    id:"portfolio_id",
    name: "Portfolio",
    path:"/portfolio",
    children: [
      {
       
        name: "Job Board",
        subName: "Find your dream design job",
        path: "portfolio/job",
      },
      {
        
        name: "Freelance Projects",
        subName: "An exclusive list for contract work",
        path: "#",
      },
    ],
  },
  {
    id:"skill_id",
    name: "Skills",
    path:"/skills",
    children: [
      {
       
        name: "Job Board",
        subName: "Find your dream design job",
        path: "skills/job",
      },
      {
        
        name: "Freelance Projects",
        subName: "An exclusive list for contract work",
        path: "#",
      },
    ],
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
