import close from "../assets/icon-menu-close.svg";
import { navLinks } from "../utils";
import { useAppContext } from "../context/AppContext";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar, activeLink, handleActiveLink } =
    useAppContext();
  return (
    <aside
      className={
        isSidebarOpen
          ? "sidebar--container sidebar--open"
          : "sidebar--container"
      }
    >
      <div className="sidebar">
        <div className="sidebar__header">
          <button onClick={closeSidebar} className="close__btn">
            <img src={close} alt="close" />
          </button>
        </div>
        <ul className="sidebar__links">
          {navLinks.map(({ id, link }) => {
            return (
              <li
                onClick={() => {
                  closeSidebar();
                  handleActiveLink(link);
                }}
                key={id}
                className={
                  activeLink == link
                    ? "sidebar__link link--active"
                    : "sidebar__link"
                }
              >
                <a href="#">{link}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
