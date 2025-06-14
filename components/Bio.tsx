// import Section from './Section';

// const Bio: React.FC = () => (
//   <Section id="bio" title="Bio">
//     <p  >
      // Debajyoti Mazumder is an NLP researcher with a passion for advancing the understanding of language through
      // computational methods. Currently pursuing a Ph.D. at IISER Bhopal under the guidance of Dr. Jasabanta Patro, his
      // work focuses on multilingual social NLP. With a strong foundation in mathematics and data science, he combines
      // theoretical rigor with practical applications to tackle complex problems in NLP.
//     </p>
//   </Section>
// );

// export default Bio;


export default function Bio() {
  return (
    <div className="min-h-screen relative overflow-hidden " id="bio">
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-7xl md:text-8xl font-bold text-blue-200 mb-6 tracking-tight">
              Bio
            </h1>
            <div className="w-32 h-0.5 bg-blue-400 mx-auto"></div>
          </div>

          {/* Bio Content - Flowing Text Layout */}
          <div className="space-y-12">
            {/* Bio Description - Flowing paragraphs */}
            <div className="max-w-4xl mx-auto space-y-8 text-center">
              <p className="text-xl md:text-2xl text-white leading-relaxed font-light">
                <span className="text-blue-400 font-medium">Passionate about advancing</span> the understanding of language through computational methods, combining theoretical rigor with practical applications to tackle complex problems in NLP.
              </p>
              
              <p className="text-xl md:text-2xl text-white leading-relaxed font-light">
                Currently pursuing a <span className="text-cyan-400 font-medium">Ph.D. at IISER Bhopal</span> under the guidance of Dr. Jasabanta Patro, with research focused on <span className="text-blue-300 font-medium">multilingual social NLP</span>.
              </p>
              
              <p className="text-xl md:text-2xl text-white leading-relaxed font-light">
                With a strong foundation in <span className="text-blue-400 font-medium">mathematics and data science</span>, bridging the gap between theoretical understanding and real-world applications.
              </p>
            </div>

            {/* Interests - Inline Tags */}
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-light text-blue-200 mb-8">Interests</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  'Multilinguality',
                  'Fine Tuning Pretrained Models',
                  'In context Learning',
                  'Instruction Tuning',
                ].map((area, index) => (
                  <span
                    key={index}
                    className="px-6 py-3 text-blue-200 border border-blue-500/30 rounded-full text-lg font-light hover:border-blue-400/50 hover:text-blue-100 transition-all duration-300 backdrop-blur-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Academic Journey */}
            <div className="text-center space-y-6 pt-8">
              <div className="max-w-3xl mx-auto">
                <p className="text-lg text-white leading-relaxed font-light italic">
                  "Exploring the intersection of human language and artificial intelligence to create more inclusive and understanding computational systems."
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
