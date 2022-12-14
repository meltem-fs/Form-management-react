import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function BasicExample() {
 
  const navigate = useNavigate()
  const {user,setUser} = useContext(AuthContext)

 const handleChange = (e) => {
   setUser({
     ...user,
     [e.target.id]: e.target.value,
   });
   console.log(user);
 };

 const handleSubmit = (e) => {
   e.preventDefault();
   setUser({...user,login:true});
   navigate("/team")
 }


  return (
    <Form
    onSubmit={handleSubmit}
      style={{
        maxWidth: "40rem",
        margin: "0 auto",
        width: "80%",
      }}
    >
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={user?.firstname}
          id="firstname"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Surname</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter surname"
          value={user?.surname}
          id="surname"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter number"
          value={user?.phonenumber}
          onChange={handleChange}
          id="phonenumber"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Country</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter country"
          value={user?.country}
          onChange={handleChange}
          id="country"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={user?.email}
          onChange={handleChange}
          id="email"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={user?.password}
          onChange={handleChange}
          id="password"
        />
      </Form.Group>

      <button type="submit" className="cssbuttons-io">
        <span>LETS BEGİN</span>
      </button>
    </Form>
  );
}

export default BasicExample;
