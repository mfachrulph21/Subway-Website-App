import { Button } from "react-bootstrap";

export default function RowItem(props) {

  const {items, formType, setType, handleShow} = props
    return (
        <>
        {items.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.Category.name}</td>
                <td>{item.price}</td>
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
                  <Button className="edit-button" variant="primary" onClick={() => {handleShow('edit')}} >
                    Edit
                  </Button>
                  <Button className="delete-button" variant="danger">
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </>
    )
}