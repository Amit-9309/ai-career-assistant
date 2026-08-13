import { FaRobot } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <FaRobot />
        <span>AI Career Assistant</span>
      </div>

      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Career Plan</a>
        <a href="#">Resume Analyzer</a>
        <a href="#">Roadmap</a>
      </div>
    </nav>
  );
}

export default Navbar;
