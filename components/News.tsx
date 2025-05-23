import Section from './Section';

const News: React.FC = () => (
  <Section id="news" title="News">
    <ul className="list-none">
      {[
        'May 2025: Awarded professional membership by the Association for Computing Machinery (ACM).',
        'Mar 2025: Manuscript titled "Improving code-mixed hate detection by native sample mixing: A case study for Hindi-English code-mixed scenario" accepted for publication in Transactions on Asian and Low-Resource Language Information Processing (TALLIP)-2025.',
        'Mar 2025: Selected for LiveRAG Challenge track, SIGIR 2025.',
      ].map((item, idx) => (
        <li key={idx} className="flex items-center gap-2 mb-2">
          • {item}
        </li>
      ))}
    </ul>
  </Section>
);

export default News;