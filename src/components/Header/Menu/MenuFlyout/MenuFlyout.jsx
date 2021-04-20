import "./MenuFlyout.css"
import React from "react"

export function MenuFlyout(){
  return(
    <div className="app-menu-flyout" onMouseEnter = {()=> {
      document.querySelector(".app-menu-flyout").classList.add("app-menu-flyout--hover")
    }}
      onMouseLeave = {() => {
        document.querySelector(".app-menu-flyout").classList.remove("app-menu-flyout--hover")
        
      }}>
      <p>About</p>
      <p>Tasks</p>
    </div>

  ) 

}