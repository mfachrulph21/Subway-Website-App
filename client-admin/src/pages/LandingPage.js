import CarouselLandingPage from "../components/Carousel";
import NavbarComponent from "../components/Navbar";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/items")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItems(data);
      });
  }, []);

  return (
    <>
      <NavbarComponent />
      <CarouselLandingPage />
      <Row>
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
                    <img className="imgItems" src={item.imgUrl} />
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
      </Row>
    </>
  );
}

export default LandingPage;
