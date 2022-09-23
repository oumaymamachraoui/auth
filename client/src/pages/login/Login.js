import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../JS/actions/users";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [user, setUser] = useState({})
  const handleChange =(e)=>{
    setUser({...user, [e.target.name]: e.target.value})
  }
  const handleUser =(e)=>{
    e.preventDefault();
    dispatch(login(user))
    navigate('/home')
  }

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange}/>
        </Form.Group>

        
        <Button variant="primary" type="submit" onClick={handleUser}>
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
