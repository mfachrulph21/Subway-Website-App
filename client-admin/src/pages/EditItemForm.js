import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCategories } from '../store/categoriesActions';
import { editItem } from '../store/ItemsActions';

const EditItemForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { categories } = useSelector((state) => {
    return state.categoryReducer
  })

  const { itemDetail } = useSelector((state) => {
    return state.itemReducer
  })


  useEffect(() => {
    dispatch(fetchCategories())

    setNewItem({
      name: itemDetail.name,
      description: itemDetail.description,
      price: itemDetail.price,
      categoryId: itemDetail.categoryId,
      imgUrl: itemDetail.imgUrl,
    })

  }, [itemDetail])

  const [inputItem, setNewItem] = useState({
    name: itemDetail.name,
    description: itemDetail.description,
    price: itemDetail.price,
    categoryId: itemDetail.categoryId,
    imgUrl: itemDetail.imgUrl,
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newItem = {
      ...inputItem,
    };
    newItem[name] = value;

    setNewItem(newItem);
  }

  const handleEdit = (e) => {
    e.preventDefault()
    dispatch(editItem(inputItem, itemDetail.id))
    navigate(`/`)
  }

  return (
    <>
      <Container>
        <Row className='m-auto mb-5 w-50'>
          <h1 className='text-center m-auto'>Edit Item Form</h1>

              <Col className='mt-2 bg-light p-3'>
                <Form
                  onSubmit={handleEdit}
                >
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      value={inputItem.name}
                      onChange={handleChange}
                      name='name'
                      type="text"
                      placeholder="Enter item name"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                     as="textarea" 
                      rows={3}
                      name='description'
                      value={inputItem.description}
                      onChange={handleChange}
                      placeholder="Enter item description" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      name='price'
                      value={inputItem.price}
                      onChange={handleChange}
                      type="number"
                      placeholder="Enter item price"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Category</Form.Label>
                    <Form.Select
                      name='categoryId'
                      value={inputItem.categoryId}
                      onChange={handleChange}
                    >
                      {
                        categories?.map((category) => {
                          return < option
                            key={category.id}
                            value={category.id}
                          >{category.name}</option>
                        })
                      }
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control
                      name='imgUrl'
                      value={inputItem.imgUrl}
                      onChange={handleChange}
                      type="text"
                      placeholder="Enter image url" />
                  </Form.Group>

                  <div className='mt-2'>
                    <span>
                      <Button
                        onClick={() => navigate(`/`)}
                        variant="warning">Cancel</Button>
                    </span>

                    <span>
                      <Button
                        className='buttonSubmit ms-2' type='submit' variant="success">Submit</Button>
                    </span>
                  </div>
                </Form>
              </Col>
        </Row>
      </Container>
    </>
  )
}

export default EditItemForm;