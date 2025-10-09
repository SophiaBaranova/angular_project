import { TechnologyItem } from '../core/models/technology-item.model';

export const TECHNOLOGY_ITEMS: TechnologyItem[] = [
  {
    name: 'HTML',
    description: 'Мова розмітки для структури веб-сторінок',
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
    description: 'Мова стилів для оформлення веб-сторінок',
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
    description: 'Мова програмування для клієнтських і серверних додатків',
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
    description: 'Фреймворк для створення SPA-додатків',
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
    description: 'Середовище виконання JavaScript на сервері',
    type: 'tool',
    side: 'server',
    author: 'Ryan Dahl',
    latestVersion: '22',
    officialSite: 'https://nodejs.org/',
    openSource: true,
    logo: 'logos/node-js.png'
  }
];
