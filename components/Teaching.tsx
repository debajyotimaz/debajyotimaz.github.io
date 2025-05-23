import Section from './Section';

const Teaching: React.FC = () => (
  <Section id="teaching" title="Teaching">
    <ul className="list-none">
      {[
        'Teaching Assistant, Introduction to Programming‑ ECS102, IISER Bhopal (Jan,2025 ‑ Apr,2025)',
        'Teaching Assistant, Natural Language Processing‑ DSE407/607, IISER Bhopal (Aug,2024 ‑ Nov,2024)',
        'Teaching Assistant, Introduction to Programming‑ ECS102, IISER Bhopal (Jan,2024 ‑ Apr,2024)',
        'Teaching Assistant, Natural Language Processing‑ DSE407/607, IISER Bhopal (Aug,2023 ‑ Nov,2023)',
        'Teaching Assistant, Applied optimization‑ DSE311, IISER Bhopal (Jan,2023 ‑ Apr,2023)',
      ].map((item, idx) => (
        <li key={idx} className="flex items-center gap-2 mb-2">
          • {item}
        </li>
      ))}
    </ul>
  </Section>
);

export default Teaching;