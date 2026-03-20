import './about.scss';
import Header from '../components/header';
import Footer from '../components/footer';

function About() {
  return (
    <>
      <Header />

      <section id="about">

        <h2>👨‍💻 About Me</h2>

        {/* Intro */}
        <div className="about-card fade-in">
          <p>
            Hello! I'm <strong>Hassan Mohammadi</strong> 🇫🇷, a passionate and motivated 
            <strong> full-stack web developer</strong>.
          </p>

          <p>
            My journey started from a very young age. Since childhood, I have always loved 
            <strong> 🎮 gaming</strong> and technology. That passion naturally led me to explore 
            the world of <strong>💻 computer science</strong>.
          </p>
        </div>

        {/* Experience */}
        <div className="about-card fade-in">
          <h3>🔧 Early Experience</h3>
          <p>
            I started working at the age of <strong>15</strong> in <strong>Iran 🇮🇷</strong>, 
            where I gained real-world experience in <strong>mobile phone repair</strong>.
          </p>

          <p>
            During this time, I worked with professional tools like:
          </p>

          <ul>
            <li>⚙️ Z3X Box</li>
            <li>⚙️ Best Dongle</li>
            <li>⚙️ Infinity Best Dongle</li>
            <li>⚙️ Octoplus Box</li>
            <li>⚙️ And many more...</li>
          </ul>

          <p>
            This experience helped me develop strong <strong>problem-solving skills</strong>, 
            patience, and a deep understanding of how technology works at a low level.
          </p>
        </div>

        {/* Current Life */}
        <div className="about-card fade-in">
          <h3>🌍 Today</h3>

          <p>
            Today, I am <strong>22 years old</strong> and living in <strong>France 🇫🇷</strong>, 
            where I continue my journey in technology.
          </p>

          <p>
            I am currently studying at <strong>Bordeaux University 🎓</strong>, 
            improving my knowledge and building modern web applications.
          </p>

          <p>
            I combine my practical experience with modern technologies like 
            <strong> React, Next.js, Express.js, and MySQL</strong> to build 
            fast and professional websites.
          </p>
        </div>

        {/* Personality */}
        <div className="about-card fade-in">
          <h3>🔥 My Mindset</h3>

          <p>
            I am young, ambitious, and highly motivated. I am always learning, 
            always improving, and always looking for new challenges.
          </p>

          <p>
            My goal is to create <strong>high-quality digital experiences</strong> 
            that help businesses grow and stand out online.
          </p>

          <p>
            I don’t just build websites — I build solutions. 🚀
          </p>
        </div>

        {/* CTA */}
        <div className="about-card highlight fade-in">
          <h3>🚀 Let’s Work Together</h3>
          <p>
            If you're looking for a passionate developer who truly cares about your project, 
            I’m here to help you build something amazing.
          </p>
        </div>

      </section>

      <Footer />
    </>
  );
}

export default About;