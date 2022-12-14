import React from 'react'
import { Form } from 'react-bootstrap';

const Login = () => {
  return (
    <div>
      <Form
        style={{
          maxWidth: "40rem",
          margin: "0 auto",
          width: "80%",
          boxShadow: "1px 1px 10px 1px black",
          borderRadius: "20px",
          padding: "3rem",
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Surname</Form.Label>
          <Form.Control type="text" placeholder="Enter surname" />
        </Form.Group>

        <button className="cssbuttons-io mb-5">
          <span>LOGİN</span>
        </button>
        <br />
        <button className="cssbuttons-io">
          <span>REGİSTER</span>
        </button>
      </Form>
    </div>
  );
}

export default Login