import React, { useContext } from 'react'
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {

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
    <div>
      <Form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "40rem",
          margin: "0 auto",
          width: "80%",
          boxShadow: "1px 1px 10px 1px black",
          borderRadius: "20px",
          padding: "3rem",
        }}
      >
        <Form.Group className="mb-3">
          <Form.Label className="text-light">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={user?.email}
            onChange={handleChange}
            id="email"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="text-light">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={user?.password}
            onChange={handleChange}
            id="password"
          />
        </Form.Group>

        <button type="submit" className="cssbuttons-io mb-5">
          <span>LOGİN</span>
        </button>
        <br />
        <button onClick={() => navigate("/register")} className="cssbuttons-io">
          <span>REGİSTER</span>
        </button>
      </Form>
    </div>
  );
}

export default Login