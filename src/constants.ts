import { Ritual } from './types';

export const RITUALS: Ritual[] = [
  {
    id: '1',
    title: 'The Indigo Flame Meditation',
    description: 'A powerful visualization technique to stimulate the pineal gland and activate the third eye chakra.',
    steps: [
      'Find a quiet, dark space and sit comfortably.',
      'Close your eyes and take three deep, cleansing breaths.',
      'Visualize a small, vibrant indigo flame flickering in the center of your forehead.',
      'Focus all your attention on this flame, feeling its warmth and gentle pressure.',
      'As you breathe in, the flame grows brighter; as you breathe out, it pulses with energy.',
      'Continue for 10-15 minutes, then slowly ground yourself.'
    ],
    duration: '15 min',
    category: 'Third Eye',
    intensity: 'Moderate'
  },
  {
    id: '2',
    title: 'Spirit Guide Invocation',
    description: 'A ritual to create a sacred space and invite your benevolent spirit guides to communicate.',
    steps: [
      'Light a white candle and some sandalwood incense.',
      'Sit in a circle of protection (visualized or physical).',
      'State clearly: \"I invite my highest, most benevolent spirit guides to join me in this sacred space.\"',
      'Keep your mind open and receptive to subtle thoughts, feelings, or images.',
      'Ask a specific question and wait in silence for at least 5 minutes.',
      'Thank your guides and extinguish the candle to close the ritual.'
    ],
    duration: '20 min',
    category: 'Spirit Guide',
    intensity: 'Powerful'
  },
  {
    id: '3',
    title: 'The Breath of Clarity',
    description: 'A simple pranayama technique to clear mental fog and prepare the mind for spiritual connection.',
    steps: [
      'Inhale deeply through your nose for a count of 4.',
      'Hold your breath for a count of 4, focusing on the space between your eyebrows.',
      'Exhale slowly through your mouth for a count of 8.',
      'Repeat this cycle 7 times.',
      'Notice the stillness that follows.'
    ],
    duration: '5 min',
    category: 'Meditation',
    intensity: 'Gentle'
  },
  {
    id: '4',
    title: 'Psychic Shielding Ritual',
    description: 'Essential protection before deep spiritual work to ensure only high-vibrational energies enter your space.',
    steps: [
      'Stand tall and visualize a sphere of golden light surrounding your entire body.',
      'Affirm: \"I am protected by divine light. Only that which is for my highest good may enter.\"',
      'Feel the boundary of this sphere becoming solid and impenetrable to lower frequencies.',
      'Carry this feeling of safety with you throughout your practice.'
    ],
    duration: '3 min',
    category: 'Protection',
    intensity: 'Powerful'
  }
];
