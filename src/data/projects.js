import {
  Activity,
  BarChart3,
  Bot,
  Gauge,
  GraduationCap,
  TrendingUp,
} from 'lucide-react'

/** Featured project cards */
export const projects = [
  {
    tag: 'AI AGENTS',
    title: 'Lumiq',
    subtitle: 'Multi-Agent AI Platform for Financial Analysis',
    desc: 'Six-agent orchestration layer for institutional-grade equity research—fundamental, market, risk, technical, CIO synthesis, and document parsing—routing natural-language queries through a 128-document RAG corpus with FAISS retrieval and cross-encoder reranking. Surfaces conviction-scored BUY/SELL/HOLD theses, structured financial memos, and multi-format ingestion (PDF, Excel, CSV) without the Bloomberg terminal tax.',
    stack: ['Python', 'RAG', 'FAISS', 'Cross-Encoder', 'Hugging Face', 'Multi-Agent'],
    icon: Bot,
    links: [
      {
        label: 'Live demo',
        href: 'https://huggingface.co/spaces/Shruti02222/ai-investment-analyst',
        primary: true,
      },
      { label: 'GitHub', href: 'https://github.com/Shruti022/Finance_chatbot' },
    ],
  },
  {
    tag: 'TIME SERIES',
    title: 'Vormir',
    subtitle: 'Electricity Load Forecasting',
    desc: 'Multi-horizon load forecasting over UCI ElectricityLoadDiagrams—370 clients, hourly resolution—deploying LSTM, TCN, Transformer, and PatchTST heads across KMeans-derived consumption clusters. Thirty-six cluster-specific models, 168-hour lookback, cyclical feature engineering; inference exposed through a Streamlit NL interface that resolves client IDs to the right model and returns forecasts in plain English.',
    stack: ['Python', 'PyTorch', 'LSTM', 'PatchTST', 'Streamlit', 'KMeans'],
    icon: Activity,
    links: [
      {
        label: 'Live demo',
        href: 'https://forecasting-electricity-vormir.streamlit.app/',
        primary: true,
      },
      { label: 'GitHub', href: 'https://github.com/p-H-7/forecasting-electricity' },
    ],
  },
  {
    tag: 'AI EDUCATION',
    title: 'Academic Copilot',
    subtitle: 'Read research papers like a professor explains them',
    desc: 'Multi-agent paper intelligence on FastAPI: Decomposer, Context Fetcher, Critic, and Tutor fan out via asyncio.gather, each emitting typed Pydantic artifacts for deterministic UI rendering and exportable study guides. Abstract-first PyMuPDF ingestion cuts token burn 60–70%; live Semantic Scholar tool-calling keeps related-work fresh. Groq or Ollama backend—PDF or arXiv in, professor-grade comprehension out in under sixty seconds.',
    stack: ['Next.js', 'FastAPI', 'Groq', 'Ollama', 'PyMuPDF', 'Pydantic'],
    icon: GraduationCap,
    links: [
      {
        label: 'Live demo',
        href: 'https://capstone-agentic-ai-frontend-177617146543.us-central1.run.app/',
        primary: true,
      },
      { label: 'GitHub', href: 'https://github.com/AkritiAgarwal09/capstone-agentic_ai/' },
    ],
  },
  {
    tag: 'QUANT FINANCE',
    title: 'AI-Powered Trading Engine',
    desc: 'Regime-aware quant stack fusing sequence forecasters, PPO-based policy selection, and hard portfolio risk gates—engineered for markets that punish naive alpha and reward disciplined execution.',
    stack: ['Python', 'PyTorch', 'PPO', 'Stable Baselines3'],
    icon: TrendingUp,
    links: [{ label: 'View project', href: 'https://github.com/AkritiAgarwal09' }],
  },
  {
    tag: 'SYSTEMS',
    title: 'Nanosecond-Resolution Latency Profiler',
    desc: 'Sub-microsecond observability via RDTSC/RDTSCP cycle counters, lock-free ring buffers, and tail-latency percentile histograms—isolates where your hot path actually lives, not where you think it does.',
    stack: ['C++', 'Linux', 'RDTSC', 'Lock-Free DS'],
    icon: Gauge,
    links: [{ label: 'View project', href: 'https://github.com/AkritiAgarwal09' }],
  },
  {
    tag: 'QUANT SYSTEMS',
    title: 'Modular Forecasting & Backtesting Engine',
    desc: 'Walk-forward evaluation harness with bootstrap confidence intervals, Diebold–Mariano significance testing, PCMCI+ causal drift monitors, and PPO position sizing—research-grade rigor without the notebook spaghetti.',
    stack: ['Python', 'Time Series', 'PCMCI+', 'PPO'],
    icon: BarChart3,
    links: [{ label: 'View project', href: 'https://github.com/AkritiAgarwal09' }],
  },
]
