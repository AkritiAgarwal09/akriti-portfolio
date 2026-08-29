import { Bot, BrainCircuit, Database, Rocket, TrendingUp } from 'lucide-react'

/** Skills grouped by category — [name, icon, items] */
export const skillGroups = [
  [
    'AI / ML',
    BrainCircuit,
    ['PyTorch', 'TensorFlow', 'XGBoost', 'CatBoost', 'Transformers', 'NLP', 'Vision ML', 'LLMs'],
  ],
  [
    'AI Systems',
    Bot,
    ['Agentic Workflows', 'RAG', 'Tool Calling', 'Orchestration', 'Evaluation', 'Multi-Agent'],
  ],
  ['Data', Database, ['Python', 'SQL', 'PostgreSQL', 'MongoDB', 'KDB+', 'Spark', 'Pandas', 'NumPy']],
  [
    'Infrastructure',
    Rocket,
    ['AWS', 'GCP', 'Docker', 'Kubernetes', 'REST APIs', 'Linux', 'Git', 'Jenkins'],
  ],
  [
    'Modeling',
    TrendingUp,
    ['Statistics', 'Deep Learning', 'Time Series', 'Quant Finance', 'MLOps', 'Inference'],
  ],
]
