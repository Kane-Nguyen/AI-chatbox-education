import React from 'react';
import { Book, BookOpen, FileText, ListChecks } from 'lucide-react';
import { Subject } from '../types/subjects';

interface StudyGuideProps {
  subject: Subject;
}

export function StudyGuide({ subject }: StudyGuideProps) {
  const sections = [
    {
      icon: <Book className="w-5 h-5" />,
      title: 'Key Concepts',
      description: 'Core principles and fundamental ideas',
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: 'Study Materials',
      description: 'Comprehensive guides and resources',
    },
    {
      icon: <ListChecks className="w-5 h-5" />,
      title: 'Practice Problems',
      description: 'Interactive exercises and solutions',
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: 'Quick Reference',
      description: 'Essential formulas and summaries',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">{subject.name} Study Guide</h2>
        <p className="text-sm text-gray-600 mt-1">{subject.description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {sections.map((section) => (
          <button
            key={section.title}
            className="flex items-start gap-3 p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all"
          >
            <div className="flex-shrink-0 text-blue-500">{section.icon}</div>
            <div className="text-left">
              <h3 className="font-medium text-gray-900">{section.title}</h3>
              <p className="text-sm text-gray-600">{section.description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}