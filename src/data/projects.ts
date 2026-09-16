export interface Project {
  name: string;
  title: string;
  description: string;
  language: string | null;
  topics: string[];
  url: string;
  updated: string;
}

/** Human-readable titles and descriptions for repos where GitHub metadata is thin. */
const overrides: Record<string, { title?: string; description?: string; topics?: string[] }> = {
  'emergency-vehicle-detection': {
    title: 'Emergency Vehicle Detection',
  },
  'BPE-tokenizer': {
    title: 'BPE Tokenizer',
  },
  'text-to-image': {
    title: 'Text-to-Image Diffusion',
    description:
      'A UNet-based DDPM/DDIM diffusion model built from scratch, with EMA and classifier-free guidance, trained on Quick Draw sketches.',
    topics: ['diffusion', 'ddpm', 'ddim', 'generative-ai', 'pytorch', 'unet'],
  },
  'rag-system': {
    title: 'RAG System',
    description:
      'A retrieval-augmented generation demo built with LangChain, using FAISS vector search over sentence-transformer embeddings.',
    topics: ['rag', 'langchain', 'faiss', 'llm', 'embeddings'],
  },
  'coins-detection': {
    title: 'Coin Detection',
  },
  'lettersnumbers-classifier': {
    title: 'Chess Notation Classifier',
  },
  'fire-detection': {
    title: 'Forest Fire Segmentation',
  },
  'slime-mold-simulation': {
    title: 'Slime Mold Simulation',
  },
  'matrix-green-letters': {
    title: 'Matrix Rain',
    description:
      'A small creative-coding piece rendering the falling green glyph effect in the browser with plain JavaScript and canvas.',
    topics: ['creative-coding', 'canvas', 'javascript'],
  },
  CICD: {
    title: 'CI/CD Playground',
    description: 'A sandbox for continuous integration and deployment workflows around Python projects.',
    topics: ['ci-cd', 'python', 'automation'],
  },
};

/** Repos excluded from the portfolio grid: the profile README repo and forks. */
const excluded = new Set(['moralesangel', 'MQCOM-software']);

/** Order the most representative work first; anything unlisted follows, newest first. */
const featuredOrder = [
  'text-to-image',
  'emergency-vehicle-detection',
  'BPE-tokenizer',
  'rag-system',
  'fire-detection',
  'lettersnumbers-classifier',
  'coins-detection',
  'slime-mold-simulation',
];

