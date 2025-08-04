import { Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import Region from './Regions/Region';

const NavRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:region" element={<Region />} />
    </Routes>
  );
};

export default NavRoutes;
