export interface Subject {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const subjects: Subject[] = [
  {
    id: 'literature',
    name: 'Literature',
    description: 'Explore literary works, analysis, and writing techniques',
    icon: '📚'
  },
  {
    id: 'mathematics',
    name: 'Mathematics',
    description: 'Learn mathematical concepts, formulas, and problem-solving',
    icon: '🔢'
  },
  {
    id: 'foreign-languages',
    name: 'Foreign Languages',
    description: 'Master new languages and communication skills',
    icon: '🌍'
  },
  {
    id: 'civic-education',
    name: 'Civic Education',
    description: 'Understand citizenship, rights, and responsibilities',
    icon: '⚖️'
  },
  {
    id: 'history-geography',
    name: 'History & Geography',
    description: 'Explore world history and geographical concepts',
    icon: '🌎'
  },
  {
    id: 'natural-sciences',
    name: 'Natural Sciences',
    description: 'Study biology, chemistry, and physics',
    icon: '🔬'
  },
  {
    id: 'technology',
    name: 'Technology',
    description: 'Learn about modern technology and engineering',
    icon: '💻'
  },
  {
    id: 'information-technology',
    name: 'Information Technology',
    description: 'Master computer science and programming',
    icon: '🖥️'
  },
  {
    id: 'physical-education',
    name: 'Physical Education',
    description: 'Focus on health, fitness, and sports',
    icon: '⚽'
  },
  {
    id: 'arts',
    name: 'Arts',
    description: 'Explore music, fine arts, and creative expression',
    icon: '🎨'
  },
  {
    id: 'career-guidance',
    name: 'Career Guidance',
    description: 'Plan your future career path and development',
    icon: '🎯'
  },
  {
    id: 'local-education',
    name: 'Local Educational Content',
    description: 'Learn about local culture and community',
    icon: '🏠'
  }
];