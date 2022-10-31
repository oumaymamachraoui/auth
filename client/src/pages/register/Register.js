import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import {useDispatch } from "react-redux"
import {useNavigate} from "react-router-dom"
import {register} from "../../JS/actions/users"

const Register = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [newUser, setNewUser] = useState({})
  const handleChange =(e)=>{
    setNewUser({...newUser, [e.target.name]: e.target.value})
  }
  const handleUser =(e)=>{
    e.preventDefault();
    dispatch(register(newUser))
    navigate('/home')
  }

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nom </Form.Label>
          <Form.Control type="text" placeholder="nom" name="nom" onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Prenom </Form.Label>
          <Form.Control type="text" placeholder="prenom" name="prenom" onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Adresse </Form.Label>
          <Form.Control type="text" placeholder="adresse" name="adresse" onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Age </Form.Label>
          <Form.Control type="date" placeholder="age" name="age" onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label>Email </Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange}  />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password"  onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>phone </Form.Label>
          <Form.Control type="number" placeholder="Enter phone" name="phone" onChange={handleChange} />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleUser}>
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
