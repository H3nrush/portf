import Header from '../components/header'
import Footer from '../components/footer'
import './home.scss'
import myPhoto from '../photos/my-photo.png'
import { DiReact, DiMysql, DiHtml5, DiCss3, DiJavascript, DiSass } from 'react-icons/di';   // Devicons
import { SiNextdotjs, SiExpress, SiFigma, SiTailwindcss, SiTypescript } from 'react-icons/si'; // Simple Icons

function Home() {
  return (
    <>
    <Header />
    <main id='Home'>

      <div className='Hello-World' >
        <h2>Hi, I'm Hassan Mohammadi</h2>
        <h2>a full stack <br /><strong>{"<>"}web Developer{"</>"}</strong></h2>
        <br /><h1 className='scr-down-h1'>⬇️</h1>
      </div>
      <div className='myPhoto-section'>
        <img src={myPhoto} alt="myPhoto" />
      </div>

      <section id="about-me">
          <h2>About Me 🌟</h2>

          <p>
            Hello! I am <strong>Hassan Mohammadi</strong>, a passionate <strong>web developer</strong> with expertise in 
            <strong>React.js, Next.js, Express.js, MySQL, and Figma</strong>. I build modern, high-performance websites that are not only visually stunning but also fast, secure, and scalable. 🚀
          </p>

          <p>
            Using <strong>React.js</strong>, I create dynamic and responsive <strong>user interfaces</strong> that adapt perfectly to all devices. This ensures your users have a smooth and interactive experience, whether they are on desktop, tablet, or mobile. 📱💻
          </p>

          <p>
            With <strong>Next.js</strong>, I can implement <strong>server-side rendering (SSR)</strong> and <strong>static site generation (SSG)</strong>. This means your website will <strong>load faster</strong>, perform better on search engines, and be ready to scale as your audience grows. 🌐⚡
          </p>

          <p>
            On the backend, I use <strong>Express.js</strong> to build <strong>robust APIs</strong> that handle your data efficiently and securely. Paired with <strong>MySQL</strong>, your website will have a reliable database structure for storing and managing all your content and user information. 🛠️💾
          </p>

          <p>
            Design is just as important as functionality. With <strong>Figma</strong>, I craft intuitive and beautiful <strong>UI/UX designs</strong> that reflect your brand identity and keep your visitors engaged. Every button, layout, and animation is thoughtfully designed to create an amazing user experience. 🎨✨
          </p>

          <p>
            Choosing me means you are not just hiring a developer—you are getting a <strong>full-stack professional</strong> who understands both the technical and creative sides of web development. I ensure your website is <strong>fast, secure, scalable, and visually stunning</strong>. 
            Whether it’s a corporate website, an e-commerce platform, or a personal portfolio, I use the latest technologies to deliver a website that stands out from the crowd. 🌟
          </p>

          <p>
            Let’s build a website that <strong>truly represents your brand</strong> and connects with your audience. With my skills in <strong>React.js, Next.js, Express.js, MySQL, and Figma</strong>, I guarantee a modern, reliable, and visually stunning web presence for you! 💻🚀
          </p>
        </section>
<section id='skills'>
  <h2>Tools :</h2>
  <section id='mor-info' className='skills-icons'>
    <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)" title="React.js"  >
      <DiReact size={48} color="#61DBFB" /><br />React
    </a>
    <a href="https://en.wikipedia.org/wiki/MySQL" title="MySQL"  >
      <DiMysql size={48} color="#4479A1" /><br />MySql
    </a>
    <a href="https://en.wikipedia.org/wiki/Figma_(software)" title="Figma"  >
      <SiFigma size={48} color="#F24E1E" /><br />Figma
    </a>
    <a href="https://en.wikipedia.org/wiki/Next.js" title="Next.js"  >
      <SiNextdotjs size={48} color="#000000" /><br />Next.js
    </a>
    <a href="https://en.wikipedia.org/wiki/Express.js" title="Express.js"  >
      <SiExpress size={48} color="#000000" /><br />Express.js
    </a>
    <a href="https://en.wikipedia.org/wiki/Sass_(stylesheet_language)" title="Sass"  >
      <DiSass size={48} color="#CF649A" /><br />Sass
    </a>
    <a href="https://en.wikipedia.org/wiki/Tailwind_CSS" title="Tailwind CSS"  >
      <SiTailwindcss size={48} color="#06B6D4" /><br />Tw CSS
    </a>
    <a href="https://en.wikipedia.org/wiki/TypeScript" title="TypeScript"  >
      <SiTypescript size={48} color="#3178C6" /><br />TS
    </a>
  </section>

  <h2>Base Tools :</h2>
  <section id='base-more-info' className='skills-icons'>
    <a href="https://en.wikipedia.org/wiki/HTML5" title="HTML"  >
      <DiHtml5 size={48} color="#E34C26" /><br />HTML
    </a>
    <a href="https://en.wikipedia.org/wiki/CSS" title="CSS"  >
      <DiCss3 size={48} color="#264DE4" /><br />CSS
    </a>
    <a href="https://en.wikipedia.org/wiki/JavaScript" title="JavaScript"  >
      <DiJavascript size={48} color="#F7DF1E" /><br />JS
    </a>
  </section>
</section>

    </main>
    <Footer />
    </>
  )
}

export default Home