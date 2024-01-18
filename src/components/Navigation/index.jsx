import "./style.scss";
// import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import Content from "./Content"
import PodContent from "./PodContent";

import Onthefooter from "./Onthefooter";
function Navigation() {
  return (
    <>
      <header>
        <Nav />
      </header>

      <Content />
      <PodContent />
      <Onthefooter />

      <div className="Footer">
        <Footer />
      </div>
    </>
  );
}

export default Navigation;
