import React from 'react';
import { subjects } from '../types/subjects';

interface PromptSuggestionsProps {
  subjectId: string;
  onSelectPrompt: (prompt: string) => void;
}

export function PromptSuggestions({ subjectId, onSelectPrompt }: PromptSuggestionsProps) {
  const subject = subjects.find(s => s.id === subjectId);
  if (!subject) return null;

  const suggestions = [
    `Can you explain the key concepts in ${subject.name}?`,
    `What are some common problems students face in ${subject.name}?`,
    `How can I improve my understanding of ${subject.name}?`,
    `What are the best study techniques for ${subject.name}?`
  ];

  return (
    <div className="bg-white border-t border-gray-200 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => onSelectPrompt(suggestion)}
              className="px-4 py-2 bg-gray-50 text-gray-700 rounded-full text-sm whitespace-nowrap hover:bg-gray-100"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}