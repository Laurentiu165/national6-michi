import "./MenuButton.css"
import menuSvg from "./menu.svg"
 
export function MenuButton(){
   return <div className="app-menu-button"
   onMouseEnter = {()=> {
    document.querySelector(".app-menu-flyout").classList.add("app-menu-flyout--hover")
  }}
    onMouseLeave = {() => {
      document.querySelector(".app-menu-flyout").classList.remove("app-menu-flyout--hover")
      
    }}>
    <img src={menuSvg} alt="" className="menu-button-img"/>
  </div>
  
}