import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

export default function RowCategory(props) {
    const dispatch = useDispatch()
    const {categories} = props

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })
    }

    function handleDelete(id) {
        Swal.fire({
            title: 'Are you sure?',
            showDenyButton: true,
            denyButtonText: `No`,
            confirmButtonText: 'Yes',
          }).then((result) => {
            if (result.isConfirmed) {
              dispatch(deleteCategory(id))
              Swal.fire('Deleted!', '', 'success')
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved')
            }
          })
    }

    return (
        <>
        {categories.map((category, index) => {
            return (
              <tr key={category.id}>
                <td>{index + 1}</td>
                <td>{category.name}</td>
                <td>{formatDate(category.createdAt)}</td>
                <td>{formatDate(category.updatedAt)}</td>
                <td>
                  <Button className="delete-button" variant="danger" onClick={() => handleDelete(category.id)} >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
          </>
    )
}