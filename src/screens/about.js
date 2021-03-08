import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";

export default function about() {
  return (
    <Container className="App">
      <Card>
        <Row>
          <Col>
            <Card.Header>System description</Card.Header>
            <p>system worlfuin</p>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}
