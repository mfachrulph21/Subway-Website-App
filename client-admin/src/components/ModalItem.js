import { useEffect, useState } from "react";
import { Button, Form, Modal, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/categoriesActions";
import { fetchIngredients, addItems, fetchItems} from "../store/ItemsActions";
import { useNavigate } from 'react-router-dom';
import SelectIngredient from "./selectIngredient";


export default function ModalItem(props) {

const {setFalse, show, formType, setType} = props
const navigate = useNavigate()
const dispatch = useDispatch()

const [error, setError] = useState([])
const [ingredientsChoices, setIngredientsChoices] = useState([{}])
const [itemForm, setItemForm] = useState({
  name: '',
  description: '',
  price: '',
  imgUrl: '',
  categoryId: '',
})


const { ingredients } = useSelector((state) => {
    return state.itemReducer;
})

const { categories } = useSelector((state) => {
    return state.categoryReducer;
})


function changeHandler(e) {
  const {name, value} = e.target
  let newItem = {
    ...itemForm,
  }

  newItem[name] = value 
  setItemForm(newItem)
}

function handleClose(){
  setItemForm({
    name: '',
    description: '',
    price: '',
    imgUrl: '',
    categoryId: '',
  })
  setFalse()
  setError("")
  setType()
  setIngredientsChoices([{}])
}


function submitHandler(e) {
e.preventDefault()

if(!itemForm.name) {
  setError('Please fill name input first')
  return;
} else if (!itemForm.description) {
  setError('Please fill description input first')
  return;
} else if (!itemForm.price) {
  setError('Please fill price input first')
  return;
} else if (!itemForm.categoryId) {
  setError('Please select category option first')
  return;
} else if(!itemForm.imgUrl) {
  setError('Please fill image url input first')
  return;
}else if(!ingredientsChoices && formType === 'add') {
  setError('Please select the ingredients')
  return;
}

if (formType === "add") {
  dispatch(addItems({ ...itemForm, ingredientsChoices }));
} else if (formType === "edit") {
  // dispatch(updateItems(itemForm));
}
  handleClose()
  dispatch(fetchItems())
  navigate(`/`)

}

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
              <h5 className="mb-auto">
              {formType === "add" ? "Create New Item" : "Edit Product"}</h5>
            </Modal.Title>
            
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={submitHandler}>
            {error.length? <Alert variant="danger">{error}</Alert> : ""}
              <Form.Group
                className="mb-1"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter item name"
                  autoFocus
                  name="name"
                  value={itemForm.name}
                  onChange={changeHandler}
                />
              </Form.Group>
              <Form.Group
                className="mb-1"
                controlId="exampleForm.ControlTextarea1"
                placeholder="Enter item description"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" placeholder="Enter item description" rows={2} name="description" value={itemForm.description} onChange={changeHandler}/>
              </Form.Group>
            
            <Form.Group className="mb-1" controlId="exampleForm.ControlInput2">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter item price"
                autoFocus
                name="price"
                value={itemForm.price}
                onChange={changeHandler}
              />
            </Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Select aria-label="Default select example" name="categoryId" onChange={changeHandler}>
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
                  name="imgUrl"
                  value={itemForm.imgUrl}
                  onChange={changeHandler}
                />
              </Form.Group>
              <Form.Group
                className="mb-1"
                controlId="exampleForm.ControlInput4"
              >
                <Form.Label>Ingredients</Form.Label>
          
                <SelectIngredient options={ingredients} isMulti={true} onChangeFunction={(choice) => setIngredientsChoices(choice)} name="ingredientId" /> 
              </Form.Group>
              <Button className="mt-2" variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button className="ms-2 mt-2" type="submit" variant="primary">
              Submit
            </Button>
              </Form> 
          </Modal.Body>
        </Modal>
    )
}