
import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Mood Journal',
    description: 'A voice-based journal app that tracks emotions and provides sentiment analysis over time.',
    image: '/lovable-uploads/2fe4f3ae-62f8-41fa-a6b1-e9b940d6d025.png',
    demoUrl: 'https://mood-journal-demo.netlify.app/',
    tags: ['React', 'TypeScript', 'Web Speech API', 'Sentiment Analysis']
  },
  {
    id: '2',
    title: 'Meme Generator',
    description: 'An interactive meme creation tool with customizable text and image templates.',
    image: '/lovable-uploads/49dec4c2-1f36-4051-aecc-20c93194a51e.png',
    demoUrl: 'https://meme-it-generator.netlify.app/',
    tags: ['React', 'JavaScript', 'Canvas API', 'File Upload']
  },
  {
    id: '3',
    title: 'TaskFlow',
    description: 'A Kanban-style task management application with drag and drop functionality.',
    image: '/lovable-uploads/TaskFlowKanban.png',
    demoUrl: 'https://project-management-color-flow.netlify.app/',
    tags: ['React', 'TypeScript', 'DnD Kit', 'Local Storage']
  },
  {
    id: '5',
    title: 'Interactive Python Notebook',
    description: 'A web viewer for Jupyter notebooks with interactive code execution capabilities.',
    image: '/lovable-uploads/2e02ada0-8f9f-48c6-8e49-72490bfb83ef.png',
    demoUrl: 'https://interactive-python-notebook-loader.netlify.app/',
    tags: ['Python', 'JavaScript', 'Pyodide', 'Web Assembly']
  },

  {
    id: '4',
    title: 'Weather Dashboard',
    description: 'An interactive social media weather platform using weather API',
    image: '/lovable-uploads/WeatherDashboard.png',
    demoUrl: 'https://weather-dashboard-demo.netlify.app/',
    tags: ['React', 'JavaScript', 'Weather API', 'User Authentication']
  },

  {
    id: '6',
    title: 'Tic Tac Toe',
    description: 'An interactive Tic Tac Toe game with AI opponent using the minimax algorithm.',
    image: '/lovable-uploads/d19e5aea-2ed6-4da6-a315-95d6cfc1fe8b.png',
    demoUrl: 'https://ai-tic-tac-toe-demo.netlify.app/',
    tags: ['React', 'Game Development', 'AI', 'Minimax Algorithm']
  },
  {
    id: '7',
    title: 'Fitness Tracker',
    description: 'A fitness tracking application to monitor workouts, progress, and set goals.',
    image: '/placeholder.svg',
    demoUrl: 'https://example.com/fitness-tracker-demo',
    tags: ['React Native', 'TypeScript', 'Firebase']
  }
];