function titleize(name: string): string {
  return name
    .split(/[-_]/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

interface GitHubRepo {
  name: string;
  description: string | null;
  language: string | null;
  topics?: string[];
  html_url: string;
  updated_at: string;
  fork: boolean;
}

function normalize(repo: GitHubRepo): Project {
  const o = overrides[repo.name] ?? {};
  return {
    name: repo.name,
    title: o.title ?? titleize(repo.name),
    description: o.description ?? repo.description ?? '',
    language: repo.language,
    topics: (repo.topics?.length ? repo.topics : o.topics) ?? [],
    url: repo.html_url,
    updated: repo.updated_at,
  };
}

/** Used when the GitHub API is unreachable at build time. */
const fallback: GitHubRepo[] = [
  {
    name: 'text-to-image',
    description: null,
    language: 'Jupyter Notebook',
    topics: [],
    html_url: 'https://github.com/moralesangel/text-to-image',
    updated_at: '2026-08-18T19:03:30Z',
    fork: false,
  },
  {
    name: 'emergency-vehicle-detection',
    description:
      'A compact pipeline for detecting emergency vehicles from audio using deep learning. Includes data download and preprocessing, MFCC/LFCC/Chroma feature extraction, model training (autoencoders for dimensionality reduction and FFNN/CNN/LSTM classifiers) and performance evaluation.',
    language: 'Jupyter Notebook',
    topics: ['deep-learning', 'audio-classification', 'autoencoders', 'siren-detection', 'smart-city', 'feature-extraction'],
    html_url: 'https://github.com/moralesangel/emergency-vehicle-detection',
    updated_at: '2025-11-23T22:43:18Z',
    fork: false,
  },
  {
    name: 'BPE-tokenizer',
    description:
      'A clean, educational implementation of the Byte Pair Encoding algorithm used in modern language models like GPT.',
    language: 'Jupyter Notebook',
    topics: ['bpe', 'tokenization', 'llm', 'nlp', 'transformers', 'generative-ai'],
    html_url: 'https://github.com/moralesangel/BPE-tokenizer',
    updated_at: '2025-11-23T22:07:31Z',
    fork: false,
  },
  {
    name: 'rag-system',
    description: null,
    language: 'Python',
    topics: [],
    html_url: 'https://github.com/moralesangel/rag-system',
    updated_at: '2026-06-07T17:52:52Z',
    fork: false,
  },
  {
    name: 'fire-detection',
    description:
      'This project will try to segment forest images taken by a drone, classifying each pixel by either forest or fire (segmentation technique)',
    language: 'MATLAB',
    topics: ['cnn', 'deep-learning', 'drone', 'fire-detection', 'segmentation'],
    html_url: 'https://github.com/moralesangel/fire-detection',
    updated_at: '2024-06-03T01:16:34Z',
    fork: false,
  },
  {
    name: 'lettersnumbers-classifier',
    description: 'Letters and numbers classifier for chess games using computer vision and neural networks.',
    language: 'MATLAB',
    topics: ['chess', 'computer-vision', 'neural-networks', 'real-time', 'webcam', 'feature-extraction'],
    html_url: 'https://github.com/moralesangel/lettersnumbers-classifier',
    updated_at: '2024-06-04T10:41:54Z',
    fork: false,
  },
  {
    name: 'coins-detection',
    description: 'This project will try to detect every type of coin within an image using Computer Vision techniques.',
    language: 'MATLAB',
    topics: ['computer-vision', 'classification', 'matlab', 'regionprops'],
    html_url: 'https://github.com/moralesangel/coins-detection',
    updated_at: '2025-11-23T21:37:41Z',
    fork: false,
  },
  {
    name: 'slime-mold-simulation',
    description:
      'A simulation of slime mold behavior using p5.js, inspired by the movement and pattern formation of real slime molds. Particles leave visual traces as they explore, forming organic paths.',
    language: 'JavaScript',
    topics: ['biology', 'creative-coding', 'simulation', 'javascript'],
    html_url: 'https://github.com/moralesangel/slime-mold-simulation',
    updated_at: '2024-09-30T00:31:35Z',
    fork: false,
  },
  {
    name: 'matrix-green-letters',
    description: null,
    language: 'JavaScript',
    topics: [],
    html_url: 'https://github.com/moralesangel/matrix-green-letters',
    updated_at: '2026-08-27T16:14:38Z',
    fork: false,
  },
];

export async function getProjects(): Promise<Project[]> {
  let repos: GitHubRepo[] = fallback;

  try {
    const headers: Record<string, string> = {
      Accept: 'application/vnd.github+json',
      'User-Agent': 'moralesangel-portfolio',
    };

    // In CI, authenticate to avoid the low unauthenticated rate limit.
    const token = process.env.GITHUB_TOKEN;
    if (token) headers.Authorization = `Bearer ${token}`;

    const res = await fetch('https://api.github.com/users/moralesangel/repos?per_page=100&sort=updated', {
      headers,
    });
    if (res.ok) {
      const live = (await res.json()) as GitHubRepo[];
      if (Array.isArray(live) && live.length) repos = live;
    }
  } catch {
    // Offline build: keep the curated fallback.
  }

  const projects = repos.filter((r) => !r.fork && !excluded.has(r.name)).map(normalize);

  return projects.sort((a, b) => {
    const ia = featuredOrder.indexOf(a.name);
    const ib = featuredOrder.indexOf(b.name);
    if (ia !== -1 && ib !== -1) return ia - ib;
    if (ia !== -1) return -1;
    if (ib !== -1) return 1;
    return b.updated.localeCompare(a.updated);
  });
}
