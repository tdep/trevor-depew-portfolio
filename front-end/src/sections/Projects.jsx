import { useEffect, useState } from "react"
import Carousel, { CarouselItem } from "../components/Carousel"

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProjectData()
  },[])

  const getProjectData = async () => {
    const request = await fetch('http://localhost:3000/projects')
    .then((request => request.json()))
    .then((data) => {
      setProjects(data)
      setLoading(false)
    })
    .catch(err => console.log(err))
  }

  if (loading) {
    return (<div>Loading...</div>)
  } else {
    return (
      <div id="projects-container">
        <div id="chasis">
          <div id="screen-container">
            <div id="bar-top" className="black-bar">
              <div id="screen">
                <img 
                  src={projects[0].img}
                  style={{width: "100%",
                          height: "70%"}}
                  />
                <div id="image-efx"></div>
                <div id="screen-efx"></div>
                <div id="screen-flare"></div>
              </div>
            </div>
          </div>
          <div id="control-panel-container">
            <div id="control-panel">
              <div id="selector-indicator-container">
                <h1 id="selector-label">Ch.</h1>
                <div id="selector-container">
                  <div id="selector-container">
                  <div id="indicator">
                    <h1 id="indicator-labels">
                      <span id="pos0">auto</span>
                      <span id="pos1">1</span>
                      <span id="pos2">2</span>
                    </h1>
                  </div>
                    <div id="selector">
                      <div id="handle">
                        ^
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="power-control-container">
                <h1 id="power-label">PWR</h1>
                <div id="switch-light-container">
                  <div id="power-switch-container">
                    <label className="switch" id="power-switch">
                      <input type="checkbox" id="on-off"></input>
                      <span className="slider"></span>
                    </label>
                  </div>
                  <div id="power-light-container">
                    <div id="power-light">
                      <div id="middle-ring">
                        <div id="inner-ring"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="text-container">
              <div id="description-container">
                <div id="title">
                  <h1>{projects[0].title}</h1>
                </div>
                <div id="text">
                  <p>{projects[0].description}</p>
                </div>
              </div>
              <div id="tool-link-container">
                <div id="tool-link-1" className="tool-link">
                  <p>{projects[0].tools.map((tool, i) => {
                    if (i == (projects[0].tools.length) -1) {
                      return (tool)
                    } else {
                      return (`${tool}, `)
                    }
                  })}</p>
                </div>
                <div id="tool-link-2" className="tool-link">
                  <a href={`${projects[0].links.github}`}>GitHub Repository</a>
                </div>
                <div id="tool-link-3" className="tool-link">
                  <a href={`${projects[0].links.tonejs}`}>Tone.js API</a>
                </div>
              </div>
            </div>
          </div>

        </div>
        {/* <Carousel>
        <CarouselItem>
          <TadLab />
        </CarouselItem>
        <CarouselItem>
          <Sequinzer />
        </CarouselItem>
        <CarouselItem>
          <Cheekers />
        </CarouselItem>
      </Carousel> */}

      </div>
    )
  }
}

export default Projects