// import Section from './Section';

// const Publications: React.FC = () => (
//   <Section id="publications" title="Publications">
//     <ul className="list-none">
//       <li>
//         • <strong>Debajyoti Mazumder</strong>, Aakash Kumar, and Jasabanta Patro. 2025. Improving Code-Mixed Hate Detection
//         by Native Sample Mixing: A Case Study for Hindi-English Code-Mixed Scenario. ACM Trans. Asian Low-Resour. Lang.
//         Inf. Process. 24, 5, Article 47 (May 2025), 21 pages.{' '}
//         <a href="https://doi.org/10.1145/3726866" className="text-[var(--accent-color)] hover:underline">
//           https://doi.org/10.1145/3726866
//         </a>
//       </li>
//     </ul>
//   </Section>
// );

// export default Publications;



import { useState, useEffect } from 'react';

export default function Publications() {
  const [hoveredPub, setHoveredPub] = useState<number | null>(null);
  const [expandedPub, setExpandedPub] = useState(null);

  const publications = [
    {
      id: 1,
      title: "Mind the Links: Cross-Layer Attention for Link Prediction in Multiplex Networks",
      authors: ["Devesh Sharma", "Aditya Kishore", "Ayush Garg", "DEBAJYOTI MAZUMDER", "Debasis Mahapatra", "Jasabanta Patro"],
      journal: "https://wsdm-conference.org/2026/",
      year: "2026",
      volume: "N/A",
      issue: "N/A",
      article: "N/A",
      pages: "5",
      doi: "https://arxiv.org/abs/2509.23409",
      category: "NLP",
      keywords: ["Multiplex Networks", "Link Prediction", "Graph Neural Networks", "Cross-Layer Attention", "Network Embedding"],
      abstract: "Multiplex graphs capture diverse relations among shared nodes. Most predictors either collapse layers or treat them independently. This loses crucial inter-layer dependencies and struggles with scalability. To overcome this, we frame multiplex link prediction as multi-view edge classification. This paper introduces a novel cross-layer attention mechanism for link prediction in multiplex networks, demonstrating significant improvements over existing methods through extensive experiments on real-world datasets.For each node pair, we construct a sequence of per-layer edge views and apply cross-layer self-attention to fuse evidence for the target layer. We present two models as instances of this framework: Trans-SLE, a lightweight transformer over static embeddings, and Trans-GAT, which combines layer-specific GAT encoders with transformer fusion. To ensure scalability and fairness, we introduce a Union--Set candidate pool and two leakage-free protocols: cross-layer and inductive subgraph generalization. Experiments on six public multiplex datasets show consistent macro-F_1 gains over strong baselines (MELL, HOPLP-MUL, RMNE). Our approach is simple, scalable, and compatible with both precomputed embeddings and GNN encoders.",
      status: "Accepted"
    },
    {
      id: 2,
      title: "Improving Code-Mixed Hate Detection by Native Sample Mixing: A Case Study for Hindi-English Code-Mixed Scenario",
      authors: ["Debajyoti Mazumder", "Aakash Kumar", "Jasabanta Patro"],
      journal: "ACM Trans. Asian Low-Resour. Lang. Inf. Process.",
      year: "2025",
      volume: "24",
      issue: "5",
      article: "Article 47",
      pages: "21 pages",
      doi: "https://doi.org/10.1145/3726866",
      category: "NLP",
      keywords: ["Code-Mixed Text", "Hate Speech Detection", "Multilingual NLP", "Hindi-English", "Social Computing"],
      abstract: "This research addresses the challenging problem of hate speech detection in code-mixed scenarios, specifically focusing on Hindi-English mixed content commonly found in social media platforms.",
      status: "Published"
    },
    {
      id: 3,
      title: "Revealing the impact of synthetic native samples and multi‑tasking strategies in Hindi‑English code‑mixed humour and sarcasm detection",
      authors: ["Debajyoti Mazumder", "Aakash Kumar", "Jasabanta Patro"],
      journal: "EMNLP Findings‑2025",
      year: "2025",
      volume: "2025",
      issue: "N/A",
      article: "N/A",
      pages: "N/A",
      doi: "https://arxiv.org/abs/2412.12761",
      category: "NLP",
      keywords: ["Code-Mixed Text", "Humour Detection", "Sarcasm Detection", "Multilingual NLP", "Hindi-English"],
      abstract: "This study explores the effectiveness of synthetic native samples and multi-task learning strategies in enhancing humour and sarcasm detection in Hindi-English code-mixed text.",
      status: "Published"
    }
  ];


  return (
    <div className="min-h-screen relative overflow-hidden" id='publications'>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Creative Header */}
          <div className="mb-20">
            <div className="flex items-center gap-6 mb-6">
              <div className="text-8xl">📚</div>
              <div>
                <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400">
                  Publications
                </h1>
                <p className="text-xl text-gray-400 mt-2">Research contributions to the field</p>
              </div>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 rounded-full"></div>
          </div>

          {/* Publications Grid */}
          <div className="space-y-8">
            {publications.map((pub, index) => (
              <div
                key={pub.id}
                className="group relative"
                onMouseEnter={() => setHoveredPub(pub.id)}
                onMouseLeave={() => setHoveredPub(null)}
              >
                {/* Publication Card */}
                <div className="relative border border-blue-500/20 rounded-3xl p-8 hover:border-cyan-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-400/10 hover:transform hover:scale-[1.02] bg-white/5">

                  <div className="relative z-10">
                    {/* Header Row */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        {/* Publication Status & Impact */}
                        <div className="flex items-center gap-3 mb-4">
                          <span className="px-3 py-1 bg-green-500/20 text-green-300 border border-green-400/30 rounded-full text-sm font-medium">
                            ✅ {pub.status}
                          </span>
                          <span className="px-3 py-1 bg-blue-500/20 text-blue-300 border border-blue-400/30 rounded-full text-sm font-medium">
                            🏷️ {pub.category}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-cyan-200 transition-colors">
                          {pub.title}
                        </h3>

                        {/* Authors */}
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                          {pub.authors.map((author, authorIndex) => (
                            <span
                              key={authorIndex}
                              className={`px-3 py-1 rounded-full text-sm font-medium ${
                                author === "Debajyoti Mazumder"
                                  ? "bg-gradient-to-r from-cyan-500/30 to-blue-500/30 text-cyan-200 border border-cyan-400/40 font-bold"
                                  : "bg-gray-700/50 text-gray-300 border border-gray-600/50"
                              }`}
                            >
                              {author === "Debajyoti Mazumder" ? "👨‍🔬 " : "👤 "}{author}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Year Badge */}
                      <div className="flex-shrink-0 lg:ml-6">
                        <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                          {pub.year}
                        </div>
                      </div>
                    </div>

                    {/* Journal Info */}
                    <div className="rounded-2xl p-6 mb-6 border border-blue-500/20 bg-white/5">
                      <div className="flex flex-wrap items-center gap-4 text-gray-300">
                        <span className="flex items-center gap-2">
                          <span className="text-blue-400">📖</span>
                          <strong className="text-blue-200">{pub.journal}</strong>
                        </span>
                        <span className="flex items-center gap-2">
                          <span className="text-cyan-400">📊</span>
                          Vol. {pub.volume}, Issue {pub.issue}
                        </span>
                        <span className="flex items-center gap-2">
                          <span className="text-purple-400">📄</span>
                          {pub.pages}
                        </span>
                      </div>
                    </div>

                    {/* Abstract */}
                    {/* <div className="mb-6">
                      <h4 className="text-lg font-semibold text-blue-200 mb-3 flex items-center gap-2">
                        <span>🔍</span> Abstract
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        {pub.abstract}
                      </p>
                    </div> */}

                    {/* Keywords */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-blue-200 mb-3 flex items-center gap-2">
                        <span>🏷️</span> Keywords
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {pub.keywords.map((keyword, keyIndex) => (
                          <span
                            key={keyIndex}
                            className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-200 border border-purple-400/30 rounded-full text-sm hover:bg-purple-500/30 transition-colors"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <a
                        href={pub.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25"
                      >
                        <span>🔗</span> View Publication
                      </a>
                      
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  {hoveredPub === pub.id && (
                    <div className="absolute inset-0 rounded-3xl animate-pulse"></div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
