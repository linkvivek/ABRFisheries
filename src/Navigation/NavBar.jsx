import './Nav.css';
import { Link } from "react-router-dom";

const Navbar = ({ regions }) => {
  return (
    <nav className="Navbar">
      <Link to="/" style={{}}>Home</Link>
        {regions.map((region) => {
          return <Link to="/about" style={{}}>{region}</Link>
        })}
    </nav>
  );
};

export default Navbar;