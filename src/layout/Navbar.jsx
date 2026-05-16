import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const getLinkClass = ({ isActive }) =>
    isActive ? 'nav-link active' : 'nav-link';

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <NavLink to="/" className={getLinkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={getLinkClass}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={getLinkClass}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={getLinkClass}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
