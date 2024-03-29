import weatherappxImg from '../../public/weatherappx.png';
import innerairImg from '../../public/innerair.png';
import webtoonsxImg from '../../public/webtoonsx.jpg';
import eventoImg from '../../public/evento.png';

export const links = [
    {
        name: 'Home',
        hash: '#home',
    },
    {
        name: 'About',
        hash: '#about',
    },
    {
        name: 'Skills',
        hash: '#skills',
    },
    {
        name: 'Projects',
        hash: '#projects',
    },
    {
        name: 'Contact',
        hash: '#contact',
    },
] as const;

export const projectsData = [
    {
        title: 'Evento',
        description: 'Coming soon.',
        tags: ['React', 'TypeScript', 'Prisma', 'Next.js', 'Tailwind', 'PostgreSQL'],
        imageUrl: eventoImg,
    },
    {
        title: 'weatherappx',
        description: 'A real-time weather application that provides current weather conditions, 24-hour forecasts, and 10-day forecasts in advance.',
        tags: ['HTML5', 'SCSS', 'JavaScript', 'API'],
        imageUrl: weatherappxImg,
    },
    {
        title: 'webtoonsx',
        description: 'A web-based application where you can discover or share your own stories.',
        tags: ['HTML5', 'SCSS', 'Python', 'Django', 'PostgreSQL', 'JavaScript'],
        imageUrl: webtoonsxImg,
    },
    {
        title: 'Inner Air',
        description: 'A web-based application that aims to provide assistance with breathing exercises.',
        tags: ['Python', 'Flask', 'sqlite3', 'HTML5', 'SCSS', 'JavaScript'],
        imageUrl: innerairImg,
    },
] as const;

export const skillsData = [
    'Linux',
    'MySQL',
    'PostgreSQL',
    'Python',
    'Django',
    'Flask',
    'C',
    'C++',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'HTML5',
    'CSS',
    'SCSS',
    'Webpack',
    'npm',
    'Tailwind',
    'Circle CI',
    'Jest',
    'AWS',
    'Microsoft Azure',
    'Google Cloud',
    'OpenShift',
    'Git',
    'Framer Motion'
] as const;
