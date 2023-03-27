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
                <img src={projects[0].img} />
                <div id="image-efx"></div>
                <div id="screen-efx"></div>
                <div id="screen-flare"></div>
              </div>
            </div>
          </div>
          <div id="control-panel">
            <div id="indicator-container">
              <div id="a">auto</div>
              <div id="one">1</div>
              <div id="two">2</div>
              <div id="three">3</div>
              <div id="selector-container">
                <div id="selector">
                  <div id="handle">
                  </div>
                </div>
              </div>
            </div>
            <div id="text-container">
              <div id="description-container">
                <div id="title">
                  <h2>{projects[0].title}</h2>
                </div>
                <div id="text">
                  <p>{projects[0].description}</p>
                </div>
              </div>
              <div id="tool-link-container">
                <div id="tool-link-1" className="tool-link">
                  <p>{projects[0].tools[0]}</p>
                </div>
                <div id="tool-link-2" className="tool-link">
                  <p>{projects[0].tools[1]}</p>
                </div>
                <div id="tool-link-3" className="tool-link">
                  <p>{projects[0].tools[2]}</p>
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