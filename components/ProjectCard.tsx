import Image from 'next/image';
import { useTheme } from '../context/ThemeContext';

interface ProjectCardProps {
  href: string;
  imgSrc: string;
  alt: string;
  title: string;
  description: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ href, imgSrc, alt, title, description, tags }) => {
  const { isDarkMode } = useTheme();

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${ !isDarkMode ? ' bg-[var(--card-bg)]' : 'bg-[var(--card-bg-dark)]'} h-100 rounded-xl shadow-md hover:-translate-y-2 hover:scale-105 transition-transform duration-300`}
    >
      <Image src={imgSrc} alt={alt} width={320} height={200} className="w-full h-48 object-cover bg-gray-100" />
      <div className="p-4">
        <h3 className={`text-xl font-semibold ${ !isDarkMode ? 'text-[var(--primary-color)]' : 'text-[var(--accent-color)]'}`}>{title}</h3>
        <p className={`${!isDarkMode ? 'text-gray-600' : 'text-gray-400'} mb-4`}>{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag: string, idx: number) => (
            <span
              key={idx}
              className={`${!isDarkMode ? 'bg-gray-200  text-gray-800' : 'bg-gray-600 text-gray-200'} px-2 py-1 rounded-md text-sm`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;