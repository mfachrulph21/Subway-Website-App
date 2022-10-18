import CarouselLandingPage from "../components/Carousel";
import NavbarComponent from "../components/Navbar";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function LandingPage() {
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
        return <Col className="col-4 text-center justify-content-center align-item-center" >
            <div>
              <img  className="imgItems" src={item.imgUrl} 
              />
            <div>
                <h4>{item.name.toUpperCase()}</h4>
            </div>
            <div>
            <h5 className="itemPrice">{item.price}</h5>
                  
            </div>
            </div>
        </Col>
      })}
      </Row>
    </>
  );
}

export default LandingPage;
