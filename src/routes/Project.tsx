import { useState } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Project = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'TUFIX Application',
      subtitle: 'University Maintenance Reporting App',
      status: 'Finished',
      icon: '🔧',
      featured: true,
      tags: ['Figma', 'UX/UI Design', 'Prototyping'],
      color: 'from-blue-600/20 to-cyan-600/20',
      borderColor: 'border-blue-500/30',
      situation: 'The university needed a simple and reliable way for students, lecturers, and staff to report issues with equipment such as desks, projectors, and air conditioners.',
      task: 'Design a mobile application prototype that makes problem reporting fast, intuitive, and efficient.',
      actions: [
        'Created user flows, wireframes, and both low-fi and high-fi designs using Figma',
        'Developed UI screens that support reporting, tracking, and categorizing maintenance issues',
        'Focused on accessibility, clarity, and minimized steps to complete a report',
        'Collaborated with team members to refine the app\'s structure and user experience'
      ],
      results: [
        'Delivered a complete, high-fidelity mobile prototype that clearly communicates the product vision',
        'Provided a design system and interaction model that can be used for future development',
        'Received positive feedback for simplicity, usability, and alignment with real user needs'
      ],
      github: 'https://github.com/narephat6509650369/TUFIX-APPLICATION'
    },
    {
      id: 2,
      title: 'DeeSkin',
      subtitle: 'Skin Cancer Detection App with AI',
      status: 'Finished',
      icon: '🤖',
      featured: true,
      tags: ['Python', 'EfficientNetV2L', 'Machine Learning', 'UX/UI'],
      color: 'from-purple-600/20 to-pink-600/20',
      borderColor: 'border-purple-500/30',
      situation: 'Skin cancer detection often requires specialized equipment or expert evaluation. Our project aimed to explore how machine learning could assist in early detection through image analysis.',
      task: 'Build a prototype app that uses an image recognition model to classify skin conditions as cancerous or healthy.',
      actions: [
        'Trained the EfficientNetV2L model on a curated dataset for skin cancer classification',
        'Processed and labeled image data to improve model accuracy',
        'Developed the core model pipeline and evaluation metrics',
        'Collaborated with the team to design initial UX/UI screens showing how users upload images and view predictions',
        'Co-authored the project documentation and final report'
      ],
      results: [
        'Produced a functioning machine learning model capable of distinguishing between healthy and cancerous skin with meaningful accuracy',
        'Delivered a UX/UI concept that demonstrates the model\'s practical application in a mobile app',
        'Gained hands-on experience in AI model building, evaluation, and healthcare-related problem-solving'
      ],
      github: "https://github.com/narephat6509650369/DeeSkin"
    },
     {
      id: 3,
      title: 'My Portfolio',
      subtitle: 'Personal Portfolio Website',
      status: 'Finished',
      icon: '💻',
      featured: true,
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
      color: 'from-cyan-600/20 to-blue-600/20',
      borderColor: 'border-cyan-500/30',
      situation: 'As a Computer Science student and aspiring full-stack developer, I needed a modern, visually appealing portfolio website to showcase my projects, skills, and experience to potential employers, collaborators, and the tech community. A static resume was no longer sufficient to demonstrate my capabilities.',
      task: 'Build a professional, interactive portfolio website that effectively showcases projects, demonstrates technical skills, provides clear contact information, and reflects modern web design practices. The site should be fully responsive, performant, and serve as a compelling digital presence.',
      actions: [
        'Built the entire website using React with TypeScript for type safety and better code quality',
        'Implemented responsive design with Tailwind CSS, ensuring seamless experience across mobile, tablet, and desktop devices',
        'Designed and developed multiple pages: Home, About, Projects, and Contact with smooth navigation and routing',
        'Created dynamic project showcase with expandable cards, allowing visitors to explore detailed project information including situation, task, actions, and results',
        'Integrated interactive features including animated backgrounds, hover effects, gradient animations, and smooth transitions for an engaging user experience',
        'Set up contact form with EmailJS integration for direct communication capabilities',
        'Implemented smooth scrolling, parallax effects, and custom animations using CSS and React hooks',
        'Optimized performance and ensured accessibility standards throughout the application'
      ],
      results: [
        'Delivered a professional, fully functional portfolio website that effectively communicates technical expertise and showcases major projects with detailed information',
        'Created a responsive, modern design that provides excellent user experience across all devices with smooth animations and intuitive navigation',
        'Established a strong digital presence that demonstrates full-stack development skills (React, TypeScript, UI/UX, responsive design) and serves as a living resume',
        'Integrated functional contact system enabling potential employers and collaborators to reach out directly',
        'Built a scalable, maintainable codebase using best practices, component-based architecture, and TypeScript for future enhancements'
      ],
      github: 'https://github.com/narephat6509650369/My-web-Portfolio'
    },
    {
      id: 4,
      title: 'POCKET App',
      subtitle: 'Income & Expense Tracking Application',
      status: 'Published',
      icon: '📱',
      featured: false,
      tags: ['Java', 'Android', 'UI Design', 'Performance'],
      color: 'from-green-600/20 to-emerald-600/20',
      borderColor: 'border-green-500/30',
      position: 'Android App Developer',
      duration: '2024',
      situation: 'Our team decided to develop POCKET, an income and expense tracking application for Android, aimed at helping users manage their finances easily and conveniently.',
      task: 'Design and develop the application with features for recording income and expenses, built appropriate data management structures, and improve user experience (UX) and app performance.',
      actions: [
        'Utilized Java for application development and Groovy for managing build scripts in Android Studio',
        'Participated in UI design to meet user requirements',
        'Built and managed internal data structures, such as recording and displaying income and expense history',
        'Supported the team in resolving technical issues and improving app functionality'
      ],
      results: [
        'Successfully developed POCKET with high performance and an enhanced user experience',
        'Enabled users to easily track their personal finances',
        'Increased overall user satisfaction with intuitive interface and reliability'
      ],
      github: 'https://github.com/narephat6509650369/Pocket_App'
    },
    {
      id: 5,
      title: 'Tantawan Rent Books',
      subtitle: 'Online Book Rental Web Application',
      status: 'Live',
      icon: '📚',
      featured: false,
      tags: ['JavaScript', 'CSS', 'SQL', 'Responsive Design'],
      color: 'from-orange-600/20 to-amber-600/20',
      borderColor: 'border-orange-500/30',
      position: 'Frontend Developer',
      situation: 'Developed a web application for online book rental with SQL for data storage and management.',
      task: 'Design and implement the frontend, focusing on a responsive and user-friendly interface that connects to the database to manage book rentals.',
      actions: [
        'Used CSS and JavaScript for UI design and functionality development',
        'Connected the frontend to the SQL database for displaying and managing book data',
        'Worked closely with the backend team to ensure smooth integration'
      ],
      results: [
        'Delivered a functional and responsive web application',
        'Improved the user experience significantly',
        'Received positive feedback from users and stakeholders'
      ],
      github: 'https://github.com/narephat6509650369/TantawanRentBooks'
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
                My
              </span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
                Projects
              </span>
            </h1>
            <p className="text-gray-400 text-lg">A collection of my work showcasing design, development, and innovation</p>
          </div>

          {/* Featured Projects */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
              <span className="text-2xl">⭐</span>
              Featured Projects
            </h2>
            <div className="space-y-8">
              {projects.filter(p => p.featured).map((project) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                  className={`group bg-gradient-to-r ${project.color} backdrop-blur-md ${project.borderColor} border rounded-3xl p-10 hover:border-white/50 transition-all duration-300 cursor-pointer`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-6 items-start flex-1">
                      <div className="text-5xl">{project.icon}</div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                          <span className="text-xs px-3 py-1 bg-white/10 rounded-full text-white">
                            {project.status}
                          </span>
                        </div>
                        <p className="text-gray-400 text-lg mb-4">{project.subtitle}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="text-xs px-3 py-1 bg-white/10 border border-white/20 rounded-full text-gray-300 hover:text-white transition-colors"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <svg
                      className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                        selectedProject === project.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>

                  {/* Expandable Content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      selectedProject === project.id ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pt-6 border-t border-white/10 space-y-6">
                      <div>
                        <h4 className="text-lg font-bold text-purple-400 mb-2">Situation</h4>
                        <p className="text-gray-300">{project.situation}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-pink-400 mb-2">Task</h4>
                        <p className="text-gray-300">{project.task}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-blue-400 mb-3">Actions</h4>
                        <ul className="space-y-2">
                          {project.actions.map((action, i) => (
                            <li key={i} className="flex gap-3 text-gray-300">
                              <span className="text-purple-400 font-bold">•</span>
                              {action}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-green-400 mb-3">Results</h4>
                        <ul className="space-y-2">
                          {project.results.map((result, i) => (
                            <li key={i} className="flex gap-3 text-gray-300">
                              <span className="text-green-400 font-bold">✓</span>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {project.github && (
                        <div className="pt-4 border-t border-white/10">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            View on GitHub
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
              <span className="text-2xl">💼</span>
              Other Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.filter(p => !p.featured).map((project) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                  className={`group bg-gradient-to-r ${project.color} backdrop-blur-md ${project.borderColor} border rounded-2xl p-8 hover:border-white/50 transition-all duration-300 cursor-pointer hover:scale-105`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                        <span className="text-xs px-2 py-1 bg-white/10 rounded-full text-white">
                          {project.status}
                        </span>
                      </div>
                      <p className="text-gray-400 mb-3">{project.subtitle}</p>
                      {project.position && (
                        <p className="text-sm text-gray-400 mb-2">
                          <span className="font-semibold">Role:</span> {project.position}
                        </p>
                      )}
                    </div>
                    <div className="text-4xl">{project.icon}</div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-white/10 border border-white/20 rounded-full text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Expandable Mini Content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      selectedProject === project.id ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pt-4 border-t border-white/10 space-y-3 text-sm">
                      <div>
                        <p className="text-gray-400"><span className="text-purple-400 font-bold">Situation:</span> {project.situation}</p>
                      </div>
                      <div>
                        <p className="text-gray-400"><span className="text-pink-400 font-bold">Task:</span> {project.task}</p>
                      </div>
                      <div>
                        <h5 className="text-blue-400 font-bold mb-2">Actions</h5>
                        <ul className="space-y-1">
                          {project.actions.slice(0, 2).map((action, i) => (
                            <li key={i} className="text-gray-300 flex gap-2">
                              <span>•</span> {action}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {project.github && (
                        <div className="pt-3 border-t border-white/10">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 text-xs"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            GitHub
                          </a>
                        </div>
                      )}
                    </div>
                  </div>

                  <svg
                    className={`w-5 h-5 text-gray-400 mt-4 transition-transform duration-300 ${
                      selectedProject === project.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <Link to="/contact">
              <button className="group relative px-12 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-pink-600 hover:via-purple-600 hover:to-pink-600 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 uppercase tracking-wide">
                <div className="relative flex items-center gap-3">
                  <span>Get in Touch</span>
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </button>
            </Link>
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

export default Project;