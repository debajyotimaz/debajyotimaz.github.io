// import Section from './Section';

// const Experience: React.FC = () => (
//   <Section id="experience" title="Experience">
//     <ul className="list-none">
//       <li className="flex items-center gap-2 mb-2">• Research Scholar, IISER Bhopal (July, 2022–Present).</li>
//     </ul>
//   </Section>
// );

// export default Experience;



import React, { useState } from 'react';
import { BookOpen, Code, Brain, Calculator, Users, Calendar, MapPin } from 'lucide-react';

interface TeachingExperience {
  id: string;
  role: string;
  course: string;
  courseCode: string;
  institution: string;
  period: string;
  startDate: string;
  endDate: string;
  icon: React.ReactNode;
  color: string;
  description?: string;
}

const TeachingSection: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const experiences: TeachingExperience[] = [
    {
      id: '1',
      role: 'Teaching Assistant',
      course: 'Introduction to Programming',
      courseCode: 'ECS102',
      institution: 'IISER Bhopal',
      period: 'Jan 2025 - Apr 2025',
      startDate: '2025-01',
      endDate: '2025-04',
      icon: <Code size={20} />,
      color: 'from-blue-500 to-cyan-500',
      description: 'Guiding students through fundamental programming concepts and problem-solving techniques.'
    },
    {
      id: '2',
      role: 'Teaching Assistant',
      course: 'Natural Language Processing',
      courseCode: 'DSE407/607',
      institution: 'IISER Bhopal',
      period: 'Aug 2024 - Nov 2024',
      startDate: '2024-08',
      endDate: '2024-11',
      icon: <Brain size={20} />,
      color: 'from-purple-500 to-pink-500',
      description: 'Supporting advanced NLP concepts, machine learning algorithms, and text processing techniques.'
    },
    {
      id: '3',
      role: 'Teaching Assistant',
      course: 'Introduction to Programming',
      courseCode: 'ECS102',
      institution: 'IISER Bhopal',
      period: 'Jan 2024 - Apr 2024',
      startDate: '2024-01',
      endDate: '2024-04',
      icon: <Code size={20} />,
      color: 'from-blue-500 to-cyan-500',
      description: 'Mentoring students in programming fundamentals and computational thinking.'
    },
    {
      id: '4',
      role: 'Teaching Assistant',
      course: 'Natural Language Processing',
      courseCode: 'DSE407/607',
      institution: 'IISER Bhopal',
      period: 'Aug 2023 - Nov 2023',
      startDate: '2023-08',
      endDate: '2023-11',
      icon: <Brain size={20} />,
      color: 'from-purple-500 to-pink-500',
      description: 'Assisting with NLP coursework, research projects, and student guidance.'
    },
    {
      id: '5',
      role: 'Teaching Assistant',
      course: 'Applied Optimization',
      courseCode: 'DSE311',
      institution: 'IISER Bhopal',
      period: 'Jan 2023 - Apr 2023',
      startDate: '2023-01',
      endDate: '2023-04',
      icon: <Calculator size={20} />,
      color: 'from-green-500 to-teal-500',
      description: 'Supporting optimization theory, mathematical modeling, and algorithmic problem solving.'
    }
  ];

  const getSubjectStats = () => {
    const subjects = experiences.reduce((acc, exp) => {
      const subject = exp.course;
      acc[subject] = (acc[subject] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    return Object.entries(subjects).map(([subject, count]) => ({ subject, count }));
  };

  const totalSemesters = experiences.length;
  const subjectStats = getSubjectStats();

  return (
    <section className=" py-20 px-4 relative overflow-hidden" id='teaching'>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #8b5cf6 1px, transparent 1px)`,
          // backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
              <BookOpen className="text-white" size={24} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Teaching Experience
              </span>
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate about education and mentoring the next generation of programmers and researchers
          </p>
        </div>

        {/* Stats Cards */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
            <div className="flex items-center gap-3 mb-2">
              <Users className="text-blue-400" size={24} />
              <span className="text-2xl font-bold text-white">{totalSemesters}</span>
            </div>
            <p className="text-gray-400">Total Semesters</p>
          </div>
          
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="text-purple-400" size={24} />
              <span className="text-2xl font-bold text-white">{subjectStats.length}</span>
            </div>
            <p className="text-gray-400">Unique Courses</p>
          </div>
          
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
            <div className="flex items-center gap-3 mb-2">
              <MapPin className="text-green-400" size={24} />
              <span className="text-2xl font-bold text-white">IISER</span>
            </div>
            <p className="text-gray-400">Institution</p>
          </div>
        </div> */}

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

          {/* Timeline Items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
                onMouseEnter={() => setHoveredItem(exp.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-gray-950 border-4 border-blue-500 flex items-center justify-center z-10">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} transition-all duration-300 ${
                    hoveredItem === exp.id ? 'scale-150' : ''
                  }`}></div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`}>
                  <div className={`bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-gray-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                    hoveredItem === exp.id ? 'shadow-lg shadow-blue-500/20' : ''
                  }`}>
                    {/* Course Icon & Title */}
                    <div className={`flex items-center gap-3 mb-3 ${
                      index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                    } justify-start`}>
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${exp.color}`}>
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{exp.course}</h3>
                        <p className="text-sm text-gray-400">{exp.courseCode}</p>
                      </div>
                    </div>

                    {/* Role & Institution */}
                    <p className="text-blue-400 font-medium mb-2">{exp.role}</p>
                    <p className="text-gray-300 mb-3">{exp.institution}</p>

                    {/* Period */}
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>

                    {/* Description */}
                    {exp.description && (
                      <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
                    )}
                  </div>
                </div>

                {/* Spacer for desktop layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Subject Summary */}
        {/* <div className="mt-16 bg-gray-900/30 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Course Distribution</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {subjectStats.map(({ subject, count }) => (
              <div key={subject} className="bg-gray-800/50 rounded-lg p-4 text-center">
                <p className="text-white font-semibold">{subject}</p>
                <p className="text-blue-400 text-2xl font-bold">{count}</p>
                <p className="text-gray-400 text-sm">
                  {count === 1 ? 'Semester' : 'Semesters'}
                </p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default TeachingSection;