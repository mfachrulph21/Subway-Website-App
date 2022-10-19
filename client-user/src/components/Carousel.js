import Carousel from 'react-bootstrap/Carousel';

function CarouselLandingPage() {
  return (
    <Carousel>
      <Carousel.Item interval={750}>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + '/assets/carousel-2.png'}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={750}>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + '/assets/carousel-4.png'}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={750}>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + '/assets/carousel-1.jpg'}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselLandingPage;