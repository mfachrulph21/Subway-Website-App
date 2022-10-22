import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/categoriesActions";
import { fetchIngredients } from "../store/ItemsActions";
import SelectIngredient from "./selectIngredient";


export default function ModalItem({handleClose, show}) {

const dispatch = useDispatch()
const [userChoice, setUserChoice] = useState()



const { ingredients } = useSelector((state) => {
    return state.itemReducer;
})

const { categories } = useSelector((state) => {
    return state.categoryReducer;
})

useEffect(() => {
    dispatch(fetchCategories())
      .then((response) => {
        if (response.error) {
          throw response
        }
      })
      .catch((error) => {
        console.log(error)
      })


    dispatch(fetchIngredients())
    .then((response) => {
      if (response.error) {
        throw response
      }
    })
    .catch((error) => {
      console.log(error)
    })
}, [])
    return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h5 className="mb-auto">Create New Item</h5>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-1"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter item name"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-1"
                controlId="exampleForm.ControlTextarea1"
                placeholder="Enter item description"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={2} />
              </Form.Group>
            </Form>
            <Form.Group className="mb-1" controlId="exampleForm.ControlInput2">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter item price"
                autoFocus
              />
            </Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Select Category</option>
              {categories.map((el) => {
                return (
                  <option key={el.id} value={el.id}>{el.name}</option> 
                )
              })}
            </Form.Select>
            <Form.Group
                className="mb-1"
                controlId="exampleForm.ControlInput4"
              >
                <Form.Label>Image Url</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter image url"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-1"
                controlId="exampleForm.ControlInput4"
              >
                <Form.Label>Ingredients</Form.Label>
          
                <SelectIngredient options={ingredients} isMulti={true} onChangeFunction={(choice) => setUserChoice(choice)}  /> 
              </Form.Group>
              
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
    )
}