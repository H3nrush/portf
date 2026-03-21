import './header.scss';
import { FaFileAlt, FaLinkedin, FaGithub, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header id='header'>
      <nav>
        {/* Hamburger Icon */}
        <FaBars
          className='menu-icon'
          onClick={toggleMenu}
        />

        {/* Menu */} 
        <div id='menu' className={menuOpen ? 'open' : ''}>
          <div className='socials'>
            <a
              href="https://drive.google.com/file/d/1XV5Z1Z1Z1Z1Z1Z1Z1Z1Z1Z1Z1Z1Z1Z1Z/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className='soc-icon'
            >
              <FaFileAlt size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/h3nrush/"
              target="_blank"
              rel="noopener noreferrer"
              className='soc-icon'
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href="https://github.com/H3nrush"
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
            <Link to='/Services'>
              Build <br /> your <br /> website!
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;