import { useState, useEffect } from "react"
import { TadLab } from "../components/TadLab"
import { Cheekers } from "../components/Cheekers"
import { Sequinzer } from "../components/Sequinzer"


const Projects = () => {
  const [counter, setCounter] = useState(0)
  const [allProjects, setAllProjects] = useState([TadLab, Cheekers, Sequinzer, 4, 5])
  const limit = allProjects.length

  function decrementProjects() {
    switch (counter) {
      case(counter == 0):
        setCounter(limit - 1);
        break;
      case(counter != 0):
        setCounter(counter -1);
        break;
    }
    console.log(counter)
  }

  function incrementProjects() {
    switch (counter) {
      case(counter == limit - 1):
        setCounter(0);
        break;
      case(counter != limit - 1):
        setCounter(counter + 1)
        break;
    }
    console.log(counter)
  }

  return (
    <div id="projects-container">
        <TadLab />
        <Cheekers />
        <Sequinzer />

      {/* Navigation */}

      <div id="project-nav-container">
        <div className="arrow-container">
          <button id="left-arrow" onClick={decrementProjects}>{"<"}</button>
        </div>
        <div id="projects-list-container">
          <span id="tadlab" className="project-nav-li">TADLAB</span>
          <span id="cheekers" className="project-nav-li">Cheekers</span>
          <span id="sequinzer" className="project-nav-li">Sequinzer-6001</span>
        </div>
        <div className="arrow-container">
          <button id="right-arrow" onClick={incrementProjects}>{">"}</button>
        </div>
      </div>
    </div>
  )

}

export default Projects