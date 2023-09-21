import logo from "../assets/logo.svg";
import menu from "../assets/icon-menu.svg";
import { navLinks } from "../utils";
import { useAppContext } from "../context/AppContext";

const Navbar = () => {
  const { openSidebar, activeLink, handleActiveLink } = useAppContext();
  return (
    <nav className="nav">
      <div className="nav--center content--center">
        <img src={logo} alt="logo" className="logo" />
        <ul className="nav__links">
          {navLinks.map(({ id, link }) => {
            return (
              <li
                onClick={() => handleActiveLink(link)}
                key={id}
                className={
                  activeLink === link ? "nav__link link--active" : "nav__link"
                }
              >
                <a href="#">{link}</a>
              </li>
            );
          })}
        </ul>
        <button onClick={openSidebar} className="menu__btn">
          <img src={menu} alt="menu" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
