import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, Users, Shield, Wind, Clock, ChevronRight, X } from 'lucide-react';
import { RITUALS } from '../constants';
import { Ritual } from '../types';

export const RitualLibrary: React.FC = () => {
  const [selectedRitual, setSelectedRitual] = useState<Ritual | null>(null);

  const getIcon = (category: string) => {
    switch (category) {
      case 'Third Eye': return <Eye className="w-5 h-5" />;
      case 'Spirit Guide': return <Users className="w-5 h-5" />;
      case 'Protection': return <Shield className="w-5 h-5" />;
      default: return <Wind className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {RITUALS.map((ritual) => (
          <motion.div
            key={ritual.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedRitual(ritual)}
            className="glass-card p-6 cursor-pointer hover:border-indigo-500/30 transition-all group"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                {getIcon(ritual.category)}
              </div>
              <div className="flex items-center gap-1 text-xs text-slate-400">
                <Clock className="w-3 h-3" />
                {ritual.duration}
              </div>
            </div>
            <h3 className="serif-text text-xl font-medium mb-2">{ritual.title}</h3>
            <p className="text-sm text-slate-400 line-clamp-2">{ritual.description}</p>
            <div className="mt-4 flex items-center text-indigo-400 text-sm font-medium">
              Begin Ritual <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedRitual && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="glass-card w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 relative"
            >
              <button
                onClick={() => setSelectedRitual(null)}
                className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400">
                  {getIcon(selectedRitual.category)}
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">
                    {selectedRitual.category} • {selectedRitual.intensity}
                  </span>
                  <h2 className="serif-text text-3xl font-bold">{selectedRitual.title}</h2>
                </div>
              </div>

              <p className="text-lg text-slate-300 mb-8 italic serif-text">
                "{selectedRitual.description}"
              </p>

              <div className="space-y-6">
                <h4 className="text-sm uppercase tracking-widest text-slate-500 font-bold">The Practice</h4>
                <div className="space-y-4">
                  {selectedRitual.steps.map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="shrink-0 w-8 h-8 rounded-full border border-indigo-500/30 flex items-center justify-center text-indigo-400 text-sm font-bold">
                        {i + 1}
                      </div>
                      <p className="text-slate-300 leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-white/10 flex justify-between items-center">
                <div className="text-sm text-slate-500">
                  Estimated time: <span className="text-slate-300">{selectedRitual.duration}</span>
                </div>
                <button
                  onClick={() => setSelectedRitual(null)}
                  className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full transition-colors font-medium"
                >
                  I have completed this ritual
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
