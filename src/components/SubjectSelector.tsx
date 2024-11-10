import React from 'react';
import { subjects } from '../types/subjects';

interface SubjectSelectorProps {
  selectedSubject: string | null;
  onSelectSubject: (subjectId: string) => void;
}

export function SubjectSelector({ selectedSubject, onSelectSubject }: SubjectSelectorProps) {
  return (
    <div className="bg-white border-b border-gray-200 py-3 px-4 overflow-x-auto">
      <div className="flex gap-2 max-w-6xl mx-auto">
        {subjects.map((subject) => (
          <button
            key={subject.id}
            onClick={() => onSelectSubject(subject.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              selectedSubject === subject.id
                ? 'bg-blue-100 text-blue-700'
                : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
            }`}
          >
            <span>{subject.icon}</span>
            <span>{subject.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}