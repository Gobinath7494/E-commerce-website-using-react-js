import { Card, Col, Container, Row } from "react-bootstrap";

const Containers = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="text-center" bg="secondary">
            <Card.Body>
              <h1>The Generics</h1>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Containers;
