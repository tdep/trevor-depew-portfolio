import { useState, useEffect } from "react"

const Projects = () => {
  
  function decrementList() {
    let i, projectCards, displayCard
    projectCards = document.getElementsByClassName("project")
    for (i = 0; projectCards.length; i++) {
      projectCards[i].style.display = "none"
    }
  }

  function incrementList() {

  }


  return (
    <div id="projects-container">
      <>

        {/* TADLAB */}

        <div id="tadlab" index={0} className="project">
          <div className="project-image-text-container">
            <div className="project-image-container">
              <img className="project-image"/>
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
        </div>

        {/* Cheekers */}

        <div id="cheekers" index={1} className="project">
          <div className="project-image-text-container">
            <div className="project-image-container">
              <img className="project-image"/>
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
        </div>

        {/* Sequinzer-6001 */}

        <div id="sequinzer" index={2} className="project">
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
        </div>
      </>

      {/* Navigation */}

      <div id="project-nav-container">
        <div className="arrow-container">
          <button id="left-arrow" onClick={decrementList}>{"<"}</button>
        </div>
        <div id="projects-list-container">
          <span id="tadlab" index={0} className="project-nav-li">TADLAB</span>
          <span id="cheekers" index={1} className="project-nav-li">Cheekers</span>
          <span id="sequinzer" index={2} className="project-nav-li">Sequinzer-6001</span>
        </div>
        <div className="arrow-container">
          <button id="right-arrow" onClick={incrementList}>{">"}</button>
        </div>
      </div>
    </div>
  )

}

export default Projects