import NavbarComponent from "../components/Navbar";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";
import { fetchItems } from '../store/ItemsActions/index'

function Dashboard() {
  const dispatch = useDispatch()
  // const [items, setItems] = useState([]);
  const { items }= useSelector((state) => {
    return state.itemReducer

  })

  // useEffect(() => {
  //   fetch("http://localhost:4000/items?_expand=author&_expand=category")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setItems(data);
  //     });
  // }, []);

  useEffect(() => {
    dispatch(fetchItems())
    .then((response) => {
      if (response.error) {
        throw response
      }
    })
    .catch((error) => {
      console.log(error)
    })
  })

  return (
    <>
      <div className="table-header">
        <div className="item-product-title">
          <h3>ITEM LIST</h3>
        </div>
        <div>
          <Button className="new-item-button" variant="warning">New Item</Button>
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
      {items.map((item, index) => {
        return (<tr key={index}>
          <td>{index+1}</td>
          <td>{item.name}</td>
          <td>{item.category.name}</td>
          <td>{item.price}</td>
          <td>{item.author.username}</td>
          <td><img className="imgTable"src={item.imgUrl}/></td>
          <td>
            <Button className="ingredients-button" variant="success">show ingredients</Button>
            </td> 
          <td>
            <Button className="edit-button" variant="primary"  >Edit</Button>
            <Button className="delete-button" variant="danger" >Delete</Button>
          </td>
        </tr>
        )
      })}
      </tbody>
    </Table>
    </div>

    </>
  );
}

export default Dashboard;
