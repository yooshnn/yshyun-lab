type Sitemap = {
  category: string;
  sections: string[];
}[];

export const sitemap: Sitemap = [
  { category: 'people', sections: ['professor', 'members', 'alumni'] },
  { category: 'research', sections: ['research', 'publication'] },
  { category: 'project', sections: ['project'] },
  { category: 'lecture', sections: ['lecture'] },
  { category: 'board', sections: ['news', 'album'] },
  { category: 'contact', sections: ['contact'] },
];
