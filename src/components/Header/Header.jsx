import { AppLogo } from "../AppLogo/AppLogo"
import "./Header.css"

export function Header(){
  return <div className="app-header">
    <AppLogo />
    <p>To Do List</p>
  </div>
}