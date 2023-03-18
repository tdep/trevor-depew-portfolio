import Carousel, { CarouselItem } from "../components/Carousel"

const Projects = () => {

  return (
    <div id="projects-container">
      <Carousel>
        <CarouselItem>Item 1</CarouselItem>
        <CarouselItem>Item 2</CarouselItem>
        <CarouselItem>Item 3</CarouselItem>
      </Carousel>

    </div>
  )

}

export default Projects