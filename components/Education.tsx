// import Section from './Section';
// import EducationItem from './EducationItem';

// interface Education {
//   degree: string;
//   institution: string;
//   status: string;
// }

// const Education: React.FC = () => {
//   const education: Education[] = [
//     { degree: 'Ph.D., Data Science and Engineering', institution: 'IISER Bhopal', status: 'Pursuing' },
//     { degree: 'M.Sc., Mathematics', institution: 'University of Delhi', status: '2020' },
//     { degree: 'B.Sc., Mathematics Honours', institution: 'University of Delhi', status: '2018' },
//   ];

//   return (
//     <Section id="education" title="Education">
//       {education.map((edu, idx) => (
//         <EducationItem key={idx} degree={edu.degree} institution={edu.institution} status={edu.status} />
//       ))}
//     </Section>
//   );
// };

// export default Education;



export default function Education() {

  const educationData = [
    {
      degree: "Ph.D., Data Science and Engineering",
      institution: "IISER Bhopal, India",
      year: "Pursuing",
      status: "current",
      description: "Focused on multilingual social NLP and computational linguistics research"
    },
    {
      degree: "M.Sc., Mathematics",
      institution: "University of Delhi, India",
      year: "2020",
      status: "completed",
      description: "Advanced mathematical foundations for computational research"
    },
    {
      degree: "B.Sc., Mathematics Honours",
      institution: "University of Delhi, India", 
      year: "2018",
      status: "completed",
      description: "Strong foundation in mathematical principles and analytical thinking"
    }
  ];

  return (
    <div>
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-20">
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-200 bg-clip-text text-transparent mb-4 tracking-tight">
              Education
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-blue-400 to-transparent"></div>
          </div>

          {/* Timeline Layout */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-600"></div>

            {/* Education Items */}
            <div className="space-y-16">
              {educationData.map((edu, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-10 flex items-center justify-center">
                    <div className={`w-6 h-6 rounded-full border-4 ${
                      edu.status === 'current' 
                        ? 'bg-cyan-400 border-cyan-300 shadow-lg shadow-cyan-400/50' 
                        : 'bg-blue-500 border-blue-400'
                    } z-10`}>
                      {edu.status === 'current' && (
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="ml-20 md:ml-24 flex-1">
                    <div className="group hover:transform hover:translate-x-2 transition-all duration-300">
                      {/* Degree and Year */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h3 className="text-2xl md:text-3xl font-semibold text-white group-hover:text-blue-200 transition-colors">
                          🎓 {edu.degree}
                        </h3>
                        <span className={`text-lg font-medium px-4 py-1 rounded-full ${
                          edu.status === 'current'
                            ? 'bg-cyan-400/20 text-cyan-300 border border-cyan-400/30'
                            : 'bg-blue-500/20 text-blue-300 border border-blue-400/30'
                        } mt-2 md:mt-0 self-start`}>
                          {edu.year}
                        </span>
                      </div>

                      {/* Institution */}
                      <p className="text-xl text-blue-200 mb-4 font-medium">
                        📍 {edu.institution}
                      </p>

                      {/* Description */}
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {edu.description}
                      </p>

                      {/* Animated underline */}
                      <div className="mt-4 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-500"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline End */}
            <div className="relative mt-12">
              <div className="absolute left-6 md:left-10 flex items-center justify-center">
                <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-20 ml-20 md:ml-24">
            <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/20 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 hover:border-blue-400/30 transition-all duration-300">
              <p className="text-gray-300 text-lg italic">
                "Building upon a strong mathematical foundation to explore the frontiers of computational linguistics and data science."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
