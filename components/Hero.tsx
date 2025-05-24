// import Image from 'next/image';
// import { SocialLinks } from './hero/SocialLinks';
// import { useTheme } from '../context/ThemeContext';
// import { Contact } from 'lucide-react';
// import { ContactInfo } from './hero/ContactInfo';
// import { ActionButtons } from './hero/ActionButtons';

// const Hero: React.FC = () => {
//     const { isDarkMode } = useTheme();

//     return (
//         <section
//             className={` text-[var(--text-color)] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 min-h-[90vh]`}
//         >
//             <div className="flex flex-col items-center md:m-50 gap-8 max-w-xs">
//                 <div className="relative w-60 h-60 md:w-75 md:h-75">
//                     <Image
//                         src="/profile_image.png"
//                         alt="Profile"
//                         width={240}
//                         height={240}
//                         className="rounded-full w-75 h-60 md:w-90 md:h-75 object-cover border-4 border-[var(--text-color)] shadow-lg hover:scale-105 transition-transform"
//                     />
//                     <div className="absolute inset-[-10px] rounded-full border-4 border-[var(--accent-color)] opacity-50 animate-borderPulse"></div>
//                 </div>
//                 {/* <div
//                     className={`${
//                         !isDarkMode
//                         ? 'bg-gradient-to-r from-[rgba(0,77,64,0.95)] to-[rgba(0,121,107,0.85)]'
//                         : 'bg-gradient-to-r from-[rgba(0,0,0,0.95)] to-[rgba(0,0,0,0.85)]'
//                         } p-10 rounded-xl text-center shadow-lg hover:-translate-y-2 transition-transform w-full backdrop-blur`}
//                         >
//                         <h2 className="text-2xl font-bold mb-4">Debajyoti Mazumder</h2>
//                         <div className="flex items-center justify-center gap-2 mb-2">
//                         <span>💻</span>
//                         <span>NLP Researcher</span>
//                         </div>
//                         <div className="flex items-center justify-center gap-2 mb-4">
//                         <span>🏫</span>
//                         <span>IISER Bhopal</span>
//                         </div>
//                         <SocialLinks />
//                         </div> */}
//             </div>
//             <div className="flex-1">
//                 <div className="flex flex-col items-center gap-5">
//                 <h1 className={`text-4xl lg:text-6xl font-bold bg-gradient-to-r ${isDarkMode ? 'from-gray-300 via-blue-800 to-blue-300' : 'bg-gradient-to-r from-gray-100 via-gray-400 to-blue-200'} bg-clip-text text-transparent animate-gradient`}>
//                     Debajyoti Mazumder
//                 </h1>
//                 <ContactInfo />
//                 <ActionButtons />
//                 <SocialLinks />
//                 </div>
//                 {/* <h1 className="text-4xl font-bold mb-6">About Me</h1>
//                 <p className="text-lg mb-6 max-w-xl">
//                 <strong>NLP Researcher</strong>
//                 <br />
//                 <br />
//                 <strong>Technical Skills:</strong> PyTorch, HuggingFace
//                 <br />
//                     <br />
//                     <strong>Contact:</strong> debajyoti22@iiserb.ac.in, debajyotimaz@gmail.com
//                 </p>
//                 <a
//                     href="/assets/resume.pdf"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center gap-2 bg-[rgba(0,0,0,0.4)] text-[var(--text-color)] px-4 py-2 rounded-lg hover:bg-[rgba(0,0,0,0.6)] transition-colors"
//                 >
//                     <span>⬇️</span> Download Resume
//                 </a> */}
//             </div>
//         </section>
//     );
// };

// export default Hero;





import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from './Links';
import { SocialLinks } from './hero/SocialLinks';
import { ContactInfo } from './hero/ContactInfo';
import { ActionButtons } from './hero/ActionButtons';
import { TypeWriter } from '../ui/TypeWriter';
import { useTheme } from '../context/ThemeContext';

export function Hero() {
  const { isDarkMode } = useTheme();
  const roles = [
    "NLP Researcher",
    // "AI Enthusiast",
    // "Machine Learning Engineer",
    // "Data Scientist",
    // "Full-Stack Developer",
    // "DSA Enthusiast",
    // "Problem Solver",
    // "Content Creator",
    // "Tech Innovator",
    // "Lifelong Learner",
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background with particles */}
  \

      <div className="container mx-auto px-10 py-16 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col items-center justify-center text-center space-y-4 order-2 md:order-1">
            <div className="space-y-2">
              <div className="inline-block bg-blue-100 dark:bg-blue-900/50 backdrop-blur-sm text-blue-600 dark:text-blue-300 text-sm font-medium px-4 py-2 rounded-full">
              Hey! <span className="inline-block origin-[70%_70%] animate-wave">👋</span> I'm
              </div>
              <h1 className={`text-4xl lg:text-6xl font-bold ${ !isDarkMode ? 'text-white' : 'bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600'} bg-clip-text text-transparent py-2 animate-gradient`}>
                Debajyoti Mazumder
              </h1>
              <div className="text-xl md:text-2xl text-white dark:text-gray-300">
                I'm a <TypeWriter words={roles} delay={100} />
              </div>
            </div>

            <ContactInfo />
            <ActionButtons />
            <SocialLinks />
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative order-1 md:order-2">
            {/* Floating solid circular elements */}
            {/* <div className="absolute w-24 h-24 bg-blue-600 top-0 left-0 rounded-full animate-floating" />
            <div className="absolute w-24 h-24 bg-purple-600 bottom-0 right-0 rounded-full animate-floating delay-150" />
            <div className="absolute w-20 h-20 bg-green-500 top-4 right-4 rounded-full animate-floating delay-300" />
            <div className="absolute w-20 h-20 bg-yellow-500 bottom-4 left-4 rounded-full animate-floating delay-450" /> */}

            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
            <img
              src="/profile_image.png"
              alt="Debajyoti Mazumder"
              className="relative object-cover w-80 h-80  mx-auto rounded-full shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>

        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-[-1rem] left-1/2 -translate-x-1/2 animate-bounce">
          <Link
            href="#about"
            className="p-2 rounded-full bg-white/10 dark:bg-gray-800/10 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-colors"
          >
            <ArrowDown className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </Link>
        </div> */}
      </div>
    </section>
  );
}