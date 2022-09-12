import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";

const MainRouter = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    );
  };
  
  export default MainRouter;