import "./App.css";
import{ Download } from "lucide-react";

function App() {
  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-logo">Divya.</div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
        </div>

        <a className="nav-contact" href="#contact">
          Contact
        </a>
      </nav>


      {/* HERO */}
      <section className="hero-section">

        <div className="hero-content">

          <div className="hero-badge">
            <span></span>
            Available for opportunities
          </div>

          <p className="hero-small-text">
            Hello, I'm
          </p>

          <h1>
            Divya Naga Sri Akula<span>.</span>
          </h1>

          <h2>
            Computer Science Engineer <span>·</span> Software Developer
          </h2>

          <p className="hero-description">
            I'm an Integrated M.Tech Computer Science student passionate about
            software development, problem solving and building practical,
            user-focused applications.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Work →
            </a>
            <a
             href="/Resume.pdf"
             download="Divya_Naga_Sri_Resume.pdf"
             className="secondary-btn"
             >
              Download Resume 
              <Download size={19}
              strokeWidth={2.5}/>
             </a>
            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="social-links">

            <a
              href="https://github.com/Divya7034"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/akula-divya-naga-sri-871b62275/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:akuladivyateja123@gmail.com">
              Email
            </a>

          </div>

        </div>


        {/* PROFILE PHOTO */}
        <div className="hero-visual">

          <div className="profile-glow"></div>

          <div className="profile-card">

            <div className="profile-image-wrapper">
              <img
                src="/profile.jpg"
                alt="Divya Naga Sri"
                className="profile-image"
              />
            </div>

          </div>



        </div>

      </section>


      <div className="scroll-indicator">
        ↓ Scroll to explore
      </div>


      {/* ABOUT */}
      <section className="section" id="about">

        <p className="section-label">
          01 — ABOUT ME
        </p>

        <h2 className="section-title">
          Building technology with
          <span> curiosity & purpose.</span>
        </h2>

        <div className="about-content">

          <div className="about-text">

            <p className="section-text">
              I am an Integrated M.Tech Computer Science and Engineering
              student at VIT-AP University with a strong foundation in
              programming, data structures, databases and software development.
            </p>

            <p className="section-text">
              I enjoy solving problems and building practical applications
              using technologies such as Java, Python, SQL and web
              technologies.
            </p>

            <p className="section-text">
              I am continuously learning new technologies and improving my
              skills to become a well-rounded software developer.
            </p>

          </div>

          <div className="about-stats">

            <div className="stat-card">
              <strong>9.01</strong>
              <span>CGPA</span>
            </div>

            <div className="stat-card">
              <strong>3</strong>
              <span>Projects</span>
            </div>

            <div className="stat-card">
            <strong>2027</strong>
            <span>Graduation</span>
            </div>

            <div className="stat-card">
              <strong>5+</strong>
              <span>Core Skills</span>
            </div>

          </div>

        </div>

      </section>


      {/* SKILLS */}
      <section className="section" id="skills">

        <p className="section-label">
          02 — TECHNICAL SKILLS
        </p>

        <h2 className="section-title">
          Technologies I use to
          <span> build.</span>
        </h2>

        <div className="skills-grid">

          {/* LANGUAGES */}
          <div className="skill-card">
            <div className="skill-icon">
              &lt;/&gt;
            </div>

            <h3>Languages</h3>

            <div className="skill-tags">
              <span>Java</span>
              <span>Python</span>
              <span>SQL</span>
              <span>JavaScript</span>
            </div>
          </div>


          {/* WEB */}
          <div className="skill-card">
            <div className="skill-icon">
              &lt;/&gt;
            </div>

            <h3>Web Technologies</h3>

            <div className="skill-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
            </div>
          </div>


          {/* DATABASE */}
          <div className="skill-card">
            <div className="skill-icon">
              ▣
            </div>

            <h3>Database</h3>

            <div className="skill-tags">
              <span>MySQL</span>
              <span>DBMS</span>
              <span>SQL</span>
            </div>
          </div>


          {/* CORE */}
          <div className="skill-card">
            <div className="skill-icon">
              ◈
            </div>

            <h3>Core Concepts</h3>

            <div className="skill-tags">
              <span>DSA</span>
              <span>OOP</span>
              <span>Operating Systems</span>
              <span>Computer Networks</span>
            </div>
          </div>


          {/* TOOLS */}
          <div className="skill-card">
            <div className="skill-icon">
              ⚒
            </div>

            <h3>Tools</h3>

            <div className="skill-tags">
              <span>Git</span>
              <span>GitHub</span>
              <span>Docker</span>
              <span>VS Code</span>
            </div>
          </div>

        </div>

      </section>


      {/* PROJECTS */}
      <section className="section" id="projects">

        <p className="section-label">
          03 — FEATURED PROJECTS
        </p>

        <h2 className="section-title">
          Things I've
          <span> built.</span>
        </h2>


        <div className="projects-grid">

          {/* PROJECT 1 */}
          <div className="project-card">

            <div className="project-number">
              01
            </div>

            <p className="project-category">
              DEEP LEARNING PROJECT
            </p>

            <h3>
              Skin Cancer Detection & Risk Assessment
            </h3>

            <p>
              An AI-assisted system that analyzes dermoscopic skin-lesion
              images using ensemble deep learning models and provides
              classification, confidence estimation, risk assessment and
              visual explanations using Grad-CAM.
            </p>

            <div className="project-tech">
              <span>Python</span>
              <span>TensorFlow</span>
              <span>Flask</span>
              <span>Grad-CAM</span>
            </div>

          </div>


          {/* PROJECT 2 */}
          <div className="project-card">

            <div className="project-number">
              02
            </div>

            <p className="project-category">
              SYSTEMS PROJECT
            </p>

            <h3>
              Dynamic Resource Allocation for SaaS
            </h3>

            <p>
              A containerized multi-tenant SaaS simulation that dynamically
              adjusts CPU allocation between tenants based on resource
              utilization to reduce the noisy-neighbor problem.
            </p>

            <div className="project-tech">
              <span>Python</span>
              <span>Docker</span>
              <span>Docker SDK</span>
              <span>WSL2</span>
            </div>

          </div>


          {/* PROJECT 3 */}
          <div className="project-card">

            <div className="project-number">
              03
            </div>

            <p className="project-category">
              SOFTWARE APPLICATION
            </p>

            <h3>
              Hospital Management System
            </h3>

            <p>
              A software application designed to manage hospital operations,
              including patient information, doctor details, appointments
              and other essential hospital records through a structured
              system.
            </p>

            <div className="project-tech">
              <span>Java</span>
              <span>OOP</span>
              <span>DBMS</span>
              <span>SQL</span>
            </div>

          </div>

        </div>

      </section>


      {/* EDUCATION */}
<section className="section" id="education">

  <p className="section-label">
    04 — EDUCATION
  </p>

  <h2 className="section-title">
    My academic
    <span> journey.</span>
  </h2>

  <div className="education-grid">

    {/* COLLEGE */}
    <div className="education-card">

      <div className="education-year">
        2022 — 2027
      </div>

      <p className="education-label">
        INTEGRATED M.TECH
      </p>

      <h3>
        VIT-AP University
      </h3>

      <p>
        Computer Science and Engineering
      </p>

      <div className="education-score">
        <strong>9.01</strong>
        <span>CGPA</span>
      </div>

    </div>


    {/* INTERMEDIATE */}
    <div className="education-card">

      <div className="education-year">
        2020 — 2022
      </div>

      <p className="education-label">
        INTERMEDIATE
      </p>

      <h3>
        NARAYANA JUNIOR COLLEGE
      </h3>

      <p>
        Intermediate Education
      </p>

      <div className="education-score">
        <strong>937</strong>
        <span>/ 1000</span>
      </div>

    </div>


    {/* SCHOOL */}
    <div className="education-card">

      <div className="education-year">
        2019 — 2020
      </div>

      <p className="education-label">
        SCHOOLING
      </p>

      <h3>
        APPLE EM HIGH SCHOOL
      </h3>

      <p>
        Secondary School Education
      </p>

      <div className="education-score">
        <strong>571</strong>
        <span>/ 600</span>
      </div>

    </div>

  </div>

</section>


      {/* CONTACT */}
      <section className="contact-section" id="contact">

        <p className="section-label">
          05 — CONTACT
        </p>

        <h2>
          Let's build something
          <span> together.</span>
        </h2>

        <p>
          I'm open to internships and software engineering opportunities
          where I can learn, contribute and grow as a developer.
        </p>

        <a
          href="mailto:akuladivyateja123@gmail.com"
          className="primary-btn"
        >
          Get In Touch ✉
        </a>

        <div className="contact-links">

          <a
            href="https://github.com/Divya7034"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/akula-divya-naga-sri-871b62275/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

          <a href="mailto:akuladivyateja123@gmail.com">
            Email ↗
          </a>

        </div>

      </section>


      {/* FOOTER */}
      <footer>
        <span>
          © 2026 Divya Naga Sri
        </span>

        <span>
          Built with React
        </span>
      </footer>

    </div>
  );
}

export default App;