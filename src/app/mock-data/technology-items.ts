import { TechnologyItem } from '../core/models/technology-item.model';

export const TECHNOLOGY_ITEMS: TechnologyItem[] = [
  {
    id: '1',
    name: 'HTML',
    description: 'A markup language for structuring web pages',
    type: 'markup',
    side: 'client',
    author: 'W3C / WHATWG',
    lastUpdated: '2025-05-02',
    latestVersion: 'HTML5',
    officialSite: 'https://html.spec.whatwg.org/',
    openSource: true,
    logo: 'logos/html.png'
  },
  {
    id: '2',
    name: 'CSS',
    description: 'A style language for designing web pages',
    type: 'style',
    side: 'client',
    author: 'W3C',
    lastUpdated: '2025-06-18',
    latestVersion: 'CSS3',
    officialSite: 'https://www.w3.org/Style/CSS/',
    openSource: true,
    logo: 'logos/css.png'
  },
  {
    id: '3',
    name: 'JavaScript',
    description: 'A programming language for client and server applications',
    type: 'language',
    side: 'both',
    author: 'Brendan Eich',
    lastUpdated: '2024-12-12',
    latestVersion: 'ES2024',
    officialSite: 'https://ecma-international.org/',
    openSource: true,
    logo: 'logos/js.png'
  },
  {
    id: '4',
    name: 'Angular',
    description: 'A framework for building SPA applications',
    type: 'framework',
    side: 'client',
    author: 'Google',
    lastUpdated: '2025-09-25',
    latestVersion: '18',
    officialSite: 'https://angular.dev/',
    openSource: true,
    logo: 'logos/angular.png'
  },
  {
    id: '5',
    name: 'Node.js',
    description: 'A JavaScript runtime environment on the server',
    type: 'tool',
    side: 'server',
    author: 'Ryan Dahl',
    lastUpdated: '2025-04-17',
    latestVersion: '22',
    officialSite: 'https://nodejs.org/',
    openSource: true,
    logo: 'logos/node-js.png'
  }
];
