import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { getDailyInsight } from '../services/geminiService';

export const DailyInsight: React.FC = () => {
  const [insight, setInsight] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchInsight = async () => {
      try {
        const text = await getDailyInsight();
        setInsight(text || 'Look within, for the universe resides in the silence of your heart.');
      } catch (error) {
        setInsight('Look within, for the universe resides in the silence of your heart.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchInsight();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-8 text-center relative overflow-hidden group"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
      
      <Quote className="w-8 h-8 text-indigo-500/30 mx-auto mb-4" />
      
      {isLoading ? (
        <div className="space-y-2">
          <div className="h-4 bg-white/5 rounded w-3/4 mx-auto animate-pulse" />
          <div className="h-4 bg-white/5 rounded w-1/2 mx-auto animate-pulse" />
        </div>
      ) : (
        <p className="serif-text text-2xl md:text-3xl font-light leading-relaxed text-slate-200 italic">
          {insight}
        </p>
      )}
      
      <div className="mt-6 text-xs uppercase tracking-[0.3em] text-indigo-400 font-semibold">
        Daily Cosmic Insight
      </div>
    </motion.div>
  );
};
