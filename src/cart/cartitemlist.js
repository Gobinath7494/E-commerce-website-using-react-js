import React, { useContext } from "react";
import { Table } from "react-bootstrap";
import Cartcontaxt from "../store/context";

const Cartitemlist = () => {
  const autctx = useContext(Cartcontaxt);
  return (
    <div>
      <Table striped="columns">
        <thead>
          <tr>
            <th>Items</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {autctx.item.map((item) => (
            <tr key={item.id}>
              <td><img src={item.imageUrl} alt="there is flower" style={{ maxWidth: "40%", textAlign: "center" }}></img></td>
              <td>${item.price}</td>
              <td>
                <div style={{display:"flex", justifyContent:"space-around"}}>
                  <span >
                    {" "}
                    {item.quantity}{" "}
                  </span>
                  <span>
                    <button> - </button>
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Cartitemlist;
