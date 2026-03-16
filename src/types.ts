export interface Ritual {
  id: string;
  title: string;
  description: string;
  steps: string[];
  duration: string;
  category: 'Third Eye' | 'Spirit Guide' | 'Meditation' | 'Protection';
  intensity: 'Gentle' | 'Moderate' | 'Powerful';
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
