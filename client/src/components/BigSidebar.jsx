import React from "react";
import Wrapper from "../assets/wrappers/BigSidebar";
import { useSelector, useDispatch } from "react-redux";
import links from "../utils/links";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
function BigSidebar() {
  const isSidebarOpen = useSelector((state) => state.user.isSidebarOpen);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen
            ? "sidebar-container "
            : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <div className="nav-links">
            {links.map((link) => {
              const { text, path, id, icon } = link;

              return (
                <NavLink
                  to={path}
                  key={id}
                  onClick={() => dispatch(toggleSidebar())}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  <span className="icon">{icon}</span>
                  {text}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default BigSidebar;
