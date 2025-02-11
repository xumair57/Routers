import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Post from "./components/Post";
import Home from "./components/Home";
import Profile from "./components/Profile";

export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <header className="d-flex flex-wrap justify-content-between align-items-center py-3 mb-4">
          <Link to="/Home" className="text-dark text-decoration-none me-auto">
            <span className="fs-4">AppLogo</span>
          </Link>
          <ul className="nav">
            <li className="nav-link"><Link to="/Home" className="nav-link">Home</Link></li>
            <li className="nav-link"><Link to="/Profile" className="nav-link">Profile</Link></li>
            <li className="nav-link"><Link to="/Post" className="nav-link">Post</Link></li>
          </ul>
        </header>
      </div>

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Post" element={<Post />} />
   
        <Route path="/Profile" element={<Profile />} />
      </Routes>
      

      <footer>
        Footer
      </footer>
    </BrowserRouter>
  );
}
