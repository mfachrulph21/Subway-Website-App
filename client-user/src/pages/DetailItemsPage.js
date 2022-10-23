import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { fetchDetail} from "../store/actions/itemActions"
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

function DetailPage() {
  const { id } = useParams()
  const dispatch = useDispatch()

  const { detail } = useSelector((state) => {
    return state
  })

  const formatPrice = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number);
  }

  console.log(detail, '<<<<<<<<<<<< INI DATA DETAILNYA')


  useEffect(() => {
    dispatch(fetchDetail(id))
  }, []);

  return (
    <>
      <div>
        <img src={process.env.PUBLIC_URL + '/assets/subway-menu-bg-1.png'} />
      </div>
      <Container>

            <Card className="mt-5" sm={8}>
              <Row>
                <Col className="m-auto text-center">
                  <Card.Title className='detailTitle mb-5 mt-5'>
                    <h2 className='text-center'> {detail.name}</h2>
                  </Card.Title>

                  <Card.Img className="ms-5"  src={detail.imgUrl} style={{ width: "400px", height: "400px", objectFit: "cover"}} />

                  <div className="CardDesc m-5">
                    <Card.Text>
                      {detail.description}
                    </Card.Text>
                  </div>
                </Col>

                <Col className="d-flex flex-column mt-5 " sm={4}>
                  <Card style={{ width: '18rem' }} className='mt-5 ItemCategory'>
                    <Card.Title className='m-3 categoryTitle'>{detail.Category?.name}</Card.Title>
                    <ListGroup variant="flush">
                      <ListGroup.Item>{formatPrice(detail.price)}</ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>
              </Row>
            </Card>
      </Container>
    </>
  );
}

export default DetailPage;