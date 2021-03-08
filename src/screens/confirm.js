import React from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import QRCode from "react-qr-code";

export default function confirm(props) {
  const data = props.location.data;
  const stringData = JSON.stringify(props.location.data);
  const Reg = () => {
    console.log(data);
  };
  return (
    <Container style={{ marginTop: "2em" }}>
      <Card>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Confirm registered details</Card.Title>
                <Card.Text>
                  <b>Serial:</b> {data.serial}
                  <br />
                  <b>Model:</b> {data.model}
                  <br />
                  <b>Owner:</b> {data.owner}
                  <br />
                  <b>Id:</b> {data.id}
                  <br />
                  <b>Location:</b> {data.location}
                  <br />
                </Card.Text>
                <Button onClick={Reg} variant="primary">
                  Finish Registration
                </Button>
              </Card.Body>
            </Card>
            <div>
              <br />
              If incorrect, press back and rectify before proceeding
            </div>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <div variant="top">
                {" "}
                <QRCode value={stringData} />{" "}
              </div>
              <Card.Text className="App">
                <p>
                  <br />
                  Generated QR Code
                </p>
              </Card.Text>
            </Card>
          </Col>
        </Row>
        <Card
          style={{
            marginTop: "3em",
            marginBottom: "1em",
            padding: "1em ",
            color: "white",
            background: "black",
          }}
        >
          © Track me 2021
        </Card>
      </Card>
    </Container>
  );
}
