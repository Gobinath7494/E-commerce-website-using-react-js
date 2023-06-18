import { Modal } from "react-bootstrap";
import Cartitemlist from "./cartitemlist";
import React,{useContext} from "react";
import Cartcontaxt from "../store/context";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Cartitem = (props) => {
  const autctx=useContext(Cartcontaxt)
  return (
    <Modal show={props.show} onHide={props.close}>
      <Modal.Header>
        <Modal.Title>Cartitem</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Cartitemlist item={productsArr}></Cartitemlist>
      </Modal.Body>
      <Modal.Footer style={{display:"flex", justifyContent:"space-between",margin:"0 2rem"}}>
        <div>
          <button onClick={props.close} variant="primary">
            close
          </button>
        </div>
        <div>
          <span>totalamount : </span>
          <span style={{border:"2px solid lightblue"}}>{ autctx.totalamount}</span>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default Cartitem;
