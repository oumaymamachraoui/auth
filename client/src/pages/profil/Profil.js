import React from "react";
import {Card , Button} from 'react-bootstrap'
import { useSelector } from "react-redux";
const Profil = () => {
  const user = useSelector((state)=> state.userReducer.user)
  const token = localStorage.getItem("token")
  return (
    <div>
      {token ? (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{ user && user.name}</Card.Title>
          <Card.Text>
          { user && user.email}
          </Card.Text>
          <Card.Text>
          { user && user.phone}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>) : null}
    </div>
  );
};

export default Profil;
