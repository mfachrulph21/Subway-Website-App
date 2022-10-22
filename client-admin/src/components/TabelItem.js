import { Table } from "react-bootstrap";
import RowItem from "./RowItem";

export default function TabelItem({items}) {
    return (
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
          <RowItem items={items} />  
        </tbody>
      </Table>
    )
}