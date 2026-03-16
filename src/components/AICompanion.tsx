import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Sparkles, User, Bot } from 'lucide-react';
import { Message } from '../types';
import { getSpiritualGuidance } from '../services/geminiService';

export const AICompanion: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Greetings, seeker. I am Aetheria. How may I assist you on your journey toward the inner light today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await getSpiritualGuidance([...messages, userMsg]);
      setMessages(prev => [...prev, { role: 'model', text: response || 'The cosmic energies are silent for a moment. Please try again.' }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: 'A shadow has crossed our connection. Please try again in a moment.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[600px] glass-card overflow-hidden">
      <div className="p-4 border-b border-white/10 flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-indigo-400" />
        <h2 className="serif-text text-xl font-medium">Aetheria Oracle</h2>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4">
        <AnimatePresence initial={false}>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex gap-3 max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-indigo-600' : 'bg-white/10'}`}>
                  {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4 text-indigo-300" />}
                </div>
                <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-indigo-600/20 border border-indigo-500/30' 
                    : 'bg-white/5 border border-white/10'
                }`}>
                  {msg.text}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {isLoading && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" />
                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <div className="p-4 border-t border-white/10 bg-white/5">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about rituals, guides, or the third eye..."
            className="w-full bg-black/20 border border-white/10 rounded-full py-3 pl-6 pr-12 focus:outline-none focus:border-indigo-500/50 transition-colors text-sm"
          />
          <button
            onClick={handleSend}
            disabled={isLoading}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-indigo-400 hover:text-indigo-300 transition-colors disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
