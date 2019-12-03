interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard'
  },
  {
    name: 'Student',
    url: '/dashboard',
    children: [
      {
        name: 'Courses',
        url: '/subjects',
        icon: 'icon-layers',
        children: [
          {
            name: 'Part 1: Photographs',
            url: '/Part1',
          },
          {
            name: 'Part 2: Question-Response',
            url: '/Part2',
          },
          {
            name: 'Part 3: Conversations',
            url: '/subjects',
          },
          {
            name: 'Part 4: Talks',
            url: '/subjects',
          },
          {
            name: 'Part 5: Incomplete Sentences',
            url: '/subjects',
          },
          {
            name: 'Part 6: Text Completion',
            url: '/subjects',
          },
          {
            name: 'Part 7: Single Passages & Multiple Passages',
            url: '/subjects',
          },
        ]
      },
      {
        name: 'LET US TEST!!',
        url: '/classes',
        icon: 'icon-book-open'
      },
      {
        name: 'Result',
        url: '/user-types',
        icon: 'icon-puzzle'
      },
      {
        name: 'History',
        url: '/users',
        icon: 'icon-notebook'
      },
      {
        name: 'Help',
        url: '/students',
        icon: 'icon-pin'
      },
      {
        name: 'PART1',
        url: '/Photo',
        icon: 'icon-pin'
      },
    ]
  },
];
