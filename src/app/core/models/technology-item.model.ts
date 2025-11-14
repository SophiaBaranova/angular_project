export interface TechnologyItem {
  id: number;
  name: string;
  description: string;
  type: 'language' | 'markup' | 'style' | 'framework' | 'tool';
  side: 'client' | 'server' | 'both';
  author: string;
  lastUpdated: string;
  latestVersion: string;
  officialSite: string;
  openSource: boolean;
  logo: string;
}
