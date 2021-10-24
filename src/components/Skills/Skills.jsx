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
    <div className="skills-first-row">
      <div className="skills-content">
        <img src={html} alt="" />
        <p>Advanced Level</p>
      </div>
      <div className="skills-content">
        <img src={css} alt="" />
        <p>Mid Level</p>
      </div>
      <div className="skills-content">
        <img src={javascript} alt="" />
        <p>Advanced Level</p>
      </div>
    </div>
    <div className="skills-second-row">
      <div className="skills-content">
        <img src={react} alt="" />
        <p>Beginner Level</p>
      </div>
      <div className="skills-content">
        <img src={github} alt="" />
        <p>Advanced Level</p>
      </div>
      <div className="skills-content">
        <img src={photoshop} alt="" />
        <p>Advanced Level</p>
      </div>
    </div>
  
  </section>
}