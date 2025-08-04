import { useContext } from 'react';
import { Link, useLocation } from "react-router-dom";
import './navbar.css';
import { DataContext } from '../DataContext';

const Navbar = () => {
  const { pathname } = useLocation();
  const regionFromRoute = pathname.replace('_', ' ').substring(1); // convert route from url back to region name

  const { fisheriesData } = useContext(DataContext);
  const regions = Object.keys(fisheriesData);
  
  return (
    <nav className="navbar">
      <Link to="/" className={!!regionFromRoute ? 'inactive' : 'active'}>Home</Link>
        {regions.map((region) => {
          return (
          <Link
            key={region}
            to={`/${region.replace(' ', '_')}`}
            className={regionFromRoute === region ? 'active': 'inactive'}>
            {region}
          </Link>)
        })}
    </nav>
  );
};

export default Navbar;