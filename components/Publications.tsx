import Section from './Section';

const Publications: React.FC = () => (
  <Section id="publications" title="Publications">
    <ul className="list-none">
      <li>
        • <strong>Debajyoti Mazumder</strong>, Aakash Kumar, and Jasabanta Patro. 2025. Improving Code-Mixed Hate Detection
        by Native Sample Mixing: A Case Study for Hindi-English Code-Mixed Scenario. ACM Trans. Asian Low-Resour. Lang.
        Inf. Process. 24, 5, Article 47 (May 2025), 21 pages.{' '}
        <a href="https://doi.org/10.1145/3726866" className="text-[var(--accent-color)] hover:underline">
          https://doi.org/10.1145/3726866
        </a>
      </li>
    </ul>
  </Section>
);

export default Publications;