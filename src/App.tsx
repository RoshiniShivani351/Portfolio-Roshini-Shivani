import { useState } from 'react';
import { Github, Linkedin, Mail, Download, ExternalLink, Menu, X, Code2, Laptop, Sun, MessageCircle, Users, Target, Lightbulb, Clock, Send } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('Message sent! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setFormStatus(''), 3000);
  };

  const projects = [
    {
      title: 'Employee Management System',
      description: 'A React CRUD application to manage employees with Add, View, Edit & Delete functionality using JSON server as backend.',
      tech: 'React, React Router, JSON Server, Fetch API, CSS',
      github: 'https://employee-records-management-sand.vercel.app/', 
      image: 'https://ik.imagekit.io/r48jes3mmv/EMS.webp?updatedAt=1762194875280'
    },

    {
      title: 'Brain Stroke Prediction System Using Linear Regression',
      description: 'A Flask web application that predicts the risk of brain stroke using a Linear Regression model. Implemented data preprocessing, model training, and real-time prediction based on user input..',
      tech: 'Python, Flask, Linear Regression, HTML, CSS',
      github: 'https://github.com/RoshiniShivani351/Brain-Stroke-Prediction-System', 
      demo: 'https://brain-stroke-prediction-system-production.up.railway.app',
      image: 'https://ik.imagekit.io/r48jes3mmv/brain.jpg?updatedAt=1762194875196'
    },

     {
      title: 'Bakery E-Commerce Website',
      description: 'A frontend bakery website featuring product browsing, search functionality, and cart management using JavaScript and LocalStorage. Built to demonstrate DOM manipulation, UI design, and client-side state persistence.',
      tech: 'HTML, CSS, JavaScript, LocalStorage',
      github: 'https://bakery-e-commerce-website-blond.vercel.app/', 
      image: 'https://ik.imagekit.io/r48jes3mmv/cupcake1.jpg.webp'
    }
  ];

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      {/* Navigation */}
      <nav className="fixed w-full bg-brand-bg/95 backdrop-blur-sm z-50 border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Code2 className="w-6 h-6 text-brand-accent" />
              <span className="text-xl font-bold text-brand-accent">
                RST
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-brand-text-secondary hover:text-brand-accent transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-brand-text-secondary hover:text-brand-accent transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-brand-text-secondary hover:text-brand-accent transition-colors">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="text-brand-text-secondary hover:text-brand-accent transition-colors">Projects</button>
              <button onClick={() => scrollToSection('education')} className="text-brand-text-secondary hover:text-brand-accent transition-colors">Education</button>
              <button onClick={() => scrollToSection('contact')} className="text-brand-text-secondary hover:text-brand-accent transition-colors">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-brand-text-secondary hover:text-brand-accent transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-brand-bg border-t border-brand-border">
            <div className="px-4 py-3 space-y-3">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left text-brand-text-secondary hover:text-brand-accent transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-brand-text-secondary hover:text-brand-accent transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="block w-full text-left text-brand-text-secondary hover:text-brand-accent transition-colors">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left text-brand-text-secondary hover:text-brand-accent transition-colors">Projects</button>
              <button onClick={() => scrollToSection('education')} className="block w-full text-left text-brand-text-secondary hover:text-brand-accent transition-colors">Education</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-brand-text-secondary hover:text-brand-accent transition-colors">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-brand-accent">
            <span className="text-[#00fff0]">Roshini Shivani Tanari</span> 
          </h1>
          <p className="text-xl sm:text-2xl text-brand-text-secondary mb-8">
            Java Full Stack Developer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-brand-accent text-brand-bg rounded-lg font-semibold hover:opacity-90 transition-all transform hover:scale-105"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-brand-accent rounded-lg font-semibold text-brand-accent hover:bg-brand-accent/10 transition-all transform hover:scale-105"
            >
              Contact Me
            </button>
          </div>
          <div className="flex justify-center gap-6 mt-12">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-brand-text-secondary hover:text-brand-accent transition-colors transform hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-brand-text-secondary hover:text-brand-accent transition-colors transform hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:roshini@example.com" className="text-brand-text-secondary hover:text-brand-accent transition-colors transform hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-bg/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-[#00fff0]">
            About Me
          </h2>
          <div className="bg-brand-card rounded-2xl p-8 border border-brand-border shadow-xl">
            <pre><p className="text-lg text-brand-text leading-relaxed">
             I'm a passionate Java Full Stack Developer dedicated to creating elegant and efficient<br/>
             web applications. With a strong foundation in modern technologies like React,SpringBoot<br/> 
            and Boot Strap, I transform ideas into functional, user-friendly solutions.<br/>
              <br></br>
             My passion lies in developing scalable systems, writing clean code, and continuously<br/>
             learning new technologies that enhance user experience. From designing RESTful APIs<br/>
             to building responsive interfaces, I’m dedicated to creating efficient, maintainable,<br/>
             and impactful software that makes a difference.<br/>
            </p></pre>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center text-[#00fff0]">
            Skills & Abilities
          </h2>
          <p className="text-brand-text-secondary text-center mb-16 max-w-3xl mx-auto">
            A comprehensive skill set combining technical proficiency with essential soft skills
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <div className="bg-brand-card rounded-3xl p-8 border border-brand-border">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-brand-accent/20 p-2 rounded-lg">
                  <Laptop className="w-6 h-6 text-brand-accent" />
                </div>
                <h3 className="text-2xl font-bold text-brand-text">Technical Skills</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: 'HTML', icon: '🌐' },
                  { name: 'CSS', icon: '🎨' },
                  { name: 'JavaScript', icon: '⚡' },
                  { name: 'Java', icon: '☕' },
                  { name: 'MySQL', icon: '🗄️' },
                  { name: 'React', icon: '⚛️' }
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-4 py-2.5 bg-brand-border/50 rounded-full border border-brand-border hover:border-brand-accent/50 transition-all"
                  >
                    <span className="text-xl">{skill.icon}</span>
                    <span className="text-brand-text font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-brand-card rounded-3xl p-8 border border-brand-border">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-brand-secondary/20 p-2 rounded-lg">
                  <Sun className="w-6 h-6 text-brand-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-brand-text">Soft Skills</h3>
              </div>
              <div className="space-y-4">
                {[
                  { name: 'Communication', icon: MessageCircle },
                  { name: 'Teamwork', icon: Users },
                  { name: 'Leadership', icon: Target },
                  { name: 'Problem Solving', icon: Lightbulb },
                  { name: 'Time Management', icon: Clock }
                ].map((skill) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-brand-border/50 transition-all"
                    >
                      <div className="bg-brand-accent/20 p-2 rounded-lg">
                        <IconComponent className="w-5 h-5 text-brand-accent" />
                      </div>
                      <span className="text-brand-text font-medium">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-bg/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#00fff0]">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-brand-card rounded-2xl overflow-hidden border border-brand-border shadow-xl hover:border-brand-accent/50 transition-all transform hover:scale-105 group">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-bg to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-brand-accent">{project.title}</h3>
                  <p className="text-brand-text-secondary text-sm mb-4">{project.description}</p>
                  <p className="text-xs text-brand-text-secondary mb-4">{project.tech}</p>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-accent hover:text-brand-accent/80 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">View Project</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#00fff0]">
            Education
          </h2>
          <div className="space-y-6">
            {/* B.Tech */}
            <div className="bg-brand-card rounded-2xl p-8 border border-brand-border shadow-xl hover:border-brand-accent/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-brand-accent/20 p-3 rounded-lg border border-brand-border">
                  <Code2 className="w-8 h-8 text-brand-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-2xl font-bold text-brand-accent">B.Tech in Computer Science Engineering</h3>
                    <span className="text-brand-text-secondary text-sm sm:text-base mt-1 sm:mt-0">(2021 - 2025)</span>
                  </div>
                  <p className="text-lg text-brand-text mb-1">Miracle Educational Society Group of Institutions</p>
                  <p className="text-brand-accent font-semibold">CGPA: 7.71</p>
                </div>
              </div>
            </div>

            {/* Intermediate */}
            <div className="bg-brand-card rounded-2xl p-8 border border-brand-border shadow-xl hover:border-brand-accent/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-brand-accent/20 p-3 rounded-lg border border-brand-border">
                  <Code2 className="w-8 h-8 text-brand-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-2xl font-bold text-brand-accent">Intermediate (MPC)</h3>
                    <span className="text-brand-text-secondary text-sm sm:text-base mt-1 sm:mt-0">(2019 - 2021)</span>
                  </div>
                  <p className="text-lg text-brand-text mb-1">Srinivasa Junior College</p>
                  <p className="text-brand-accent font-semibold">Percentage: 71.4%</p>
                </div>
              </div>
            </div>

            {/* SSC */}
            <div className="bg-brand-card rounded-2xl p-8 border border-brand-border shadow-xl hover:border-brand-accent/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-brand-accent/20 p-3 rounded-lg border border-brand-border">
                  <Code2 className="w-8 h-8 text-brand-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-2xl font-bold text-brand-accent">Secondary School Certificate (SSC)</h3>
                    <span className="text-brand-text-secondary text-sm sm:text-base mt-1 sm:mt-0">(2018 - 2019)</span>
                  </div>
                  <p className="text-lg text-brand-text mb-1">Sri Chaitanya School</p>
                  <p className="text-brand-accent font-semibold">CGPA: 8.3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-bg/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-[#00fff0]">
            Resume
          </h2>
          <p className="text-brand-text-secondary mb-8">Download my resume to learn more about my experience and qualifications.</p>
          <a
            href="/ROSHINI_SHIVANI.pdf"
            download="Roshini_Shivani_Resume.pdf"
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand-accent text-brand-bg rounded-lg font-semibold hover:opacity-90 transition-all transform hover:scale-105"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <button className="inline-flex items-center gap-2 px-6 py-2 border border-brand-accent rounded-full text-brand-accent text-sm mb-6 hover:bg-brand-accent/10 transition-all">
              <Mail className="w-4 h-4" />
              Get In Touch
            </button>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center text-[#00fff0]">
            Let's Connect
          </h2>
          <p className="text-brand-text-secondary text-center mb-16 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-brand-card rounded-3xl p-8 border border-brand-border">
              <h3 className="text-2xl font-bold text-brand-text mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="w-full px-4 py-3 bg-brand-border/30 border border-brand-border rounded-xl focus:outline-none focus:border-brand-accent transition-colors text-brand-text placeholder-brand-text-secondary"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="w-full px-4 py-3 bg-brand-border/30 border border-brand-border rounded-xl focus:outline-none focus:border-brand-accent transition-colors text-brand-text placeholder-brand-text-secondary"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-brand-border/30 border border-brand-border rounded-xl focus:outline-none focus:border-brand-accent transition-colors text-brand-text placeholder-brand-text-secondary resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-accent hover:opacity-90 rounded-xl font-semibold text-brand-bg transition-all transform hover:scale-[1.02]"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
                {formStatus && (
                  <p className="text-center text-brand-accent text-sm">{formStatus}</p>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="bg-brand-card rounded-3xl p-8 border border-brand-border">
              <h3 className="text-2xl font-bold text-brand-text mb-6">Connect With Me</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-brand-border/50 rounded-xl hover:bg-brand-border/80 transition-all">
                  <div className="bg-brand-accent/20 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-brand-text-secondary mb-1">Email</p>
                    <a href="mailto:roshinishivani52@gmail.com" className="text-brand-text hover:text-brand-accent transition-colors">
                      roshinishivani52@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-brand-border/50 rounded-xl hover:bg-brand-border/80 transition-all">
                  <div className="bg-brand-accent/20 p-3 rounded-lg">
                    <Linkedin className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-brand-text-secondary mb-1">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/roshini-shivani" target="_blank" rel="noopener noreferrer" className="text-brand-text hover:text-brand-accent transition-colors">
                      www.linkedin.com/in/roshini-shivani
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-brand-border/50 rounded-xl hover:bg-brand-border/80 transition-all">
                  <div className="bg-brand-accent/20 p-3 rounded-lg">
                    <Github className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-brand-text-secondary mb-1">GitHub</p>
                    <a href="https://github.com/RoshiniShivani351" target="_blank" rel="noopener noreferrer" className="text-brand-text hover:text-brand-accent transition-colors">
                      https://github.com/RoshiniShivani351
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-card border-t border-brand-border py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-brand-text-secondary">
            Built with React & Tailwind CSS
          </p>
          <p className="text-brand-text-secondary text-sm mt-2">
            © 2025 <span className="text-[#00fff0]">Roshini Shivani</span> Tanari. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;



