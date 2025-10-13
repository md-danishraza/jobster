import React from "react";
import SmallSidebar from "../../components/SmallSidebar";
import BigSidebar from "../../components/BigSidebar";
import Navbar from "../../components/Navbar";
import Wrapper from "../../assets/wrappers/SharedLayout";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
function Layout() {
  return (
    <>
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
            <Footer />
          </div>
        </main>
      </Wrapper>
    </>
  );
}

export default Layout;
