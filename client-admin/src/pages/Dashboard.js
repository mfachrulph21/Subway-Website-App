import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Table } from "react-bootstrap";
import { fetchItems} from "../store/ItemsActions/index";
import ModalItem from "../components/ModalItem";
import RowItem from "../components/RowItem";


export default function Dashboard() {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [formType, setFormType] = useState("")


  const setFalse = () => {
    setShow(false)
  }

  const handleShow = (add) => {
    setShow(true);
    setFormType(add)
  }

  const setType = () => {
    setFormType("")
  }

  const { items } = useSelector((state) => {
    return state.itemReducer;
  });


  useEffect(() => {
    dispatch(fetchItems())
      .then((response) => {
        if (response.error) {
          throw response;
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <>
      <div className="table-header">
        <div className="item-product-title">
          <h3>ITEM LIST</h3>
        </div>
        <div>
          <Button
            className="new-item-button"
            variant="warning"
            onClick={() => {handleShow('add')}}
          >
            New Item
          </Button>
        </div>
      </div>
      <div className="table-div">
        <Table striped>
        <thead>
          <tr>
            <th>NO</th>
            <th>NAME</th>
            <th>CATEGORY</th>
            <th>PRICE</th>
            <th>CREATED BY</th>
            <th>IMAGE</th>
            <th>INGREDIENTS</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          <RowItem items={items} formType={formType}  setType={setType}  handleShow={handleShow}/>  
        </tbody>
      </Table>
        <ModalItem setFalse={setFalse} show={show} formType={formType} setType={setType}/>
      </div>
    </>
  );
}

// handleClose={handleClose} //84