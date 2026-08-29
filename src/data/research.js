/** Research experience cards */
export const research = [
  {
    tag: 'CLINICAL NLP',
    institution: 'Columbia University Irving Medical Center',
    institutionShort: 'CUIMC · Columbia Medical School',
    logo: '/logos/cuimc.svg',
    logoClass: 'cuimc',
    title: 'Clinical NLP for Psychiatric Risk Extraction',
    desc: 'Architected distributed transformer inference pipelines across 20M+ EHR records with parallelized tokenization, normalization and embeddings.',
    bullets: [
      'Scaled psychiatric risk extraction across large unstructured clinical datasets.',
      'Benchmarked architectures for latency, accuracy and scalability with statistical validation.',
    ],
    stack: ['PyTorch', 'TensorFlow', 'Clinical NLP'],
    visual: 'clinical',
  },
  {
    tag: 'AGENTIC AI',
    institution: 'Data Agents Process Lab',
    institutionShort: 'Columbia Data Science Institute',
    logo: '/logos/daplab.png',
    logoSecondary: '/logos/dsi.png',
    logoClass: 'daplab',
    title: 'Evaluating Agent-Based AI Systems',
    desc: 'Built evaluation frameworks for reasoning accuracy, latency and robustness of agentic systems under incomplete context and noisy inputs.',
    bullets: [
      'Designed benchmarks for structured analytical tasks.',
      'Implemented experimental pipelines for reliability under noisy and incomplete contexts.',
    ],
    stack: ['Python', 'Agents', 'Evaluation'],
    visual: 'agents',
  },
]
