import { Container, Row, Col } from 'react-bootstrap';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from "../store/actions/itemActions"
import { useNavigate } from 'react-router-dom'


const Products = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { items } = useSelector((state) => {
    return state
  })

  const formatPrice = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <>
      <Container className='m-auto'>

      <Row style={{padding:50}}>
        {items.map((item, index) => {
          return (
            <Col
              className="col-4 text-center justify-content-center align-item-center"
              onClick={() => {
                navigate(`/products/${item.id}`)
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
                  <h5 className="itemPrice">{formatPrice(item.price)}</h5>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
      </Container>
    </>
  );
}

export default Products;