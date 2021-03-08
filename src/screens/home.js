import "./../App.css";
import React, { useState } from "react";
import QRCode from "react-qr-code";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  Row,
  Col,
  Button,
  Navbar,
  Nav,
  Container,
} from "react-bootstrap";
import Imgtrack from "./../share-card.jpg";

function useHome(props) {
  const [qrString, setqrString] = useState("Track your electronic freely");
  const [state, setstate] = useState("");
  const onchange = (e) => {
    setstate(e.target.value);
  };

  const onSearch = () => {
    console.log(state);
  };
  const mystring = qrString;
  return (
    <div style={{ overflow: "hidden" }} className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <i>TrackMe</i>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/register">Register Item</Nav.Link>
          <Nav.Link href="/about">More</Nav.Link>
        </Nav>
        <Nav.Link href="#pextras">Extras</Nav.Link>
      </Navbar>
      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src={Imgtrack} />
            <Card.Body>
              <Card.Title>Our Mandate</Card.Title>
              <Card.Text>
                We register your electronic and id it in case of misplacement or
                loss. Detailing to the persons in posession if the item of the
                property.
              </Card.Text>
              <Button
                onClick={() => {
                  props.history.push({ pathname: "/register" });
                }}
                variant="primary"
              >
                Register Item
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Track by Serial</Card.Title>
              <Card.Text>
                <p>Enter the serial number in the field below</p>
                <input
                  value={state}
                  onChange={onchange}
                  placeholder="s/number"
                />
              </Card.Text>
              <Button onClick={onSearch} variant="primary">
                View
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ height: "auto", marginTop: "1em" }}>
            <Row>
              <Col>
                <QRCode value={mystring} />
              </Col>
              <Col>
                <Card style={{ marginTop: "5em", marginLeft: "0" }}>
                  <Card.Title>We verify your product here</Card.Title>
                  <p>
                    its cheap to buy legit items. You only need to verify the
                    real owner :)
                  </p>
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Card
        style={{
          marginTop: "1em",
          marginBottom: "1em",
          padding: "1em ",
          color: "white",
          background: "black",
        }}
      >
        © Track me 2021
      </Card>
    </div>
  );
}

export default useHome;
