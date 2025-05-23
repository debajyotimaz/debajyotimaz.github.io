import Section from './Section';

const Interests: React.FC = () => (
  <Section id="interests" title="Interests">
    <ul className="list-none">
      {['Multilinguality', 'Fine-tuning pretrained models', 'In-context learning', 'Instruction tuning'].map((item, idx) => (
        <li key={idx} className="flex items-center gap-2 mb-2">
          • {item}
        </li>
      ))}
    </ul>
  </Section>
);

export default Interests;