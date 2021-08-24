
import "./Header.css"

export function Header(){
  return <div className="app-header">
    <nav className="navbar">
    <div className="max-width">
      <p className="logo">CV</p>
      <ul className="menu">
        <li><a href="#home" className="nav-btn">Home</a></li>
        <li><a href="#about" className="nav-btn">About</a></li>
        <li><a href="#skills" className="nav-btn">Skills</a></li>
        <li><a href="#projects" className="nav-btn">Projects</a></li>
        <li><a href="#contact" className="nav-btn">Contact</a></li>
      </ul>
    </div>
  </nav>
  </div>
}