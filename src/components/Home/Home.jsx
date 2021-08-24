import "./Home.css"

export function Home(){

return <section className="home">
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
      <img src="Pictures/facebook.svg" alt=""/>
    </a>
    <a href="https://github.com/Laurentiu165/" target="_blank">
      <img src="Pictures/github.svg" alt=""/>
    </a>
    <img src="Pictures/linkedin.svg" alt=""/>
  </div>
</div>
</section>
}