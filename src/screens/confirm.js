import React, { useState, useEffect, Component } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import QRCode from "react-qr-code";
import axios from "axios";
import { Link } from "react-router-dom";

export default class ClassName extends React.Component {
  constructor(props) {
    super();
    this.state = {
      gData: props.location.data,
      apiData: "",
    };
  }

  componentDidMount() {
    axios({
      method: "post",
      url: "http://localhost:9000/",
      data: this.state.gData,
      withCredentials: true,
    }).then((res) => {
      this.setState({ apiData: res.data });
      alert(this.state.apiData.err);
      console.log(res);
    });
  }

  Reg() {
    console.log("onpress");
  }

  render() {
    console.log(this.state.apiData);
    //const [gData, setgData]= useState({prop: props.location.data, apiData:""});
    const data = this.state.gData;
    const stringData = "JSON.stringify(this.props.location.data)";

    return (
      <Container style={{ marginTop: "2em" }}>
        <Card>
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Confirm registered details</Card.Title>
                  <Card.Text>
                    <b>Serial:</b> {this.state.gData.serial}
                    <br />
                    <b>Model:</b> {this.state.gData.model}
                    <br />
                    <b>Owner:</b>
                    {this.state.gData.owner}
                    <br />
                    <b>ID Number:</b>
                    {this.state.gData.id}
                    <br />
                    <b>Location:</b>
                    {this.state.gData.location}
                    <br />
                  </Card.Text>
                  <Button variant="primary">
                    <Link to="/" style={{ color: "white" }}>
                      Finish Registration{" "}
                    </Link>
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
}
