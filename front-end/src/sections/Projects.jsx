import Carousel, { CarouselItem } from "../components/Carousel"
import { TadLab } from "../components/TadLab"
import { Sequinzer } from "../components/Sequinzer"
import { Cheekers } from  "../components/Cheekers"

const Projects = () => {

  return (
    <div id="projects-container">
      <Carousel>
        <CarouselItem>
          <TadLab />
        </CarouselItem>
        <CarouselItem>
          <Sequinzer />
        </CarouselItem>
        <CarouselItem>
          <Cheekers />
        </CarouselItem>
      </Carousel>

    </div>
  )

}

export default Projects