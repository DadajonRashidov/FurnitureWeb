import "./style.scss";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
function Navigation() {
  return (
    <>
      <header>
        <Nav />
      </header>

      <Outlet />

      <div className="Footer">
        <Footer />
      </div>
    </>
  );
}

export default Navigation;
