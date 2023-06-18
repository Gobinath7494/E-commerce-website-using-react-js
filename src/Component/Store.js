import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Music from "./music";

const productsArr = [
  {
    id: "12",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 1,
  },
  {
    id: "23",
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 1,
  },
  {
    id: "34",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
  {
    id: "45",
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    quantity: 1,
  },
];

const Store = () => {
  return (
    <Container
      style={{ textAlign: "center", fontSize: "200%", padding: "2rem 4rem" }}
    >
      <header>
        <h2>Music</h2>
      </header>
      <Row>
        <Col>
          {productsArr.map((item, i) => {
            if (i % 2 === 0)
              return <Music items={item} key={item.id} id={item.id}></Music>;
          })}
        </Col>
        <Col>
          {productsArr.map((item, i) => {
            if (i % 2 !== 0)
              return <Music items={item} key={item.id} id={item.id}></Music>;
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default Store;
