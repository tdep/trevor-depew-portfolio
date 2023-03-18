import { useState, useEffect } from "react"


const Projects = () => {
  let i = 0
  // const allProjects = document.getElementsByClassName("project")
  // const limit = allProjects.length
  
  function handleIterators(e) {
    let button, allProjects, limit
    button = e.target.id
    allProjects = document.getElementsByClassName("project")
    limit = allProjects.length

    if (button == "left-arrow") {
      if (i <= 0) {
        console.log("stahhp")
      } else {
        i --
        console.log(i)
      }
    } else if (button == "right-arrow") {
      if (i >= limit) {
        console.log("STAHHP")
      } else {
        i ++
        console.log(i)
      }
    }
  }

  return (
    <div id="projects-container">

      {/* TADLAB */}

      < div id="tadlab" className="project" >
        <div className="project-image-text-container">
          <div className="project-image-container">
            <img className="project-image" />
          </div>
          <div className="project-text-container">
            <div className="project-title-container">
              <h1>TADLAB</h1>
            </div>
            <div className="project-description-container">
              <div className="description">
                <p>Blah Blah Blah</p>
              </div>
              <div className="project-tools">
                <p>Tools:</p>
                <ul className="tools">
                  <li>Tool 1</li>
                  <li>Tool 2</li>
                  <li>Tool 3</li>
                </ul>
              </div>
              <div className="project-links">
                <a href="#">Link 1 </a>
                <a href="#">Link 2 </a>
                <a href="#">Link 3 </a>
              </div>
            </div>
          </div>
        </div>
      </div >

      {/* Sequinzer */}

      < div id="sequinzer" className="project" >
        <div className="project-image-text-container">
          <div className="project-image-container">
            <img className="project-image" />
          </div>
          <div className="project-text-container">
            <div className="project-title-container">
              <h1>Sequinzer-6001</h1>
            </div>
            <div className="project-description-container">
              <div className="description">
                <p>Blah Blah Blah</p>
              </div>
              <div className="project-tools">
                <p>Tools:</p>
                <ul className="tools">
                  <li>Tool 1</li>
                  <li>Tool 2</li>
                  <li>Tool 3</li>
                </ul>
              </div>
              <div className="project-links">
                <a href="#">Link 1 </a>
                <a href="#">Link 2 </a>
                <a href="#">Link 3 </a>
              </div>
            </div>
          </div>
        </div>
      </div >

      {/* Cheekers */}

      < div id="cheekers" className="project" >
        <div className="project-image-text-container">
          <div className="project-image-container">
            <img className="project-image" />
          </div>
          <div className="project-text-container">
            <div className="project-title-container">
              <h1>Cheekers</h1>
            </div>
            <div className="project-description-container">
              <div className="description">
                <p>Blah Blah Blah</p>
              </div>
              <div className="project-tools">
                <p>Tools:</p>
                <ul className="tools">
                  <li>Tool 1</li>
                  <li>Tool 2</li>
                  <li>Tool 3</li>
                </ul>
              </div>
              <div className="project-links">
                <a href="#">Link 1 </a>
                <a href="#">Link 2 </a>
                <a href="#">Link 3 </a>
              </div>
            </div>
          </div>
        </div>
      </div >



      {/* Navigation */}

      <div id="project-nav-container">
        <div className="arrow-container">
          <button id="left-arrow" onClick={(e) => handleIterators(e)}>{"<"}</button>
        </div>
        <div id="projects-list-container">
          <span id="tadlab" className="project-nav-li">TADLAB</span>
          <span id="cheekers" className="project-nav-li">Cheekers</span>
          <span id="sequinzer" className="project-nav-li">Sequinzer-6001</span>
        </div>
        <div className="arrow-container">
          <button id="right-arrow" onClick={(e) => handleIterators(e)}>{">"}</button>
        </div>
      </div>
    </div>
  )

}

export default Projects