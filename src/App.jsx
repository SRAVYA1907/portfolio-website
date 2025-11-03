import { useState, useEffect } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import './App.css'
import './responsive.css'

function App() {
  const [showMenu, setShowMenu] = useState(false)
  const [skillsOpen, setSkillsOpen] = useState({ programming: true, frameworks: false, technologies: false, tools: false })
  const [modalOpen, setModalOpen] = useState(null)
  const [state, handleSubmit] = useForm('mpwoenkv')

  const toggleSkills = (skill) => {
    setSkillsOpen(prev => ({
      ...prev,
      [skill]: !prev[skill]
    }))
  }

  const openModal = (modalId) => {
    setModalOpen(modalId)
  }

  const closeModal = () => {
    setModalOpen(null)
  }



  useEffect(() => {
    // Add floating elements
    const createFloatingElements = () => {
      const elements = ['circle', 'square'];
      for (let i = 0; i < 6; i++) {
        const element = document.createElement('div');
        const type = elements[Math.floor(Math.random() * elements.length)];
        element.className = `floating-element floating-${type}`;
        element.style.left = Math.random() * 100 + '%';
        element.style.top = Math.random() * 100 + '%';
        element.style.animationDelay = Math.random() * 8 + 's';
        document.body.appendChild(element);
      }
    };
    createFloatingElements();
    
    return () => {
      document.querySelectorAll('.floating-element').forEach(el => el.remove());
    };
  }, []);

  return (
    <div className="App">
      <header className="header" id="header">
        <nav className="nav container" style={{justifyContent: 'flex-start'}}>
          <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`} id="nav-menu">
            <ul className="nav__list grid">
              <li className="nav__item">
                <a href="#home" className="nav__link active-link" onClick={() => setShowMenu(false)}>
                  <i className="uil uil-estate nav__icon"></i>Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link" onClick={() => setShowMenu(false)}>
                  <i className="uil uil-user nav__icon"></i>About
                </a>
              </li>
              <li className="nav__item">
                <a href="#skills" className="nav__link" onClick={() => setShowMenu(false)}>
                  <i className="uil uil-file-alt nav__icon"></i>Skills
                </a>
              </li>
              <li className="nav__item">
                <a href="#qualification" className="nav__link" onClick={() => setShowMenu(false)}>
                  <i className="uil uil-briefcase-alt nav__icon"></i>Qualification
                </a>
              </li>
              <li className="nav__item">
                <a href="#work" className="nav__link" onClick={() => setShowMenu(false)}>
                  <i className="uil uil-scenery nav__icon"></i> Work Experience
                </a>
              </li>
              <li className="nav__item">
                <a href="#portfolio" className="nav__link" onClick={() => setShowMenu(false)}>
                  <i className="uil uil-scenery nav__icon"></i>Projects
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link" onClick={() => setShowMenu(false)}>
                  <i className="uil uil-message nav__icon"></i>Contact-Me
                </a>
              </li>
            </ul>
            <i className="uil uil-times nav__close" onClick={() => setShowMenu(false)}></i>
          </div>
          <div className="nav__btns">
            <div className="nav__toggle" onClick={() => setShowMenu(true)}>
              <i className="uil uil-apps"></i>
            </div>
          </div>
        </nav>
      </header>

      <main className="main">
        {/* Home Section */}
        <section className="home section" id="home">
          <div className="home__container container grid">
            <div className="home__content grid">
              <div className="home__social">
                <a href="https://www.linkedin.com/in/telanakula-venkata-sravya-a5646821a/" target="_blank" className="home__social-icon">
                  <i className="uil uil-linkedin-alt home__icon"></i>
                </a>
                <a href="https://github.com/SRAVYA1907" target="_blank" className="home__social-icon">
                  <i className="uil uil-github-alt home__icon"></i>
                </a>
              </div>
              <div className="home__img">
                <img src="/assets/img/profile.jpeg" alt="Profile" className="home__profile-img" />
              </div>
              <div className="home__data">
                <h1 className="home__title">Hi,I'm Sravya Telanakula</h1>
                <h3 className="home__subtitle">AI Engineer & Machine Learning Specialist</h3>
                <p className="home__description">
                  Passionate AI Engineer specializing in machine learning, deep learning, and intelligent systems. Experienced in developing cutting-edge AI solutions, predictive models, and data-driven applications. Committed to advancing artificial intelligence technology and creating innovative solutions that solve real-world problems.
                </p>
                <a href="#contact" className="button button--flex">
                  Contact me<i className="uil uil-message button__icon"></i>
                </a>
              </div>
            </div>
            <div className="home__scroll">
              <a href="#about" className="home__scroll-button button--flex">
                <i className="uil uil-mouse-alt home__scroll-mouse"></i>
                <span className="home__scroll-name">Scroll down</span>
                <i className="uil uil-arrow-down home__scroll-arrow"></i>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="about section" id="about">
          <h2 className="section__title">About Me</h2>
          <span className="section__subtitle">My Introduction</span>
          <div className="about__container container grid">
            <img src="/assets/img/about.jpeg" alt="" className="about__img" />
            <div className="about__data">
              <p className="about__description">
                I'm an AI Engineer with expertise in machine learning, neural networks, and intelligent systems. Passionate about developing innovative AI solutions that transform industries and solve complex problems. I specialize in deep learning, computer vision, and natural language processing with hands-on experience in cutting-edge AI technologies.
              </p>
              <div className="about__info">
                <div>
                  <span className="about__info-title">8.45</span>
                  <span className="about__info-name">Aggregate <br />CGPA</span>
                </div>
                <div>
                  <span className="about__info-title">11+</span>
                  <span className="about__info-name">Projects</span>
                </div>
                <div>
                  <span className="about__info-title">2+</span>
                  <span className="about__info-name">Years <br />experience</span>
                </div>
              </div>
              <div className="about__buttons">
                <a download="" href="/assets/mycv.pdf" className="button button--flex">
                  Download CV<i className="fas fa-download button__icon"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills section" id="skills">
          <h2 className="section__title">Skills</h2>
          <span className="section__subtitle">My Technical Level</span>
          <div className="skills__container container grid">
            <div>
              {/* Programming Languages */}
              <div className={`skills__content ${skillsOpen.programming ? 'skills__open' : 'skills__close'}`}>
                <div className="skills__header" onClick={() => toggleSkills('programming')}>
                  <i className="fas fa-pencil-ruler skills__icon"></i>
                  <div>
                    <h1 className="skills__title">Programming Languages</h1>
                  </div>
                  <i className="uil uil-angle-down skills__arrow"></i>
                </div>
                <div className="skills__list grid">
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Java</h3>
                      <span className="skills__nuber">85%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__html"></span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Python</h3>
                      <span className="skills__nuber">90%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__css"></span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">SQL</h3>
                      <span className="skills__nuber">80%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__js"></span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">JavaScript</h3>
                      <span className="skills__nuber">75%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__react"></span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">C#</h3>
                      <span className="skills__nuber">70%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__node"></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Frontend Technologies */}
              <div className={`skills__content ${skillsOpen.frameworks ? 'skills__open' : 'skills__close'}`}>
                <div className="skills__header" onClick={() => toggleSkills('frameworks')}>
                  <i className="fas fa-code skills__icon"></i>
                  <div>
                    <h1 className="skills__title">Frontend Technologies</h1>
                  </div>
                  <i className="uil uil-angle-down skills__arrow"></i>
                </div>
                <div className="skills__list grid">
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Angular</h3>
                      <span className="skills__nuber">75%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__html"></span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">HTML</h3>
                      <span className="skills__nuber">85%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__css"></span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">CSS</h3>
                      <span className="skills__nuber">80%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__js"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              {/* Technologies & Libraries */}
              <div className={`skills__content ${skillsOpen.technologies ? 'skills__open' : 'skills__close'}`}>
                <div className="skills__header" onClick={() => toggleSkills('technologies')}>
                  <i className="fas fa-cogs skills__icon"></i>
                  <div>
                    <h1 className="skills__title">Technologies & Libraries</h1>
                  </div>
                  <i className="uil uil-angle-down skills__arrow"></i>
                </div>
                <div className="skills__list grid">
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">NumPy</h3>
                      <span className="skills__nuber">85%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__html"></span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Pandas</h3>
                      <span className="skills__nuber">90%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__css"></span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Matplotlib</h3>
                      <span className="skills__nuber">80%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__js"></span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Scikit-learn</h3>
                      <span className="skills__nuber">85%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__react"></span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Flask</h3>
                      <span className="skills__nuber">75%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__node"></span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">.NET</h3>
                      <span className="skills__nuber">70%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__php"></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tools & Platforms */}
              <div className={`skills__content ${skillsOpen.tools ? 'skills__open' : 'skills__close'}`}>
                <div className="skills__header" onClick={() => toggleSkills('tools')}>
                  <i className="fas fa-tools skills__icon"></i>
                  <div>
                    <h1 className="skills__title">Tools & Platforms</h1>
                  </div>
                  <i className="uil uil-angle-down skills__arrow"></i>
                </div>
                <div className="skills__list grid">
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Machine Learning</h3>
                      <span className="skills__nuber">85%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__html"></span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Data Analysis</h3>
                      <span className="skills__nuber">90%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__css"></span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">PowerBI</h3>
                      <span className="skills__nuber">75%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__js"></span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Git</h3>
                      <span className="skills__nuber">80%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__react"></span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Docker</h3>
                      <span className="skills__nuber">70%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__node"></span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">MongoDB</h3>
                      <span className="skills__nuber">75%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__php"></span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">LLMs & RAG</h3>
                      <span className="skills__nuber">80%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__js"></span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Prompt Engineering</h3>
                      <span className="skills__nuber">85%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__react"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Qualification Section */}
        <section className="qualification__section service__section" id="qualification">
          <h2 className="section__title">Qualification</h2>
          <span className="section__subtitle">My Personal Journey</span>
          <div className="qualification__container container grid services__container">
            <div className="qualification__tabs">
              <div className="qualification__button button--flex qualification__active">
                <i className="uil uil-graduation-cap qualification__icon"></i>
                Education
              </div>
            </div>
            <div className="qualification__sections">
              <div className="qualification__content qualifiation__active services__content">
                {/* SSC */}
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">SSC</h3>
                    <span className="qualification__subtitle">Sri Chaitanya Techno School<br />High School</span>
                    <div className="qualification__calender">
                      <i className="uil uil-calendar-alt"></i>
                      - 2018
                    </div>
                    <span className="button button--flex button--small button--link services__button" onClick={() => openModal('ssc')}>
                      View More
                      <i className="uil uil-arrow-right button__icon"></i>
                    </span>
                  </div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>

                {/* Class 12th */}
                <div className="qualification__data">
                  <div></div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                  <div>
                    <h3 className="qualification__title">Class 12th</h3>
                    <span className="qualification__subtitle">Sri Chaitanya College<br />Pre University College</span>
                    <div className="qualification__calender">
                      <i className="uil uil-calendar-alt"></i>
                      - 2020
                    </div>
                    <span className="button button--flex button--small button--link services__button" onClick={() => openModal('class12')}>
                      View More
                      <i className="uil uil-arrow-right button__icon"></i>
                    </span>
                  </div>
                </div>

                {/* B.Tech */}
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">B.Tech</h3>
                    <span className="qualification__subtitle">MLR Institute of Technology<br />Under Graduate</span>
                    <div className="qualification__calender">
                      <i className="uil uil-calendar-alt"></i>
                      2020 - 2024
                    </div>
                    <span className="button button--flex button--small button--link services__button" onClick={() => openModal('btech')}>
                      View More
                      <i className="uil uil-arrow-right button__icon"></i>
                    </span>
                  </div>
                  <div>
                    <span className="qualification__rounder"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="experience section" id="work">
          <h2 className="section__title">Work Experience</h2>
          <span className="section__subtitle">My Professional Journey</span>
          <div className="experience__wrapper">
            <div className="experience__container container">
              <div className="experience__sections">
              {/* Capgemini */}
              <div className="experience__content">
                <div className="experience__data">
                  <div>
                    <h3 className="experience__title">AI Engineer</h3>
                    <span className="experience__subtitle">Capgemini<br />Pune, India</span>
                    <div className="experience__calendar">
                      <i className="uil uil-calendar-alt"></i>
                      Dec 2024 - Present
                    </div>
                    <span className="button button--flex button--small button--link services__button" onClick={() => openModal('capgemini')}>
                      View Details
                      <i className="uil uil-arrow-right button__icon"></i>
                    </span>
                  </div>
                  <div>
                    <span className="experience__rounder"></span>
                    <span className="experience__line"></span>
                  </div>
                </div>
              </div>

              {/* RealPage */}
              <div className="experience__content">
                <div className="experience__data">
                  <div></div>
                  <div>
                    <span className="experience__rounder"></span>
                    <span className="experience__line"></span>
                  </div>
                  <div>
                    <h3 className="experience__title">Intern</h3>
                    <span className="experience__subtitle">RealPage India Private Limited<br />Hyderabad, India</span>
                    <div className="experience__calendar">
                      <i className="uil uil-calendar-alt"></i>
                      Dec 2023 - Dec 2024
                    </div>
                    <span className="button button--flex button--small button--link services__button" onClick={() => openModal('realpage')}>
                      View Details
                      <i className="uil uil-arrow-right button__icon"></i>
                    </span>
                  </div>
                </div>
              </div>

              {/* Tata */}
              <div className="experience__content">
                <div className="experience__data">
                  <div>
                    <h3 className="experience__title">Data Analyst Intern</h3>
                    <span className="experience__subtitle">Tata Advanced Systems Limited<br />Hyderabad, India</span>
                    <div className="experience__calendar">
                      <i className="uil uil-calendar-alt"></i>
                      Dec 2022 - Jun 2023
                    </div>
                    <span className="button button--flex button--small button--link services__button" onClick={() => openModal('tata')}>
                      View Details
                      <i className="uil uil-arrow-right button__icon"></i>
                    </span>
                  </div>
                  <div>
                    <span className="experience__rounder"></span>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="portfolio section" id="portfolio">
          <h2 className="section__title">Projects</h2>
          <span className="section__subtitle">Most recent work</span>
          <div className="portfolio__container container">
            <div className="portfolio__content grid">
              <div className="portfolio__data">
                <h3 className="portfolio__title">CNC Machine Failure Prediction</h3>
                <p className="portfolio__description">
                  The goal of this project was to develop a machine learning model using LightGBM to predict failures in CNC (Computer Numerical Control) machines. CNC machines are widely used in manufacturing processes and any unexpected failure can result in significant downtime and production losses. By accurately predicting failures in advance, maintenance can be scheduled proactively, minimizing downtime and improving overall operational efficiency.
                </p>
                <a href="https://github.com/SRAVYA1907/machine" className="button button--flex button--small portfolio__button">
                  GitHub Repository
                  <i className="uil uil-external-link-alt button__icon"></i>
                </a>
              </div>
            </div>

            <div className="portfolio__content grid">
              <div className="portfolio__data">
                <h3 className="portfolio__title">Twitter Sentiment Analysis to Predict Elections</h3>
                <p className="portfolio__description">
                  The objective of this project was to utilize sentiment analysis on Twitter data to predict election outcomes. Twitter provides a vast amount of user-generated content, including opinions and sentiments related to political events, making it a valuable resource for predicting public sentiment towards election candidates.
                </p>
                <a href="https://github.com/SRAVYA1907/Twitter-Sentimental-Analysis" className="button button--flex button--small portfolio__button">
                  GitHub Repository
                  <i className="uil uil-external-link-alt button__icon"></i>
                </a>
              </div>
            </div>

            <div className="portfolio__content grid">
              <div className="portfolio__data">
                <h3 className="portfolio__title">Face Recognition Attendance System</h3>
                <p className="portfolio__description">
                  The objective of this project is to develop a real-time face recognition attendance system using OpenCV, a powerful computer vision library. This system will be able to mark attendance by identifying individuals through their facial features. It will automate the attendance-taking process, making it more efficient, accurate, and seamless.
                </p>
                <a href="https://github.com/SRAVYA1907/Face-recognition-attendance-system" className="button button--flex button--small portfolio__button">
                  GitHub Repository
                  <i className="uil uil-external-link-alt button__icon"></i>
                </a>
              </div>
            </div>

            <div className="portfolio__content grid">
              <div className="portfolio__data">
                <h3 className="portfolio__title">Sorting Visualizer</h3>
                <p className="portfolio__description">
                  Sorting Visualizer is a Java-based project that allows users to visualize various sorting algorithms in action using a Graphical User Interface (GUI). It provides an interactive and educational way to understand how different sorting algorithms work by visually demonstrating their step-by-step sorting process.
                </p>
                <a href="https://github.com/SRAVYA1907/Sorting-Visualizer-using-Java" className="button button--flex button--small portfolio__button">
                  GitHub Repository
                  <i className="uil uil-external-link-alt button__icon"></i>
                </a>
              </div>
            </div>

            <div className="portfolio__content grid">
              <div className="portfolio__data">
                <h3 className="portfolio__title">Website Design for Multiple Clients</h3>
                <p className="portfolio__description">
                  Designed and developed responsive websites for multiple clients across various industries. Created custom web solutions using modern technologies including HTML5, CSS3, JavaScript, React and Angular. Focused on user experience, mobile responsiveness, and performance optimization to deliver professional websites that meet client requirements and business objectives.
                </p>
                <a href="#contact" className="button button--flex button--small portfolio__button">
                  Contact for Details
                  <i className="uil uil-arrow-right button__icon"></i>
                </a>
              </div>
            </div>

            <div className="portfolio__content grid">
              <div className="portfolio__data">
                <h3 className="portfolio__title">Custom Chatbots for Clients</h3>
                <p className="portfolio__description">
                  Developed intelligent chatbots for various clients using advanced NLP techniques, LLMs, and RAG architecture. Created conversational AI solutions that handle customer queries, provide automated support, and integrate with existing business systems. Implemented using Python, LangChain, OpenAI APIs, and deployed on cloud platforms for scalable performance.
                </p>
                <a href="#contact" className="button button--flex button--small portfolio__button">
                  Contact for Details
                  <i className="uil uil-arrow-right button__icon"></i>
                </a>
              </div>
            </div>

            <div className="portfolio__content grid">
              <div className="portfolio__data">
                <h3 className="portfolio__title">AI-Powered FAQ Chatbot with RAG (2024)</h3>
                <p className="portfolio__description">
                  Developed RAG-based chatbot using GPT-4 for answering questions from internal documents and PDFs. The system combines retrieval-augmented generation with advanced language models to provide accurate, context-aware responses. Technologies used: LangChain, OpenAI, FAISS, Streamlit for creating an intelligent document query system.
                </p>
                <a href="#contact" className="button button--flex button--small portfolio__button">
                  Contact for Details
                  <i className="uil uil-arrow-right button__icon"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact section" id="contact">
          <h2 className="section__title">Contact Me</h2>
          <span className="section__subtitle">Get in touch</span>
          <div className="contact__container container grid">
            <div>
              <div className="contact__information">
                <i className="uil uil-calling contact__icon"></i>
                <div>
                  <h3 className="contact__title">Contact Me</h3>
                  <span className="contact__subtitle">8790967205</span>
                </div>
              </div>
              <div className="contact__information">
                <i className="uil uil-envelope-minus contact__icon"></i>
                <div>
                  <h3 className="contact__title">Email</h3>
                  <span className="contact__subtitle">tsravya1308@gmail.com</span>
                </div>
              </div>
              <div className="contact__information">
                <i className="uil uil-map-marker contact__icon"></i>
                <div>
                  <h3 className="contact__title">Location</h3>
                  <span className="contact__subtitle">Hyderabad, Telangana, India</span>
                </div>
              </div>
            </div>
            {state.succeeded ? (
              <div className="contact__success">
                <h3>Thank you for your message!</h3>
                <p>I'll get back to you soon.</p>
              </div>
            ) : (
              <form className="contact__form grid" onSubmit={handleSubmit}>
                <div className="contact__inputs grid">
                  <div className="contact__content">
                    <label className="content__label">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      className="contact__input" 
                      required 
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>
                  <div className="contact__content">
                    <label className="content__label">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      className="contact__input" 
                      required 
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                </div>
                <div className="contact__content">
                  <label className="content__label">Message</label>
                  <textarea 
                    cols="0" 
                    rows="7" 
                    name="message"
                    className="contact__input"
                    required
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <div>
                  <button type="submit" disabled={state.submitting} className="button button--flex">
                    {state.submitting ? 'Sending...' : 'Send Message'}
                    <i className="uil uil-message button__icon"></i>
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer__bg">
          <div className="footer__container container">
            <div className="footer__content">
              <div className="footer__section footer__about">
                <h3>Sravya Telanakula</h3>
                <p>AI Engineer & Machine Learning Specialist passionate about artificial intelligence and innovation. Building intelligent systems that shape the future of technology.</p>
                <div className="footer__social">
                  <a href="https://www.linkedin.com/in/telanakula-venkata-sravya-a5646821a/" target="_blank" className="footer__social-link">
                    <i className="uil uil-linkedin-alt"></i>
                  </a>
                  <a href="https://github.com/SRAVYA1907" target="_blank" className="footer__social-link">
                    <i className="uil uil-github-alt"></i>
                  </a>
                  <a href="mailto:tsravya1308@gmail.com" className="footer__social-link">
                    <i className="uil uil-envelope-alt"></i>
                  </a>
                </div>
              </div>
              
              <div className="footer__section">
                <h3>Quick Links</h3>
                <ul className="footer__links">
                  <li><a href="#home" className="footer__link">Home</a></li>
                  <li><a href="#about" className="footer__link">About</a></li>
                  <li><a href="#skills" className="footer__link">Skills</a></li>
                  <li><a href="#portfolio" className="footer__link">Projects</a></li>
                </ul>
              </div>
              
              <div className="footer__section">
                <h3>Contact Info</h3>
                <div className="footer__contact-info">
                  <i className="uil uil-envelope"></i>
                  <span>tsravya1308@gmail.com</span>
                </div>
                <div className="footer__contact-info">
                  <i className="uil uil-phone"></i>
                  <span>8790967205</span>
                </div>
                <div className="footer__contact-info">
                  <i className="uil uil-map-marker"></i>
                  <span>Hyderabad, India</span>
                </div>
              </div>
            </div>
            
            <div className="footer__bottom">
              <p className="footer__copy">
                © 2024 Sravya Telanakula. All rights reserved.
              </p>
              <div className="footer__bottom-links">
                <a href="#" className="footer__bottom-link">Privacy Policy</a>
                <a href="#" className="footer__bottom-link">Terms of Service</a>
                <a href="#" className="footer__bottom-link">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {modalOpen && (
        <div className="services__modal active-modal">
          <div className="services__modal-content">
            <h4 className="services__modal-title">
              {modalOpen === 'ssc' && 'Class 10th Summary :'}
              {modalOpen === 'class12' && 'Class 12th Summary :'}
              {modalOpen === 'btech' && 'College Summary :'}
              {modalOpen === 'capgemini' && 'Achievements/Tasks:'}
              {modalOpen === 'realpage' && 'Achievements/Tasks:'}
              {modalOpen === 'tata' && 'Achievements/Tasks:'}
            </h4>
            <i className="uil uil-times services__modal-close" onClick={closeModal}></i>
            <ul className="services__modal-services grid">
              {modalOpen === 'ssc' && (
                <>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__moda-icon"></i>
                    <p>Subjects studied: Science, Maths, English, Social Studies,Telugu,Hindi.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__moda-icon"></i>
                    <p>Scored 93%</p>
                  </li>
                </>
              )}
              {modalOpen === 'class12' && (
                <>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__moda-icon"></i>
                    <p>Subjects studied: Physics, Chemistry, Maths, English, Sanskrit.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__moda-icon"></i>
                    <p>Scored 94.5%</p>
                  </li>
                </>
              )}
              {modalOpen === 'btech' && (
                <>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>Studying core subjects of Data Science including Machine Learning, Data Visualization, Data Cleaning, Data Analysis, Data Mining .</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>Scored an aggregate of 8.45 CGPA till now.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>Coordinator in Service to Mankind(NGO) of the college.</p>
                  </li>
                </>
              )}
              {modalOpen === 'capgemini' && (
                <>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__moda-icon"></i>
                    <p>Trained in machine learning, prompt engineering and .Net and Angular.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__moda-icon"></i>
                    <p>Developed a chatbot using retrieval-augmented generation (RAG) to answer queries from internal documents and web articles. Integrated LangChain, FAISS, and GPT-4 for context-aware responses via Streamlit.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__moda-icon"></i>
                    <p>Built a PDF-based Q&A system using Sentence Transformers, ChromaDB, and GPT-4. Implemented with FastAPI, LangChain, PyMuPDF, and HuggingFace embeddings for semantic retrieval.</p>
                  </li>
                </>
              )}
              {modalOpen === 'realpage' && (
                <>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__moda-icon"></i>
                    <p>Automated agent evaluation using Smartsheets and dashboards for performance insights.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__moda-icon"></i>
                    <p>Developed a Power Apps portal for interns to manage tasks, feedback, and KPIs.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__moda-icon"></i>
                    <p>Built a Playwright-based web scraper to extract 300+ property listings weekly.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__moda-icon"></i>
                    <p>Tools used: JavaScript, Power Apps, Power Automate, Smartsheets, MySQL.</p>
                  </li>
                </>
              )}
              {modalOpen === 'tata' && (
                <>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__moda-icon"></i>
                    <p>Built a predictive model to forecast CNC machine failures, reducing downtime by 40%.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__moda-icon"></i>
                    <p>Analyzed 45K+ operational records, improving maintenance scheduling by 30%.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__moda-icon"></i>
                    <p>Evaluated models with metrics: accuracy, precision, recall, F1-score.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__moda-icon"></i>
                    <p>Tools: Python, NumPy, SQL, XGBoost, LightGBM, Flask, ARIMA, RandomForest.</p>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default App