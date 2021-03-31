import React from "react";
import { Table } from "react-bootstrap";
import Items from "./Items";

const ItemList = ({ itemArray }) => {
  return  (
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Picture</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {
           itemArray.map(item => <Items item={item}/>)
          }
        </tbody>
      </Table>
     )

};

export default ItemList;
