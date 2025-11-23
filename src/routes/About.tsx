import Navbar from '../components/Navbar';

const About = () => {
  const skills = {
    'Frontend': ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML/CSS'],
    'Backend': ['Java', 'SQL', 'API Integration', 'Node.js'],
    'Mobile': ['Kotlin', 'Android', 'React Native'],
    'Tools': ['Git', 'Firebase', 'RESTful APIs', 'Database Design']
  };

  const experiences = [
    {
      title: 'Internship - Information Technology Department',
      company: 'Hoya',
      period: '2024',
      icon: '🏢',
      description: 'Converted and refactored an Android application from Kotlin into a React-based mobile application. Rebuilt UI components, integrated frontend modules with backend APIs, and ensured smooth performance across platforms.',
      highlights: ['Cross-platform Development', 'API Integration', 'UI/UX Enhancement', 'Clean Code Practices']
    },
    {
      title: 'Android Developer',
      company: 'POCKET - Income & Expense Tracker',
      period: '2023 - 2024',
      icon: '📱',
      description: 'Contributed to POCKET, an income and expense tracking application. Implemented core features, designed data structures, and improved UX and performance for seamless user experience.',
      highlights: ['Feature Development', 'Data Structure Design', 'Performance Optimization', 'UX Improvement']
    },
    {
      title: 'Frontend Developer',
      company: 'Tantawan Rent Books',
      period: '2023 - 2024',
      icon: '📚',
      description: 'Created a responsive web interface connected to SQL databases. Collaborated closely with backend developers for smooth system integration and implementation of business requirements.',
      highlights: ['Responsive Design', 'Database Integration', 'Team Collaboration', 'Full-stack Integration']
    },
    {
      title: 'Student Core Member',
      company: 'Thammasat University',
      period: '2022 - Present',
      icon: '🎓',
      description: 'Actively participated in organizing university activities, Open House events, and major departmental programs. Strengthened teamwork, communication, and leadership skills.',
      highlights: ['Team Leadership', 'Event Organization', 'Communication Skills', 'Community Building']
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'Thammasat University',
      status: 'Currently Studying',
      icon: '🎓'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <Navbar />

      {/* Main Content */}
      <div className="relative z-10 pt-32 pb-20 px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-3">
                About
              </span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
                Me
              </span>
            </h1>
            <p className="text-gray-400 text-lg">Computer Science Student | Full-Stack Developer | Tech Enthusiast</p>
          </div>

          {/* Introduction */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-12 mb-20 hover:bg-white/10 transition-all duration-300">
            <div className="flex gap-6 items-start">
              <div className="text-5xl">👋</div>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">Hello! I'm Narephat</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  I'm a Computer Science student at <span className="text-purple-400 font-semibold">Thammasat University</span> with hands-on experience across mobile development, frontend development, backend integration, and full-stack application delivery.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  With a strong foundation in <span className="text-pink-400 font-semibold">Java, Kotlin, JavaScript, TypeScript, and SQL</span>, I enjoy building applications that are functional, user-focused, and scalable. I'm passionate about cloud technologies, backend engineering, and creating elegant solutions to complex problems.
                </p>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
              <span className="text-2xl">💼</span>
              Professional Experience
            </h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <div className="flex gap-6 items-start">
                    <div className="text-4xl">{exp.icon}</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                          <p className="text-purple-400 font-semibold">{exp.company}</p>
                        </div>
                        <span className="text-gray-400 text-sm px-3 py-1 bg-white/5 rounded-full">{exp.period}</span>
                      </div>
                      <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.highlights.map((highlight, i) => (
                          <span 
                            key={i}
                            className="text-xs px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
              <span className="text-2xl">🛠️</span>
              Skills & Technologies
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <div 
                  key={category}
                  className="bg-gradient-to-br from-purple-600/10 to-pink-600/10 backdrop-blur-md border border-purple-500/30 rounded-2xl p-8 hover:border-purple-500/60 transition-all duration-300 hover:scale-105"
                >
                  <h3 className="text-xl font-bold mb-6 text-white">{category}</h3>
                  <ul className="space-y-3">
                    {items.map((skill, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                        <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
              <span className="text-2xl">🎓</span>
              Education
            </h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex gap-6 items-start">
                    <div className="text-4xl">{edu.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                      <p className="text-blue-400 font-semibold mb-2">{edu.school}</p>
                      <span className="inline-block text-sm px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-300">
                        {edu.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vision Section */}
          <div className="bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 backdrop-blur-md border border-purple-500/30 rounded-3xl p-12">
            <div className="flex gap-6 items-start">
              <div className="text-5xl">🚀</div>
              <div>
                <h2 className="text-3xl font-bold mb-4 text-white">My Vision</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  I am passionate about cloud technologies, backend engineering, and building scalable systems. I'm currently exploring cloud fundamentals and plan to pursue further studies in cloud computing.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I am eager to grow as a software developer and open to opportunities in development, internships, and future international roles. Let's build something amazing together!
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
  
          <div className="text-center mt-20">
            <a href="/contact">
              <button className="group relative px-12 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-pink-600 hover:via-purple-600 hover:to-pink-600 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 uppercase tracking-wide">
                <div className="relative flex items-center gap-3">
                  <span>Get in Touch</span>
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </button>
            </a>
          </div>
         

        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 5s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default About;