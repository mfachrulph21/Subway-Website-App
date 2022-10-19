import NavbarComponent from "../components/Navbar";
import { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom'

function DetailPage() {
  const [items, setItems] = useState([]);
  const {id} = useParams()

  useEffect(() => {
    fetch(`http://localhost:4000/items/${id}?_expand=author&_expand=category`)
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
      <div>
        <img src={process.env.PUBLIC_URL + '/assets/subway-menu-bg-1.png'} />
      </div>
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

export default DetailPage;