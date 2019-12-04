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
            url: '/Part3',
          },
          {
            name: 'Part 4: Talks',
            url: '/Part4',
          },
          {
            name: 'Part 5: Incomplete Sentences',
            url: '/Part5',
          },
          {
            name: 'Part 6: Text Completion',
            url: '/Part6',
          },
          {
            name: 'Part 7: Single Passages & Multiple Passages',
            url: '/Part7',
          },
        ]
      },
      {
        name: 'LET US TEST!!',
        url: '/Photo',
        icon: 'icon-book-open'
      },
      {
        name: 'Result',
        url: '/user-types',
        icon: 'icon-puzzle'
      },
      {
        name: 'Help',
        url: '/students',
        icon: 'icon-pin'
      },
    ]
  },
];
