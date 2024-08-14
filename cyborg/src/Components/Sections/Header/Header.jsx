import "./Header.css";
import logo from "../../../assets/images/logo.png";
import NavItem, { NavItemDropdown } from "../../NavItem/NavItem";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark main-cyborg">
      <div className="container-fluid container">
        <a className="navbar-brand" href="#">
          <img src={logo} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <NavItem>
              <a className="nav-link me-2" aria-current="page" href="#">
                Home
              </a>
            </NavItem>
            <NavItem>
              <a className="nav-link me-2" href="#">
                Browse
              </a>
            </NavItem>
            <NavItemDropdown>
              <a
                className="nav-link dropdown-toggle me-2"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Learn more
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </NavItemDropdown>
            <NavItem>
              <a className="nav-link me-2" aria-current="page" href="#">
                Streams
              </a>
            </NavItem>
            <NavItem>
              <a className="nav-link" aria-current="page" href="#">
                Profile
              </a>
            </NavItem>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
