import NavbarComponent from "../components/Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";

function CategoriesPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/categories")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <>
      <NavbarComponent />
      <div className="table-header">
          
        
        <div className="item-product-title">
          <h3>CATEGORY LIST</h3>
        </div>
        <div>
          <Button className="new-item-button" variant="warning">New Category</Button>
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
      {categories.map((category, index) => {
        return (<tr>
          <td>{index+1}</td>
          <td>{category.name}</td>
          <td>{category.createdAt}</td>
          <td>{category.updatedAt}</td>
          <td>
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

export default CategoriesPage;