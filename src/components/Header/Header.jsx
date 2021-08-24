import { AppLogo } from "../AppLogo/AppLogo"
import "./Header.css"

export function Header(){
  return <div className="app-header">
    <AppLogo />
    <nav class="navbar">
    <div class="max-width">
      <p class="logo">CV</p>
      <ul class="menu">
        <li><a href="#home" class="nav-btn">Home</a></li>
        <li><a href="#about" class="nav-btn">About</a></li>
        <li><a href="#skills" class="nav-btn">Skills</a></li>
        <li><a href="#projects" class="nav-btn">Projects</a></li>
        <li><a href="#contact" class="nav-btn">Contact</a></li>
      </ul>
    </div>
  </nav>
  </div>
}