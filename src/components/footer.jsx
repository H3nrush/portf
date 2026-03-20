import './footer.scss';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer id="footer" className='user-select-none'>
      <div className="footer-container">
        {/* About / Branding */}
        <div className="footer-brand">
          <h2>H3nrush.site</h2>
          <p>Building beautiful experiences on the web.</p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Services">Services</a></li>
            <li><a href="/Skills">Skills</a></li>
            <li><a href="/Contact">Contact</a></li>
          </ul>
        </div>

        {/* Social */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} H3nrush.site , All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;