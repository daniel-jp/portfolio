
// navItems.ts
interface NavItem {
  id:string,
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    id:"1",
    label: 'Home',
    href: '/home',
  },
  {
    id:"2",
    label: 'About',
    href: '/about',
  },
  {
    id:"3",
    label: 'Services',
    href: '/service',
    children: [
      {
        id:"1",
        label: 'Explore Design Work',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        id:"2",
        label: 'New & Noteworthy',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
    ],
  },
  {
    id:"4",
    label: 'Portfolio',
    href:'/portfolio',
    children: [
      {
        id:"1",
        label: 'Job Board',
        subLabel: 'Find your dream design job',
        href: '#',
      },
      {
        id:"2",
        label: 'Freelance Projects',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
    ],
  },
  {
    id:"5",
    label: 'Skills',
    href:'/skills',
    children: [
      {
        id:"1",
        label: 'Job Board',
        subLabel: 'Find your dream design job',
        href: '/job',
      },
      {
        id:"2",
        label: 'Freelance Projects',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
    ],
  },

  {
    id:"6",
    label: 'Blog',
    href: '#',
  },

  {
    id:"7",
    label: 'Contact',
    href: '/contact',
  },
];
