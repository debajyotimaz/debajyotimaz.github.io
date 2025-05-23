'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

interface SearchResult {
  id: string;
  title: string;
  content: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (!isOpen) {
      setSearchQuery('');
      setSearchResults([]);
      return;
    }

    const sections = [
      {
        id: 'bio',
        title: 'Bio',
        content: 'Debajyoti Mazumder is an NLP researcher with a passion for advancing the understanding of language through computational methods. Currently pursuing a Ph.D. at IISER Bhopal under the guidance of Dr. Jasabanta Patro, his work focuses on multilingual social NLP. With a strong foundation in mathematics and data science, he combines theoretical rigor with practical applications to tackle complex problems in NLP.',
      },
      {
        id: 'interests',
        title: 'Interests',
        content: 'Multilinguality, Fine-tuning pretrained models, In-context learning, Instruction tuning',
      },
      {
        id: 'education',
        title: 'Education',
        content: 'Ph.D., Data Science and Engineering, IISER Bhopal, Pursuing; M.Sc., Mathematics, University of Delhi, 2020; B.Sc., Mathematics Honours, University of Delhi, 2018',
      },
      {
        id: 'publications',
        title: 'Publications',
        content: 'Debajyoti Mazumder, Aakash Kumar, and Jasabanta Patro. 2025. Improving Code-Mixed Hate Detection by Native Sample Mixing: A Case Study for Hindi-English Code-Mixed Scenario. ACM Trans. Asian Low-Resour. Lang. Inf. Process. 24, 5, Article 47 (May 2025), 21 pages.',
      },
      {
        id: 'news',
        title: 'News',
        content: 'May 2025: Awarded professional membership by the Association for Computing Machinery (ACM). Mar 2025: Manuscript titled "Improving code-mixed hate detection by native sample mixing: A case study for Hindi-English code-mixed scenario" accepted for publication in Transactions on Asian and Low-Resource Language Information Processing (TALLIP)-2025. Mar 2025: Selected for LiveRAG Challenge track, SIGIR 2025.',
      },
      {
        id: 'experience',
        title: 'Experience',
        content: 'Research Scholar, IISER Bhopal (july, 2022–Present).',
      },
      {
        id: 'projects',
        title: 'Projects',
        content: 'Code-Mixed Hate Detection: Developed a native sample mixing strategy to improve code-mixed hate detection in multilingual settings. Fine-tuning LLM, NLP, Transfer Learning',
      },
      {
        id: 'teaching',
        title: 'Teaching',
        content: 'Teaching Assistant, Introduction to Programming ECS102, IISER Bhopal (Jan,2025 Apr,2025); Teaching Assistant, Natural Language Processing DSE407/607, IISER Bhopal (Aug,2024 Nov,2024); Teaching Assistant, Introduction to Programming ECS102, IISER Bhopal (Jan,2024 Apr,2024); Teaching Assistant, Natural Language Processing DSE407/607, IISER Bhopal (Aug,2023 Nov,2023); Teaching Assistant, Applied optimization DSE311, IISER Bhopal (Jan,2023 Apr,2023)',
      },
    ];

    const search = () => {
      if (!searchQuery.trim()) {
        setSearchResults([]);
        return;
      }
      const query = searchQuery.toLowerCase();
      const results = sections
        .filter(
          (section) =>
            section.title.toLowerCase().includes(query) ||
            section.content.toLowerCase().includes(query)
        )
        .map((section) => ({
          id: section.id,
          title: section.title,
          content: section.content.substring(0, 100) + (section.content.length > 100 ? '...' : ''),
        }));
      setSearchResults(results);
    };

    search();
  }, [searchQuery, isOpen]);
  
  const { isDarkMode } = useTheme();

  if (!isOpen) return null;

  

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
      <div
        className={`${ !isDarkMode ? 'bg-[var(--card-bg)]' : 'bg-[var(--card-bg-dark)]'} p-6 rounded-xl shadow-lg max-w-lg w-full mx-4`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className={`text-2xl font-semibold ${ !isDarkMode ? 'text-[var(--primary-color)]' : 'text-[var(--accent-color)]'}`}>
            Search
          </h2>
          <button onClick={onClose} className="text-xl hover:scale-110 transition-transform">
            ✖
          </button>
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search sections..."
          className={`w-full p-2 mb-4 border rounded-lg ${ !isDarkMode ? 'bg-gray-100  text-gray-900' : 'bg-gray-700 text-gray-100'}`}
          autoFocus
        />
        <div className="max-h-60 overflow-y-auto">
          {searchResults.length > 0 ? (
            <ul className="list-none">
              {searchResults.map((result) => (
                <li key={result.id} className="mb-2">
                  <a
                    href={`#${result.id}`}
                    className={`block p-2 rounded-lg ${ !isDarkMode ? 'hover:bg-gray-200' : 'hover:bg-gray-600'}`}
                    onClick={onClose}
                  >
                    <h3 className="text-lg font-semibold">{result.title}</h3>
                    <p className={`${ !isDarkMode ? 'text-gray-600' : 'text-gray-400'} text-sm`}>{result.content}</p>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className={`${ !isDarkMode ? 'text-gray-600' : 'text-gray-400'}`}>
              {searchQuery ? 'No results found' : 'Enter a query to search'}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;