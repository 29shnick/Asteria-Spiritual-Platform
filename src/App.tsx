import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Eye, BookOpen, MessageSquare, Moon, Sun } from 'lucide-react';
import { AICompanion } from './components/AICompanion';
import { RitualLibrary } from './components/RitualLibrary';
import { DailyInsight } from './components/DailyInsight';

export default function App() {
  const [activeTab, setActiveTab] = useState<'rituals' | 'oracle'>('rituals');

  return (
    <div className="min-h-screen relative">
      <div className="atmosphere" />
      
      {/* Header */}
      <header className="pt-12 pb-8 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="inline-block mb-4"
        >
          <div className="w-16 h-16 bg-indigo-600/20 rounded-full flex items-center justify-center border border-indigo-500/30 indigo-glow">
            <Eye className="w-8 h-8 text-indigo-400" />
          </div>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="serif-text text-5xl md:text-7xl font-bold tracking-tight mb-4"
        >
          Aetheria
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-slate-400 max-w-lg mx-auto text-lg font-light tracking-wide"
        >
          Unlock the gates of perception and commune with the unseen guides of the spirit realm.
        </motion.p>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-24 space-y-12">
        {/* Daily Insight Section */}
        <DailyInsight />

        {/* Navigation Tabs */}
        <div className="flex justify-center">
          <div className="glass-card p-1 flex gap-1">
            <button
              onClick={() => setActiveTab('rituals')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl transition-all ${
                activeTab === 'rituals' 
                  ? 'bg-indigo-600 text-white shadow-lg' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span className="text-sm font-medium">Ritual Library</span>
            </button>
            <button
              onClick={() => setActiveTab('oracle')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl transition-all ${
                activeTab === 'oracle' 
                  ? 'bg-indigo-600 text-white shadow-lg' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span className="text-sm font-medium">Aetheria Oracle</span>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="min-h-[600px]">
          {activeTab === 'rituals' ? (
            <motion.div
              key="rituals"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <div className="mb-8">
                <h2 className="serif-text text-3xl font-medium mb-2">Sacred Practices</h2>
                <p className="text-slate-500">Ancient rituals verified by generations of seekers.</p>
              </div>
              <RitualLibrary />
            </motion.div>
          ) : (
            <motion.div
              key="oracle"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="mb-8">
                <h2 className="serif-text text-3xl font-medium mb-2">Commune with Aetheria</h2>
                <p className="text-slate-500">Seek wisdom and guidance for your spiritual path.</p>
              </div>
              <AICompanion />
            </motion.div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-slate-600 text-sm">
        <p className="mb-2">© 2026 Aetheria Spiritual Arts</p>
        <div className="flex justify-center gap-4">
          <span className="flex items-center gap-1"><Moon className="w-3 h-3" /> Lunar Phase: Waxing Gibbous</span>
          <span className="flex items-center gap-1"><Sun className="w-3 h-3" /> Solar Alignment: Pisces</span>
        </div>
      </footer>
    </div>
  );
}

