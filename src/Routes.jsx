import { Routes, Route } from "react-router-dom";
import Home from './Home/Home';

const NavRoutes = () => {
    return (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Home />} />
            <Route path="/contact" element={<Home />} />
          </Routes>

    );
};

export default NavRoutes;