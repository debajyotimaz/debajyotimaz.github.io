// import Section from './Section';

// const News: React.FC = () => (
//   <Section id="news" title="News">
//     <ul className="list-none">
//       {[
//         'May 2025: Awarded professional membership by the Association for Computing Machinery (ACM).',
//         'Mar 2025: Manuscript titled "Improving code-mixed hate detection by native sample mixing: A case study for Hindi-English code-mixed scenario" accepted for publication in Transactions on Asian and Low-Resource Language Information Processing (TALLIP)-2025.',
//         'Mar 2025: Selected for LiveRAG Challenge track, SIGIR 2025.',
//       ].map((item, idx) => (
//         <li key={idx} className="flex items-center gap-2 mb-2">
//           • {item}
//         </li>
//       ))}
//     </ul>
//   </Section>
// );

// export default News;
import { useState, useEffect } from 'react';

export default function News() {
  const [visibleNews, setVisibleNews] = useState(new Set());

  useEffect(() => {
    // Animate news items appearing
    const timer = setTimeout(() => {
      newsData.forEach((_, index) => {
        setTimeout(() => {
          setVisibleNews(prev => new Set([...prev, index]));
        }, index * 300);
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const newsData = [
    {
      id: 1,
      date: "Dec 2025",
      title: "Invitation to present paper at ARCS 2026",
      description: "Invitation from ACM India ARCS 2026 organizing committee to present paper \"Revealing the impact of synthetic native samples and multi-tasking strategies in Hindi-English code-mixed humour and sarcasm detection\" from EMNLP 2025 at ARCS 2026.",
      type: "invitation",
      icon: "✉️",
      color: "from-purple-400 to-pink-500",
      bgColor: "from-purple-900/40 to-pink-900/30",
      borderColor: "border-purple-500/30",
      importance: "medium"
    },
    {
      id: 2,
      date: "Dec 2025",
      title: "Paper got accepted as a short paper in WSDM 2026",
      description: " Happy to share that our paper \"Mind the Links: Cross-Layer Attention for Link Prediction in Multiplex Networks\" got accepted as a short paper in WSDM 2026. ACM WSDM is one of the top-notch (Core A) data mining conferences.",
      type: "publication",
      icon: "📚",
      color: "from-green-400 to-blue-500",
      bgColor: "from-green-900/40 to-blue-900/30",
      borderColor: "border-green-500/30",
      importance: "high"
    },
    {
      id: 3,
      date: "Sept 2025",
      title: "ANRF International Travel Scheme (ITS) (Presenter), EMNLP-Findings 2025",
      description: "Awarded the ANRF International Travel Scheme (ITS) to present research at EMNLP-Findings 2025 in Suzhou, CHINA.",
      type: "award",
      icon: "🏆",
      color: "from-blue-400 to-cyan-500",
      bgColor: "from-blue-900/40 to-cyan-900/30",
      borderColor: "border-blue-500/30",
      importance: "high"
    },
    {
      id: 4,
      date: "May 2025",
      title: "ACM Professional Membership",
      description: "Awarded professional membership by the Association for Computing Machinery (ACM).",
      type: "award",
      icon: "🏆",
      color: "from-yellow-400 to-orange-500",
      bgColor: "from-yellow-900/40 to-orange-900/30",
      borderColor: "border-yellow-500/30",
      importance: "high"
    },
    {
      id: 5,
      date: "Mar 2025",
      title: "TALLIP-2025 Accepted",
      description: "Manuscript titled \"Improving code-mixed hate detection by native sample mixing: A case study for Hindi-English code-mixed scenario\" accepted for publication in Transactions on Asian and Low-Resource Language Information Processing (TALLIP)-2025.",
      type: "publication",
      icon: "📚",
      color: "from-green-400 to-emerald-500",
      bgColor: "from-green-900/40 to-emerald-900/30",
      borderColor: "border-green-500/30",
      importance: "high"
    },
    {
      id: 6,
      date: "Mar 2025",
      title: "SIGIR 2025 Challenge Selection",
      description: "Selected for LiveRAG Challenge track, SIGIR 2025.",
      type: "conference",
      icon: "🎯",
      color: "from-purple-400 to-pink-500",
      bgColor: "from-purple-900/40 to-pink-900/30",
      borderColor: "border-purple-500/30",
      importance: "medium"
    }
  ];

  return (
    <div className="relative z-10 container mx-auto px-6 py-20" id='news'>
      <div className="max-w-6xl mx-auto">
        {/* Creative Header */}
        <div className="mb-20">
          <div className="flex items-center gap-6 mb-6">
            <div className="relative">
              <div className="text-8xl animate-pulse">📢</div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full animate-ping"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full"></div>
            </div>
            <div>
              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-green-400 bg-clip-text text-transparent tracking-tight">
                Latest News
              </h1>
              <p className="text-xl text-gray-400 mt-2">Recent achievements and milestones</p>
            </div>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 rounded-full"></div>
        </div>

        {/* News Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 md:left-16 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 via-blue-400 to-purple-500 rounded-full shadow-lg shadow-blue-400/50"></div>

          {/* News Items */}
          <div className="space-y-12">
            {newsData.map((news, index) => (
              <div
                key={news.id}
                className={`relative transition-all duration-1000 ${
                  visibleNews.has(index) 
                    ? 'opacity-100 transform translate-x-0' 
                    : 'opacity-0 transform translate-x-8'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-6 md:left-14 flex items-center justify-center z-20">
                  <div className={`w-8 h-8 bg-gradient-to-r ${news.color} rounded-full border-4 border-white shadow-xl flex items-center justify-center transform hover:scale-125 transition-all duration-300`}>
                    <span className="text-sm">{news.icon}</span>
                  </div>
                  {/* Pulsing Ring */}
                  <div className={`absolute w-12 h-12 bg-gradient-to-r ${news.color} rounded-full opacity-20 animate-ping`}></div>
                </div>

                {/* News Card */}
                <div className="ml-20 md:ml-32">
                  <div className={`group relative bg-gradient-to-br ${news.bgColor} backdrop-blur-lg ${news.borderColor} border rounded-3xl p-6 hover:border-opacity-60 transition-all duration-500 hover:shadow-2xl hover:transform hover:scale-[1.02] hover:shadow-cyan-400/10`}>
                    
                    {/* Floating Background Elements */}
                    <div className="absolute inset-0 opacity-5 overflow-hidden rounded-3xl">
                      <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r ${news.color} rounded-full animate-pulse`}></div>
                      <div className={`absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r ${news.color} rounded-full animate-pulse delay-1000`}></div>
                    </div>

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div className="flex items-center gap-3 mb-2 md:mb-0">
                          <span className={`text-3xl`}>{news.icon}</span>
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                              {news.title}
                            </h3>
                            <div className="flex items-center gap-2 mt-1">
                              <span className={`px-3 py-1 bg-gradient-to-r ${news.color}/20 text-white border border-current/30 rounded-full text-sm font-medium capitalize`}>
                                {news.type}
                              </span>
                              {news.importance === 'high' && (
                                <span className="px-3 py-1 bg-red-500/20 text-red-300 border border-red-400/30 rounded-full text-sm font-medium">
                                  🔥 Hot
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        {/* Date Badge */}
                        <div className={`px-4 py-2 bg-gradient-to-r ${news.color}/30 backdrop-blur-sm border border-current/40 rounded-2xl`}>
                          <span className="text-white font-semibold flex items-center gap-2">
                            <span>📅</span> {news.date}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed text-lg mb-4">
                        {news.description}
                      </p>

                      {/* Action Buttons */}
                      {/* <div className="flex flex-wrap gap-3">
                        <button className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${news.color}/20 text-white border border-current/30 rounded-full text-sm font-medium hover:bg-current/30 transition-all duration-300 hover:scale-105`}>
                          <span>🔗</span> Learn More
                        </button>
                        
                        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 text-blue-200 border border-blue-500/30 rounded-full text-sm font-medium hover:bg-blue-600/30 transition-all duration-300 hover:scale-105">
                          <span>📤</span> Share
                        </button>
                      </div> */}

                      {/* Animated Progress Bar */}
                      <div className="mt-4 w-0 h-1 bg-gradient-to-r from-current to-transparent group-hover:w-full transition-all duration-1000 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline End Point */}
          <div className="relative mt-12">
            <div className="absolute left-6 md:left-14 flex items-center justify-center">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
            </div>
            <div className="ml-20 md:ml-32">
              <p className="text-gray-400 italic">More exciting news coming soon...</p>
            </div>
          </div>
        </div>

        {/* News Stats */}
        {/* <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-yellow-900/40 to-orange-900/30 backdrop-blur-sm rounded-2xl border border-yellow-500/20">
            <div className="text-4xl mb-3">🏆</div>
            <div className="text-2xl font-bold text-yellow-400">1</div>
            <div className="text-gray-300 text-sm">Awards</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-green-900/40 to-emerald-900/30 backdrop-blur-sm rounded-2xl border border-green-500/20">
            <div className="text-4xl mb-3">📚</div>
            <div className="text-2xl font-bold text-green-400">1</div>
            <div className="text-gray-300 text-sm">Publications</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-purple-900/40 to-pink-900/30 backdrop-blur-sm rounded-2xl border border-purple-500/20">
            <div className="text-4xl mb-3">🎯</div>
            <div className="text-2xl font-bold text-purple-400">1</div>
            <div className="text-gray-300 text-sm">Conferences</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-blue-900/40 to-cyan-900/30 backdrop-blur-sm rounded-2xl border border-blue-500/20">
            <div className="text-4xl mb-3">⚡</div>
            <div className="text-2xl font-bold text-cyan-400">2025</div>
            <div className="text-gray-300 text-sm">Active Year</div>
          </div>
        </div> */}
      </div>
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
