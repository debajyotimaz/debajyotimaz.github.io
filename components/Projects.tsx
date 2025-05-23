// import Section from './Section';
// import ProjectCard from './ProjectCard';

// interface Project {
//   href: string;
//   imgSrc: string;
//   alt: string;
//   title: string;
//   description: string;
//   tags: string[];
// }

// const Projects: React.FC = () => {
//   const projects: Project[] = [
//     {
//       href: 'https://github.com/islnlp/code-mix-hate-detection-ACM-TALLIP-2025',
//       imgSrc: 'https://raw.githubusercontent.com/islnlp/code-mix-hate-detection-ACM-TALLIP-2025/main/hate_logo.png',
//       alt: 'Code-Mixed Hate Detection Logo',
//       title: 'Code-Mixed Hate Detection',
//       description: 'Developed a native sample mixing strategy to improve code-mixed hate detection in multilingual settings.',
//       tags: ['Fine-tuning LLM', 'NLP', 'Transfer Learning'],
//     },
//   ];

//   return (
//     <Section id="projects" title="Projects">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {projects.map((project, idx) => (
//           <ProjectCard key={idx} {...project} />
//         ))}
//       </div>
//     </Section>
//   );
// };

// export default Projects;


import styles from '../styles/Projects.module.scss';

import IconArrowUp from '../assets/icons/IconArrowUp';
import { useTheme } from '../context/ThemeContext';
import Section from './Section';

// import { IProject } from 'types/entities/project';
// import { projectData } from '../../utils/mock/project';
export interface IProject {
  id: number;
  name: string;
  description: string;
  tags: string | string[];
  url: string;
}

const projectData: IProject[] = [
  {
    id: 1,
    name: 'Code-Mixed Hate Detection',
    description: 'Developed a native sample mixing strategy to improve code-mixed hate detection in multilingual settings.',
    tags: 'fine-tuning LLM + NLP + transfer learning',
    url: 'https://github.com/islnlp/code-mix-hate-detection-ACM-TALLIP-2025',
  },
];

export default function Projects() {
  const { isDarkMode} = useTheme();
  return (
    <section className={`${styles.project} dark:text-white min-w-full min-h-full `} id="projects">
    <div className=' items-center justify-center min-h-full '>
      <Section id="projects" title="Projects">
      {/* <h2 className={`${ !isDarkMode ? 'text-blue-500' : 'text-white'} md:${ !isDarkMode ? 'text-blue-500' : 'text-white'} mt-10 mb-10  text-center ${styles.title} `}>Projects</h2> */}
      <div className={`${styles.projWrapper} items-center justify-center md:mt-30 h-full`}>
        {projectData.map((project: IProject) => (
          <div key={project.id} className={`${styles.projCard} ${ !isDarkMode ? 'bg-amber-50 text-black' : 'bg-slate-800'}`}>
            <h3 id="h1BG">{project.name}</h3>
            <small>{project.tags}</small>
            <p>{project.description}</p>

            <div className={styles.bottom}>
              <button>
                <a href={project.url} target="_blank" rel="noreferrer noopener">
                  <IconArrowUp />
                  view
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
      </Section>
    </div>
    </section>
  );
}