import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const getLinkClass = ({ isActive }) =>
    isActive ? 'nav-link active' : 'nav-link';

  return (
    <nav className="navbar">
      {/* <div className="navbar-logo">
        <NavLink to="/">Portfolio</NavLink>
      </div> */}
      <ul className="navbar-links">
        {/* 1. Add the Home link pointing to "/" */}
        <li>
          <NavLink to="/" className={getLinkClass}>
            Home
          </NavLink>
        </li>
        {/* 2. Change the About link to point to "/about" */}
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
