
import './services.scss';
import Header from '../components/header';
import Footer from '../components/footer';

function Services() {
  return (
    <>
      <Header />

      <section id="services">

        <h2>💼 My Services</h2>

        <div className="services-container">

          {/* Web Development */}
          <div className="service-card">
            <h3>🌐 Full Website Development</h3>
            <p>
              I build modern, fast, and responsive websites using 
              <strong> React.js, Next.js, and Express.js</strong>. 
              Whether you need a portfolio, business website, or web app, 
              I deliver high-performance solutions tailored to your needs.
            </p>
          </div>

          {/* UI/UX Design */}
          <div className="service-card">
            <h3>🎨 UI/UX Design</h3>
            <p>
              Using <strong>Figma</strong>, I design clean and user-friendly interfaces. 
              Your website will not only look beautiful but also provide an excellent 
              user experience that keeps visitors engaged.
            </p>
          </div>

          {/* Backend */}
          <div className="service-card">
            <h3>⚙️ Backend & API Development</h3>
            <p>
              I create secure and scalable backends using <strong>Express.js</strong> 
              and manage data efficiently with <strong>MySQL</strong>. 
              Your application will be fast, stable, and reliable.
            </p>
          </div>

          {/* Responsive Design */}
          <div className="service-card">
            <h3>📱 Responsive Design</h3>
            <p>
              All websites I build are fully responsive, meaning they work perfectly 
              on <strong>mobile, tablet, and desktop</strong>.
            </p>
          </div>

          {/* Optimization */}
          <div className="service-card">
            <h3>⚡ Performance Optimization</h3>
            <p>
              I optimize your website for <strong>speed and SEO</strong> using modern tools 
              like Next.js, ensuring fast loading times and better search engine ranking.
            </p>
          </div>

          {/* Maintenance */}
          <div className="service-card">
            <h3>🛠️ Maintenance & Updates</h3>
            <p>
              I provide ongoing support, updates, and improvements to keep your website 
              secure, modern, and running smoothly.
            </p>
          </div>

        </div>

        {/* HOW IT WORKS */}
        <h2>⚙️ How It Works</h2>

        <div className="process-container">

          <div className="process-step">
            <h3>1️⃣ Contact</h3>
            <p>
              You tell me about your project, your goals, and your ideas.
            </p>
          </div>

          <div className="process-step">
            <h3>2️⃣ Planning</h3>
            <p>
              I analyze your needs and create a clear plan and design structure.
            </p>
          </div>

          <div className="process-step">
            <h3>3️⃣ Design</h3>
            <p>
              I design your website using <strong>Figma</strong> to match your brand.
            </p>
          </div>

          <div className="process-step">
            <h3>4️⃣ Development</h3>
            <p>
              I build your website using modern technologies like React and Next.js.
            </p>
          </div>

          <div className="process-step">
            <h3>5️⃣ Launch</h3>
            <p>
              After testing, your website goes live and is ready for users.
            </p>
          </div>

        </div>

        {/* CTA */}
        <a href="/Contact">
            <div className="cta">
          <h3>🚀 Ready to build your website?</h3>
          <p>Let’s create something amazing together!</p>
        </div>
        </a>

      </section>

      <Footer />
    </>
  );
}

export default Services;