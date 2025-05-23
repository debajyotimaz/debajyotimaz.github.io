import Section from './Section';
import EducationItem from './EducationItem';

interface Education {
  degree: string;
  institution: string;
  status: string;
}

const Education: React.FC = () => {
  const education: Education[] = [
    { degree: 'Ph.D., Data Science and Engineering', institution: 'IISER Bhopal', status: 'Pursuing' },
    { degree: 'M.Sc., Mathematics', institution: 'University of Delhi', status: '2020' },
    { degree: 'B.Sc., Mathematics Honours', institution: 'University of Delhi', status: '2018' },
  ];

  return (
    <Section id="education" title="Education">
      {education.map((edu, idx) => (
        <EducationItem key={idx} degree={edu.degree} institution={edu.institution} status={edu.status} />
      ))}
    </Section>
  );
};

export default Education;