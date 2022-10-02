import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SectionFavorites from "./Favorites";
import Home from "./Home";

const MainRouter = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favorites" element={<SectionFavorites />}></Route>
        </Routes>
      </Router>
    );
  };
  
  export default MainRouter;