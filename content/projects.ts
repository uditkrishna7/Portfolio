import { projectImages } from '@/config/assets';

export const projects = [
  {
    title: 'NeuroScan',
    description: 'A machine learning project focused on NLP and text-based analysis.',
    problem: 'Exploring how machine learning techniques could support smart text analysis and pattern recognition.',
    solution: 'Built an NLP-oriented solution using Python, TensorFlow, and Scikit-learn to experiment with classification and learning workflows.',
    techStack: ['Python', 'Machine Learning', 'NLP', 'TensorFlow', 'Scikit-learn'],
    architecture: 'A Python-based machine learning workflow with modeling, preprocessing, and experimentation.',
    challenges: 'Understanding model behavior and balancing experimentation with clarity in the implementation.',
    lessons: 'Machine learning projects require strong fundamentals, iteration, and disciplined experimentation.',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    imageSrc: projectImages.project1
  },
  {
    title: 'Shree Radha Krishna Enterprises',
    description: 'A web development project for a business website with a structured front-end experience.',
    problem: 'A business needed a clear and professional online presence with simple content organization.',
    solution: 'Developed a Django-based web application with SQL-backed data handling and a responsive interface using HTML, CSS, and Bootstrap.',
    techStack: ['Django', 'SQL', 'HTML', 'CSS', 'Bootstrap'],
    architecture: 'A Django application with structured pages and relational data support.',
    challenges: 'Designing a simple but polished experience while keeping the implementation maintainable.',
    lessons: 'Practical web development is often about clarity, reliability, and user experience.',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    imageSrc: projectImages.project2
  },
  {
    title: 'Beadz Store',
    description: 'An e-commerce-inspired web application built with ASP.NET and database-backed functionality.',
    problem: 'The project required a functional storefront experience with structured content and basic web interaction.',
    solution: 'Implemented a web application using ASP.NET, SQL, JavaScript, HTML, and CSS to support a store-style experience.',
    techStack: ['ASP.NET', 'SQL', 'JavaScript', 'HTML', 'CSS'],
    architecture: 'An ASP.NET web application with server-side logic and database integration.',
    challenges: 'Balancing functional requirements with a clean and intuitive interface.',
    lessons: 'A strong foundation in web architecture helps create reliable user-facing products.',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    imageSrc: projectImages.project3
  }
];
