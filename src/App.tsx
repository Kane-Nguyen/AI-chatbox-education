import React, { useEffect, useRef, useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { SubjectSelector } from './components/SubjectSelector';
import { PromptSuggestions } from './components/PromptSuggestions';
import { SearchBar } from './components/SearchBar';
import { StudyGuide } from './components/StudyGuide';
import { FeedbackButton } from './components/FeedbackButton';
import { useChatStore } from './store/chatStore';
import { subjects } from './types/subjects';

function App() {
  const { messages, isLoading, error, addMessage, setLoading, setError } = useChatStore();
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Implement search functionality
  };

  const handleSendMessage = async (content: string) => {
    const subject = subjects.find((s) => s.id === selectedSubject);
    const contextPrompt = subject 
      ? `[Context: This question is about ${subject.name}] ${content}`
      : content;

    addMessage({ role: 'user', content });
    setLoading(true);
    setError(null);

    try {
      // Simulate API call - replace with actual OpenAI API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      addMessage({
        role: 'assistant',
        content: `I'm here to help you with ${subject?.name || 'your studies'}. What specific question do you have about ${content}?`,
      });
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const currentSubject = subjects.find(s => s.id === selectedSubject);

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-blue-500" />
              <h1 className="text-xl font-semibold">Educational AI Assistant</h1>
            </div>
          </div>
          <SearchBar onSearch={handleSearch} />
        </div>
      </header>

      <div className="flex-none">
        <SubjectSelector
          onSelectSubject={setSelectedSubject}
          selectedSubject={selectedSubject}
        />
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-6xl mx-auto p-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Study Materials Column */}
            <div className="lg:col-span-1">
              {currentSubject && <StudyGuide subject={currentSubject} />}
            </div>

            {/* Chat Column */}
            <div className="lg:col-span-2">
              {messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-64 text-gray-500 bg-white rounded-lg border border-gray-200 p-8">
                  <MessageSquare className="w-12 h-12 mb-4" />
                  <p className="text-lg">Select a subject and start learning!</p>
                  <p className="text-sm">Your conversation will appear here</p>
                </div>
              ) : (
                <div className="bg-white rounded-lg border border-gray-200">
                  {messages.map((message) => (
                    <ChatMessage key={message.id} message={message} />
                  ))}
                  {isLoading && (
                    <div className="p-4 text-gray-500">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                      </div>
                    </div>
                  )}
                  {error && (
                    <div className="p-4 text-red-500 bg-red-50 border-l-4 border-red-500">
                      {error}
                    </div>
                  )}
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>
        </div>
      </div>

      {selectedSubject && (
        <PromptSuggestions
          subjectId={selectedSubject}
          onSelectPrompt={handleSendMessage}
        />
      )}

      <ChatInput onSend={handleSendMessage} disabled={isLoading} />
      <FeedbackButton />
    </div>
  );
}

export default App;