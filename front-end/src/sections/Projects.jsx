import Carousel, { CarouselItem } from "../components/Carousel"
import { TadLab } from "../components/TadLab"
import { Sequinzer } from "../components/Sequinzer"
import { Cheekers } from  "../components/Cheekers"

const Projects = () => {

  return (
    <div id="projects-container">
      <div id="chasis">
        <div id="screen">

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
                <h2></h2>
              </div>
              <div id="text">
                <p></p>
              </div>
            </div>
            <div id="tool-link-container">
              <div id="tool-link-1" className="tool-link">
                <p></p>
              </div>
              <div id="tool-link-2" className="tool-link">
                <p></p>
              </div>
              <div id="tool-link-3" className="tool-link">
                <p></p>
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

export default Projects