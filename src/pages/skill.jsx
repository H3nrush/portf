import './skills.scss';

import { DiReact, DiMysql, DiHtml5, DiCss3, DiJavascript, DiSass } from 'react-icons/di';
import { SiNextdotjs, SiExpress, SiFigma, SiTailwindcss, SiTypescript } from 'react-icons/si';
import Header from '../components/header';
import Footer from '../components/footer';

function Skill() {
  return (
    <>
      <Header />

      <section id="skills">
        <h2>🚀 My Skills</h2>

        <div className="skills-container">

          <a href="https://en.wikipedia.org/wiki/React_(software)"  rel="noopener noreferrer">
            <div className="skill-card">
              <DiReact className="icon react" />
              <h3>React</h3>
              <p>
                A powerful <strong>JavaScript library</strong> for building dynamic and interactive user interfaces.
              </p>
            </div>
          </a>

          <a href="https://en.wikipedia.org/wiki/MySQL"  rel="noopener noreferrer">
            <div className="skill-card">
              <DiMysql className="icon mysql" />
              <h3>MySQL</h3>
              <p>
                A reliable <strong>database management system</strong> for storing and managing data.
              </p>
            </div>
          </a>

          <a href="https://en.wikipedia.org/wiki/Figma"  rel="noopener noreferrer">
            <div className="skill-card">
              <SiFigma className="icon figma" />
              <h3>Figma</h3>
              <p>
                A modern <strong>UI/UX design tool</strong> for creating beautiful and user-friendly interfaces.
              </p>
            </div>
          </a>

          <a href="https://en.wikipedia.org/wiki/Next.js"  rel="noopener noreferrer">
            <div className="skill-card">
              <SiNextdotjs className="icon next" />
              <h3>Next.js</h3>
              <p>
                A powerful <strong>React framework</strong> for fast, SEO-friendly applications.
              </p>
            </div>
          </a>

          <a href="https://en.wikipedia.org/wiki/Express.js"  rel="noopener noreferrer">
            <div className="skill-card">
              <SiExpress className="icon express" />
              <h3>Express.js</h3>
              <p>
                A lightweight <strong>backend framework</strong> for building APIs and server logic.
              </p>
            </div>
          </a>

          <a href="https://en.wikipedia.org/wiki/Sass_(stylesheet_language)"  rel="noopener noreferrer">
            <div className="skill-card">
              <DiSass className="icon sass" />
              <h3>Sass</h3>
              <p>
                A <strong>CSS preprocessor</strong> for writing cleaner and reusable styles.
              </p>
            </div>
          </a>

          <a href="https://en.wikipedia.org/wiki/Tailwind_CSS"  rel="noopener noreferrer">
            <div className="skill-card">
              <SiTailwindcss className="icon tailwind" />
              <h3>Tailwind CSS</h3>
              <p>
                A <strong>utility-first CSS framework</strong> for fast UI development.
              </p>
            </div>
          </a>

          <a href="https://en.wikipedia.org/wiki/TypeScript"  rel="noopener noreferrer">
            <div className="skill-card">
              <SiTypescript className="icon ts" />
              <h3>TypeScript</h3>
              <p>
                A <strong>typed superset of JavaScript</strong> for safer and scalable code.
              </p>
            </div>
          </a>

        </div>

        <h2>🛠️ Base Tools</h2>

        <div className="skills-container">

          <a href="https://en.wikipedia.org/wiki/HTML"  rel="noopener noreferrer">
            <div className="skill-card">
              <DiHtml5 className="icon html" />
              <h3>HTML</h3>
              <p>
                The <strong>structure of the web</strong>.
              </p>
            </div>
          </a>

          <a href="https://en.wikipedia.org/wiki/CSS"  rel="noopener noreferrer">
            <div className="skill-card">
              <DiCss3 className="icon css" />
              <h3>CSS</h3>
              <p>
                Used to style and design websites.
              </p>
            </div>
          </a>

          <a href="https://en.wikipedia.org/wiki/JavaScript"  rel="noopener noreferrer">
            <div className="skill-card">
              <DiJavascript className="icon js" />
              <h3>JavaScript</h3>
              <p>
                The <strong>core programming language</strong> of the web.
              </p>
            </div>
          </a>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Skill;