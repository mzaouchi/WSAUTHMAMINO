import { Carousel } from "react-bootstrap"
const Home=()=>{
    return(
      <Carousel>
      <Carousel.Item>
        <img
        style={{height:"70%"}}
          className="d-block w-100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Lucky_Strike_logo.svg/1200px-Lucky_Strike_logo.svg.png"
          alt="First slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{height:"70%"}}
          className="d-block w-100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Lucky_Strike_logo.svg/1200px-Lucky_Strike_logo.svg.png"
          alt="Second slide"
        />

        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{height:"70%"}}
          className="d-block w-100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Lucky_Strike_logo.svg/1200px-Lucky_Strike_logo.svg.png"
          alt="Third slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )
}
export default Home