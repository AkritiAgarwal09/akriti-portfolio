import { Bot, BrainCircuit, Layers3, TrendingUp } from 'lucide-react'

/** Build section system cards */
export const buildSystems = [
  {
    icon: Bot,
    title: 'Agentic AI',
    desc: 'LLM-powered agents, multi-agent orchestration, retrieval, and tool use for complex analytical workflows.',
    tags: ['Agents', 'RAG', 'Tool Use'],
  },
  {
    icon: Layers3,
    title: 'Machine Learning Systems',
    desc: 'End-to-end ML pipelines from experimentation and training through inference, monitoring, and production deployment.',
    tags: ['PyTorch', 'MLOps', 'Inference'],
  },
  {
    icon: TrendingUp,
    title: 'Quant & Financial Modeling',
    desc: 'Statistical learning and ML for risk, forecasting, and decision systems in high-stakes financial environments.',
    tags: ['Statistics', 'Time Series', 'Risk'],
  },
  {
    icon: BrainCircuit,
    title: 'NLP & Applied Research',
    desc: 'NLP and LLM systems for complex domains including clinical text, document intelligence, and research workflows.',
    tags: ['LLMs', 'Transformers', 'Research'],
  },
]
