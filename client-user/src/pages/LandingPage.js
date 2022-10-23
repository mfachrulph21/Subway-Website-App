import CarouselLandingPage from "../components/Carousel";

function LandingPage() {
  return (
    <>
      {/* <NavbarComponent /> */}
      <CarouselLandingPage />
      {/* <Row style={{padding:50}}>
        {items.map((item, index) => {
          return (
            <Col
              className="col-4 text-center justify-content-center align-item-center"
              onClick={() => {
                navigate("/")
              }}
            >
              <div className="card__box">
                <div className="card__box__img">
                    <img className="imgItems" src={item.imgUrl} alt="Items" />
                </div>
                <div className="card__box__title">
                  <h4>{item.name.toUpperCase()}</h4>
                </div>
                <div className="card__box__price">
                  <h5 className="itemPrice">{item.price}</h5>
                </div>
              </div>
            </Col>
          );
        })}
      </Row> */}
    </>
  );
}

export default LandingPage;
