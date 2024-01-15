import { useLocation, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import About from "./About";
import Category from "./Category";
import Home from "./Home";
import Product from "./Product";

function AllComponents(props) {
  const location = useLocation();
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigation />}>
          <Route path="/about" index element={<About />}></Route>
          <Route path="/category" element={<Category />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/product" element={<Product />}></Route>
        </Route>
      </Routes>
    </>
  );
}
export default AllComponents;
