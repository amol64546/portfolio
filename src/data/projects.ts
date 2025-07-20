export type Project = {
  title: string;
  description: string;
  image: string;
  dataAiHint: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export const projectsData: Project[] = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce website with a modern UI, product catalog, shopping cart, and checkout process integrated with Stripe.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'online shopping',
    tags: ['Next.js', 'React', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management tool with drag-and-drop boards, real-time updates, and user authentication.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'kanban board',
    tags: ['React', 'Firebase', 'Node.js', 'Chakra UI'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Personal Blog',
    description: 'A statically generated blog using Next.js and MDX for content. Features dark mode, search, and RSS feed.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'writing blog',
    tags: ['Next.js', 'MDX', 'TypeScript', 'Vercel'],
    liveUrl: '#',
    repoUrl: '#',
  },
    {
    title: 'Data Visualization Dashboard',
    description: 'An analytics dashboard that displays complex data sets through interactive charts and graphs using D3.js.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'charts graphs',
    tags: ['React', 'D3.js', 'API', 'Dashboard'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Social Media Aggregator',
    description: 'A platform that aggregates content from multiple social media APIs into a single, unified feed for easy browsing.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'social media',
    tags: ['Python', 'Django', 'React', 'REST API'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Recipe Finder App',
    description: 'A mobile-friendly web app that allows users to search for recipes based on available ingredients, using a third-party API.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'food cooking',
    tags: ['Vue.js', 'API', 'Mobile First'],
    liveUrl: '#',
    repoUrl: '#',
  },
];
