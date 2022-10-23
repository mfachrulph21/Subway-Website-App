import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { deleteItem, itemDetail } from "../store/ItemsActions";

export default function RowItem(props) {
  const navigate = useNavigate()
  const {items, formType, setType, handleShow} = props

  const dispatch = useDispatch()

  const formatPrice = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number);
  }

  const handleClickEdit = (e, id) => {
    e.preventDefault()
    dispatch(itemDetail(id))
    navigate(`/editItem/${id}`)
  }


  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      showDenyButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteItem(id))
        Swal.fire('Deleted!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved')
      }
    })
  }

    return (
        <>
        {items.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.Category.name}</td>
                <td>{formatPrice(item.price)}</td>
                <td>{item.User.username}</td>
                <td>
                  <img className="imgTable" src={item.imgUrl} />
                </td>
                <td>
                  <Button className="ingredients-button" variant="success">
                    show ingredients
                  </Button>
                </td>
                <td>
                  <Button className="edit-button" variant="primary" onClick={(e) => handleClickEdit(e, item.id)} >
                    Edit
                  </Button>
                  <Button className="delete-button" variant="danger" onClick={() => handleDelete(item.id)} >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </>
    )
}