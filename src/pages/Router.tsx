import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SectionFavorites from "./Favorites";
import Home from "./Home";
import SectionSearch from "./Search";

const MainRouter = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favorites" element={<SectionFavorites />}></Route>
          <Route path="/search" element={<SectionSearch />}></Route>
        </Routes>
      </Router>
    );
  };
  
  export default MainRouter;