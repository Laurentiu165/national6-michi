import "./Home.css"

import facebook from "./facebook.svg"
import github from "./github.svg"
import linkedin from "./linkedin.svg"


export function Home(){
return <section id="section-home">
<div className="max-width">
  <div className="animated-title">
    <div className="text-top">
      <div>
        <span>Hello, my name is</span>
        <span>Michi Laurentiu-Bogdan</span>
      </div>
    </div>
    <div className="text-bottom">
      <div>And I'm a Web Developer!</div>
    </div>
  </div>
  <div className="icons">
    <a href="https://www.facebook.com/laurentiu.michi" target="_blank">
      <img src={facebook} alt=""/>
    </a>
    <a href="https://github.com/Laurentiu165/" target="_blank">
      <img src={github} alt=""/>
    </a>
    <img src={linkedin} alt=""/>
  </div>
</div>
</section>
}