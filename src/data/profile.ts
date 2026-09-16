export const profile = {
  name: 'Ángel Morales',
  tagline: 'ML/AI Engineer',
  subtitle: 'Robotics & AI MSc · ex-HORSE (Renault Group)',
  bio: 'Specialized in production ML systems and applied AI research. My recent focus spans anomaly detection, generative modeling, and graph neural networks, with an active interest in AI applied to structural biology and human-machine interaction.',
  location: 'Madrid, Spain',
  origin: 'Originally from Cádiz',
  availability: 'Open to relocation / remote roles · Actively applying to PhD positions in AI/ML across Europe and ML/research engineer roles',
  avatar: 'https://avatars.githubusercontent.com/u/171501463?v=4',
  links: {
    github: 'https://github.com/moralesangel',
    linkedin: 'https://linkedin.com/in/angelmoralesromero',
  },
} as const;

export const education = [
  {
    degree: 'MS in Robotics & Artificial Intelligence',
    school: 'Universidad de León',
    grade: '8.7/10 · Thesis 9.2/10 with honours',
    detail: 'Multimodal physiological signal processing for stress detection (EEG, ECG, electrodermal activity)',
  },
  {
    degree: 'BS in Computer Science',
    school: 'Universidad de Cádiz',
    grade: null,
    detail: 'Emergency vehicle detection in urban environments using Deep Learning',
  },
];

export const experience = [
  {
    role: 'Data & AI Engineer',
    company: 'HORSE (Renault Group)',
    location: 'Madrid, Spain',
    period: 'Dec 2025 – Jul 2026',
    summary:
      'Led development of ADQG (Autonomous Data Quality Guardian), a production ML anomaly detection pipeline on GCP/BigQuery.',
    highlights: [
      'Deployed Isolation Forest, HDBSCAN, Fuzzy K-Means, and autoencoder-based anomaly detection models',
      'Built a full ipywidgets configuration UI with dynamic BigQuery column selection and cost estimation',
      'Implemented SHAP explainability (beeswarm, waterfall, heatmap plots) for model interpretability',
      'Designed a Bronze/Silver/Gold medallion architecture with Dataform SQLX pipelines',
      'Migrated workloads from Cloud Run Jobs to Cloud Batch with Artifact Registry containerization',
      'Built Teams webhook alerting with Adaptive Cards; resolved GCP org policy violations for Vertex AI Workbench',
    ],
  },
];

export const research = [
  {
    title:
      'GNN-based protein–ligand binding pocket prediction',
    detail: 'PyTorch Geometric: graph construction, SASA feature engineering, focal loss tuning',
    icon: 'dna',
  },
  {
    title: 'MLOps pipeline with drift simulation',
    detail: 'NYC TLC Taxi data: Jenkins, Spark, MLflow, Evidently, cursor-replay drift simulation',
    icon: 'chart',
  },
  {
    title: 'Text-to-image diffusion model from scratch',
    detail: 'UNet-based DDPM/DDIM with EMA and classifier-free guidance, trained on Quick Draw data',
    icon: 'sparkle',
  },
  {
    title: 'CNN exploration & LangChain RAG demo',
    detail: 'TensorFlow/Keras convolutional experiments alongside a FAISS + sentence-transformers retrieval demo',
    icon: 'search',
  },
];

export const publication = {
  title:
    'Neural Audio Classification for Emergency Vehicle Detection with Feature Compression via Convolutional Autoencoders',
  venue: 'Peer-reviewed publication',
  url: 'https://www.researchgate.net/publication/397316148_Neural_Audio_Classification_for_Emergency_Vehicle_Detection_with_Feature_Compression_via_Convolutional_Autoencoders',
};

export const stack = [
  { group: 'Languages', items: ['Python', 'SQL', 'C++', 'JavaScript', 'MATLAB'] },
  {
    group: 'ML / Data',
    items: ['PyTorch', 'PyTorch Geometric', 'scikit-learn', 'Isolation Forest', 'HDBSCAN', 'SHAP', 'pandas', 'NumPy', 'PCA'],
  },
  {
    group: 'Cloud & Infrastructure',
    items: ['GCP', 'BigQuery', 'Vertex AI', 'Cloud Batch', 'Cloud Run', 'Docker', 'Cloud Storage'],
  },
  { group: 'MLOps', items: ['Jenkins', 'MLflow', 'Evidently', 'Spark', 'Dataform (SQLX)', 'Medallion architecture'] },
  { group: 'Other', items: ['ROS', 'React', 'LangChain', 'FAISS', 'Git'] },
];

export const interests = [
  'Deep Learning',
  'Graph Neural Networks',
  'Generative Models',
  'Anomaly Detection',
  'ML Explainability',
  'AI for Structural Biology',
  'Human-Machine Interaction',
];

export const languages = [
  { name: 'Spanish', level: 'Native' },
  { name: 'English', level: 'Professional working proficiency' },
];
