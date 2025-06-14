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


// import styles from '../styles/Projects.module.scss';

// import IconArrowUp from '../assets/icons/IconArrowUp';
// import { useTheme } from '../context/ThemeContext';
// import Section from './Section';

// // import { IProject } from 'types/entities/project';
// // import { projectData } from '../../utils/mock/project';
// export interface IProject {
//   id: number;
//   name: string;
//   description: string;
//   tags: string | string[];
//   url: string;
// }

// const projectData: IProject[] = [
//   {
//     id: 1,
//     name: 'Code-Mixed Hate Detection',
//     description: 'Developed a native sample mixing strategy to improve code-mixed hate detection in multilingual settings.',
//     tags: 'fine-tuning LLM + NLP + transfer learning',
//     url: 'https://github.com/islnlp/code-mix-hate-detection-ACM-TALLIP-2025',
//   },
// ];

// export default function Projects() {
//   const { isDarkMode} = useTheme();
//   return (
//     <section className={`${styles.project} dark:text-white min-w-full min-h-full `} id="projects">
//     <div className=' items-center justify-center min-h-full '>
//       <Section id="projects" title="Projects">
//       {/* <h2 className={`${ !isDarkMode ? 'text-blue-500' : 'text-white'} md:${ !isDarkMode ? 'text-blue-500' : 'text-white'} mt-10 mb-10  text-center ${styles.title} `}>Projects</h2> */}
//       <div className={`${styles.projWrapper} items-center justify-center md:mt-30 h-full`}>
//         {projectData.map((project: IProject) => (
//           <div key={project.id} className={`${styles.projCard} ${ !isDarkMode ? 'bg-amber-50 text-black' : 'bg-slate-800'}`}>
//             <h3 id="h1BG">{project.name}</h3>
//             <small>{project.tags}</small>
//             <p>{project.description}</p>

//             <div className={styles.bottom}>
//               <button>
//                 <a href={project.url} target="_blank" rel="noreferrer noopener">
//                   <IconArrowUp />
//                   view
//                 </a>
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       </Section>
//     </div>
//     </section>
//   );
// }



import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  links: {
    demo?: string;
    github?: string;
    link?: string;
  };
}

const ProjectsSection: React.FC = () => {
  // Sample project data - replace with your actual projects
  const projects: Project[] = [
    {
      id: '1',
      title: 'Code-Mixed Hate Detection',
      description: 'Developed a native sample mixing strategy to improve code-mixed hate detection in multilingual settings. This project focuses on enhancing the performance of NLP models in detecting hate speech in code-mixed languages.',
      image: 'https://raw.githubusercontent.com/islnlp/code-mix-hate-detection-ACM-TALLIP-2025/main/hate_logo.png',
      tags: ['NLP', 'Code-Mixed Text', 'Hate Speech Detection', 'Multilingual NLP'],
      links: {
        link: 'https://github.com/islnlp/code-mix-hate-detection-ACM-TALLIP-2025'
      },
    },
  ];
  return (
    <section className="py-20 px-4" id="projects">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for creating innovative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group hover:shadow-xl hover:shadow-blue-500/10"
            >
              {/* Project Image */}
              {project.image && (
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-fill group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                </div>
              )}

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  )}
                  
                  {project.links.link && (
                    <a
                      href={project.links.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      Link
                    </a>
                  )}
                  
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200 text-sm font-medium border border-gray-700"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects Link */}
        {/* <div className="text-center mt-16">
          <a
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-200 font-medium"
          >
            View All Projects
            <ExternalLink size={18} />
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default ProjectsSection;