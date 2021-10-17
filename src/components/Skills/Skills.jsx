import "./Skills.css"
import html from "./photos/html2.png"
import css from "./photos/css7.png"
import javascript from "./photos/js.png"
import react from "./photos/react.png"
import github from "./photos/github.jpg"
import photoshop from "./photos/photoshop.png"
export function Skills(){
  return <section className="skills">
    <div className="skills-title" data-heading="I">
      SKILLS
    </div>
    <div className="skills-content">
      <div className="skills-first-row">
        <img  src= {html} alt="" />
        <img src= {css} alt="" />
        <img src= {javascript} alt="" />
      </div>
      <div className="skills-second-row">
        <img src= {react} alt="" />
        <img src={github} alt="" />
        <img src={photoshop} alt="" />
      </div>
    </div>

  </section>
}