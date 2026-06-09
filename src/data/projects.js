export const projects = [
  {
    id: 1,
    title: 'SESI Manutenção Osasco',
    description:
      'Sistema web de gerenciamento de estoque desenvolvido para otimizar o controle de materiais da manutenção do SESI Osasco. A plataforma permite cadastrar materiais, registrar entradas e saídas, monitorar estoque disponível, gerenciar categorias e acompanhar movimentações de forma prática e eficiente.',
    technologies: ['React', 'JavaScript', 'Material UI', 'Tailwind CSS', 'Node.js', 'Supabase'],
    github: 'https://github.com/camposdevs/sesi-manutencao-osasco.git',
    demo: 'em desenvolvimento',
    image: null,
    featured: true,
    stars: 0,
    forks: 0,
    categories: ['fullstack', 'react', 'nodejs'],
    status: 'Em desenvolvimento',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
];

export const projectFilters = [
  { label: 'All', value: 'all' },
  { label: 'Full Stack', value: 'fullstack' },
  { label: 'React', value: 'react' },
  { label: 'Node.js', value: 'nodejs' },
  { label: 'Backend', value: 'backend' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Python', value: 'python' },
  { label: 'DevOps', value: 'devops' },
];
