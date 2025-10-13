import { TechnologyItem } from '../core/models/technology-item.model';

export const TECHNOLOGY_ITEMS: TechnologyItem[] = [
  {
    name: 'HTML',
    description: 'A markup language for structuring web pages',
    type: 'markup',
    side: 'client',
    author: 'W3C / WHATWG',
    latestVersion: 'HTML5',
    officialSite: 'https://html.spec.whatwg.org/',
    openSource: true,
    logo: 'logos/html.png'
  },
  {
    name: 'CSS',
    description: 'A style language for designing web pages',
    type: 'style',
    side: 'client',
    author: 'W3C',
    latestVersion: 'CSS3',
    officialSite: 'https://www.w3.org/Style/CSS/',
    openSource: true,
    logo: 'logos/css.png'
  },
  {
    name: 'JavaScript',
    description: 'A programming language for client and server applications',
    type: 'language',
    side: 'both',
    author: 'Brendan Eich',
    latestVersion: 'ES2024',
    officialSite: 'https://ecma-international.org/',
    openSource: true,
    logo: 'logos/js.png'
  },
  {
    name: 'Angular',
    description: 'A framework for building SPA applications',
    type: 'framework',
    side: 'client',
    author: 'Google',
    latestVersion: '18',
    officialSite: 'https://angular.dev/',
    openSource: true,
    logo: 'logos/angular.png'
  },
  {
    name: 'Node.js',
    description: 'A JavaScript runtime environment on the server',
    type: 'tool',
    side: 'server',
    author: 'Ryan Dahl',
    latestVersion: '22',
    officialSite: 'https://nodejs.org/',
    openSource: true,
    logo: 'logos/node-js.png'
  }
];
