export const projects = [
  {
    id: 1,
    title: 'Manutenção SESI',
    description:
      'Sistema web de gerenciamento de estoque desenvolvido para otimizar o controle de materiais e equipamentos. A plataforma permite cadastrar produtos, registrar entradas e saídas, monitorar quantidades disponíveis e gerenciar informações do inventário de forma prática e eficiente.',
    technologies: ['React', 'TypeScript', 'Node.js'],
    github: 'https://github.com/seu-usuario/project-alpha',
    demo: 'https://project-alpha-demo.vercel.app',
    image: null,
    featured: true,
    stars: 128,
    forks: 24,
    categories: ['fullstack', 'react', 'nodejs'],
    status: 'Em desenvolvimento',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    id: 2,
    title: 'Finance Campos — Dashboard Financeiro',
    description:
      'Plataforma moderna de controle financeiro pessoal com design dark mode. Permite gerenciar receitas, despesas e acompanhar métricas em tempo real com gráficos dinâmicos e segurança de dados isolada por usuário.',
    technologies: ['React', 'Material UI (MUI)', 'Supabase', 'PostgreSQL'],
    github: 'https://github.com/camposdevs/finance-dashboard',
    demo: 'https://finance-dashboard-eta-lake.vercel.app/',
    image: null,
    featured: true,
    stars: 128,
    forks: 24,
    categories: ['frontend', 'react'],
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
