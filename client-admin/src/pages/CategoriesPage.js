import NavbarComponent from "../components/Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Table, Modal, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, addCategory } from "../store/categoriesActions";
import RowCategory from "../components/RowCategory";

function CategoriesPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [error, setError] = useState([]);
  const [categoryInput, setCategoryInput] = useState({
    name: "",
  });

  function handleClose() {
    setCategoryInput({
      name: "",
    });
    setShow(false);
    setError("");
  }

  // const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(categoryInput, "<<<<<<<<");

  const { categories } = useSelector((state) => {
    return state.categoryReducer;
  });

  function changeHandler(e) {
    const { name, value } = e.target;
    let newCategoryInput = {
      ...categoryInput,
    };

    newCategoryInput[name] = value;
    setCategoryInput(newCategoryInput);
  }

  function submitHandler(e) {
    e.preventDefault();

    if (!categoryInput.name) {
      setError("Please fill name input first");
      return;
    }

    dispatch(addCategory({ ...categoryInput}));
    handleClose();
    navigate(`/categories`);
  }

  useEffect(() => {
    dispatch(fetchCategories())
      .then((response) => {
        if (response.error) {
          throw response;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="table-header">
        <div className="item-product-title">
          <h3>CATEGORY LIST</h3>
        </div>
        <div>
          <Button
            className="new-item-button"
            variant="warning"
            onClick={handleShow}
          >
            New Category
          </Button>
        </div>
      </div>
      <div className="table-div">
        <Table striped>
          <thead>
            <tr>
              <th>NO</th>
              <th>NAME</th>
              <th>CREATED AT</th>
              <th>UPDATED AT</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            <RowCategory categories={categories} />
          </tbody>
        </Table>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h5 className="mb-auto">Create New Category</h5>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={submitHandler}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter category name"
                  autoFocus
                  name="name"
                  value={categoryInput.name}
                  onChange={changeHandler}
                />
              </Form.Group>
              <Button
                className="mt-2"
                variant="secondary"
                onClick={handleClose}
              >
                Close
              </Button>
              <Button type="submit" className="ms-2 mt-2" variant="primary">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default CategoriesPage;
