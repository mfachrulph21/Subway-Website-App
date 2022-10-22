import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { fetchItems} from "../store/ItemsActions/index";
import ModalItem from "../components/ModalItem";
import TabelItem from "../components/TabelItem";


export default function Dashboard() {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            onClick={handleShow}
          >
            New Item
          </Button>
        </div>
      </div>
      <div className="table-div">
        <TabelItem items={items}/>
       
        <ModalItem  handleClose={handleClose}  show={show} />
      </div>
    </>
  );
}

