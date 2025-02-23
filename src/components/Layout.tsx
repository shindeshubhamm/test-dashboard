import { FC } from "react";
import { FaBell } from "react-icons/fa";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">
        <div className="header__left">
          <div className="logo">HOURS</div>
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="/dashboard" className="nav__link">
                  Dashboard
                </a>
              </li>
              <li className="nav__item">
                <a href="/projects" className="nav__link">
                  Projects
                </a>
              </li>
              <li className="nav__item">
                <a href="/team" className="nav__link">
                  Team
                </a>
              </li>
              <li className="nav__item">
                <a href="/clients" className="nav__link">
                  Clients
                </a>
              </li>
              <li className="nav__item">
                <a href="/time" className="nav__link">
                  Time
                </a>
              </li>
              <li className="nav__item">
                <a href="/reports" className="nav__link">
                  Reports
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header__right">
          <button className="notification-btn">
            <span className="notification-icon">
              <FaBell />
            </span>
          </button>
          <div className="user-profile">
            <img src="/me.png" alt="User Avatar" className="user-profile__avatar" />
            <span className="user-profile__name">Mario</span>
          </div>
        </div>
      </header>
      <main className="layout__main">{children}</main>
    </div>
  );
};

export default Layout;
