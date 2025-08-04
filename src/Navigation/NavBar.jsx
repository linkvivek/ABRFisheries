import './nav.css';
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ regions }) => {
   const { pathname } = useLocation();
   const regionFromRoute = pathname.replace('_', ' ').substring(1);

   return (
    <nav className="Navbar">
      <Link to="/" className={regionFromRoute ? '' : 'active'} style={{}}>Home</Link>
        {regions.map((region) => {
          return <Link to={`/${region.replace(' ', '_')}`} className={regionFromRoute === region ? 'active': ''}>{region}</Link>
        })}
    </nav>
  );
};

export default Navbar;