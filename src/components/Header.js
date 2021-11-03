import { Link, NavLink } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <Link to="#" className="logo">
          Admin Panel
        </Link>
        <NavLink exact={true} to="/" activeClassName="nav-active">
          Dashboard
        </NavLink>
        <NavLink to="/landing" activeClassName="nav-active">
          Landing
        </NavLink>
        <NavLink to="/services" activeClassName="nav-active">
          Services
        </NavLink>
        <NavLink to="/about" activeClassName="nav-active">
          About
        </NavLink>
        <NavLink to="/contacts" activeClassName="nav-active">
          Contacts
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
