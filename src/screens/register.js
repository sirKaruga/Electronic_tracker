import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";

export default function useRegister(props) {
  const [data, setData] = useState({
    serial: "",
    model: "",
    owner: "",
    location: "",
  });
  const submit = (e) => {
    e.preventDefault();

    if (
      data.serial !== "" &&
      data.model !== "" &&
      data.owner !== "" &&
      data.id !== "" &&
      data.location !== ""
    ) {
      props.history.push({
        pathname: "/confirm",
        data: data,
      });
    } else {
      alert("you must fill all fields to continue");
    }
  };
  const onchange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Container>
      <Card style={{ width: "80%", marginLeft: "2em" }}>
        <form>
          <h3>Register Elecronic</h3>

          <div className="form-group">
            <label>Serial Number</label>
            <input
              type="text"
              value={data.serial}
              onChange={onchange}
              name="serial"
              className="form-control"
              placeholder="Serial Number"
            />
          </div>

          <div className="form-group">
            <label>Model</label>
            <input
              type="text"
              value={data.model}
              onChange={onchange}
              name="model"
              className="form-control"
              placeholder="Item model"
            />
          </div>

          <div className="form-group">
            <label>Owner Name</label>
            <input
              type="text"
              value={data.owner}
              onChange={onchange}
              name="owner"
              className="form-control"
              placeholder="Enter name of owner"
            />
          </div>

          <div className="form-group">
            <label>ID Number</label>
            <input
              type="text"
              value={data.id}
              onChange={onchange}
              name="id"
              className="form-control"
              placeholder="Enter ID Number"
            />
          </div>

          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              value={data.location}
              onChange={onchange}
              name="location"
              className="form-control"
              placeholder="Enter owner Residence"
            />
          </div>

          <button onClick={submit} className="btn btn-primary btn-block">
            Register
          </button>
        </form>
      </Card>
    </Container>
  );
}
