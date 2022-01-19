import "./Projects.css"

import tictac from "./Photos/tic-tac.JPG"
import rockPaper from "./Photos/rock-paper.JPG"
import fallingGame from "./Photos/falling-game.JPG"
export function Projects(){
  return <section className="section-projects">
    <br id="section-projects" /><br />
    <div className="projects-title" data-heading="J">
      PROJECTS
    </div> 
    <div id="content">
      <div className="project" >
        <a href="https://github.com/Laurentiu165/Projects/tree/tic-tac-toe" target="_blank">
          <img src={tictac} alt="" />
          <p>Tic-Tac-Toe game</p>
        </a>
      </div>
      <div className="project">
        <a href="https://github.com/Laurentiu165/Projects/tree/Rock-Paper-Scissors" target="_blank">
          <img src={rockPaper} alt=""  />
         <p>Rock Paper Scissors</p>
        </a>
      </div>
      <div className="project">
        <a href="https://github.com/Laurentiu165/Projects/tree/Falling-Ball" target="_blank">
          <img src={fallingGame} alt="" />
          <p>Falling ball</p>
        </a>
      </div>
    </div>

  </section>
}