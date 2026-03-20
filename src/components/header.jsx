import './header.scss';
import { FaFileAlt, FaLinkedin, FaGithub } from 'react-icons/fa'; // react icons
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header id='header'>
      <h1>Hassan Mohammadi</h1>
      <nav>
        <div className='socials'>
          {/* CV */}
          <a
            href="https://drive.google.com/file/d/1XV5Z1Z1Z1Z1Z1Z1Z1Z1Z1Z1Z1Z1Z1Z1Z/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className='soc-icon'
          >
            <FaFileAlt size={32} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className='soc-icon'
          >
            <FaLinkedin size={32} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className='soc-icon'
          >
            <FaGithub size={32} />
          </a>
        </div>

        <div className='links'>
          <Link to='/'>Home</Link>
          <Link to='/Skills'>Skills</Link>
          <Link to='/Services'>Services</Link>
          <Link to='/Contact'>Contact</Link>
          <Link to='/About'>About</Link>
        </div>

        <div className='website-builder'>
          <a href="/Services">Build <br /> your <br /> website !...</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;