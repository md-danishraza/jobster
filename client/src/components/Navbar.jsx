import React from "react";
import Wrapper from "../assets/wrappers/Navbar";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaAlignLeft, FaUserCircle, FaCaretDown, FaHome } from "react-icons/fa";
import Logo from "./Logo";
import { clearUser, toggleSidebar } from "../state/features/userSlice";
import { useNavigate } from "react-router-dom";
import { clearValues } from "../state/features/jobSlice";
import { clearAllJobsState } from "../state/features/allJobsSlice";
function Navbar() {
  const { user } = useSelector((store) => store.user);
  // toggle dropdown
  const [showLogout, setShowLogout] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearUser());
    dispatch(clearValues());
    dispatch(clearAllJobsState());
    navigate("/landing");
  };
  return (
    <Wrapper>
      <div className="nav-center">
        <button
          type="button"
          className="toggle-btn"
          onClick={() => dispatch(toggleSidebar())}
        >
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => setShowLogout((prev) => !prev)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={`dropdown ${showLogout && "show-dropdown"}`}>
            <button
              type="button"
              className="dropdown-btn"
              onClick={handleLogout}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Navbar;
