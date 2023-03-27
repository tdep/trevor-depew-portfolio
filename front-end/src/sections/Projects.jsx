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
            <div id="indicator-labels">

            </div>
            <div id="selector-container">
              
            </div>

          </div>
          <div id="text-container">
            
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