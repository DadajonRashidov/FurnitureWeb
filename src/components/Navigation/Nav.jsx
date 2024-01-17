import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav>
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <div className="link">
        <Link to="/home">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/category">Category</Link>
        <Link to="/about">About Us</Link>
      </div>
      <div className="icon">
        <span>✅</span>
        <span>✅</span>
        <span>✅</span>
      </div>
    </nav>
  );
}

export default Nav;
