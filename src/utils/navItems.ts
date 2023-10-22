// navItems.ts
interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    href: '/home',
  },
  {
    label: 'About',
    href: '/about',
  },
  {

    label: 'Services',
    href: '/service',
    children: [
      {
        label: 'Explore Design Work',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'New & Noteworthy',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
    ],
  },
  {
    label: 'Portfolio',
    href:'/portfolio',
    children: [
      {
        label: 'Job Board',
        subLabel: 'Find your dream design job',
        href: '#',
      },
      {
        label: 'Freelance Projects',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
    ],
  },
  {
    label: 'Skills',
    href:'/skills',
    children: [
      {
        label: 'Job Board',
        subLabel: 'Find your dream design job',
        href: '/job',
      },
      {
        label: 'Freelance Projects',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
    ],
  },

  {
    label: 'Blog',
    href: '#',
  },

  {
    label: 'Contact',
    href: '/contact',
  },
];
