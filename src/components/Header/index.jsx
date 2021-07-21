import { NavLink } from 'react-router-dom';
import SHeader from './styles';

function Header() {
  return (
    <SHeader>
      <div className="header">
        <img
          src="../img/minstrel_logo.png"
          alt="minstrel_logo"
          className="logo"
        />
        <ul className="pages">
          <li>
            <NavLink to="/Home" className="home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/biography" className="biopgraphy">
              Biography
            </NavLink>
          </li>
          <li>
            <NavLink to="/archives" className="archives">
              Archives
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </SHeader>
  );
}
export default Header;
