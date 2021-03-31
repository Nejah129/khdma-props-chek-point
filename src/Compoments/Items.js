import React from "react";

const Items = ({ item }) => {
  return (
    <tr>
      <th scope="row">
        <button> Product Info</button>
      </th>
      <td>
        <img style={{ width: "200px" }} src={item.imgSrc} alt={item.name} />
      </td>
      <td>
        <h4>{item.name}</h4>
      </td>
      <td>
        <h4>{item.price}</h4>
      </td>
    </tr>
  );
};

export default Items;
