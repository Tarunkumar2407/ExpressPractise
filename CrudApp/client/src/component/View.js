import React, {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Navbar1 from "./Navbar";
import Image from 'react-bootstrap/Image';
import { Link, useParams } from "react-router-dom";

const View = () => {
  const [getUser, setGetUser] = useState([])
  const {id} = useParams()

  const handleGetUser = async () => {
    const response = await fetch(`http://localhost:8000/user/getuser/${id}`, {
      method: "GET",
      headers: {"Content-type": "application/json"}
    })
    const data = await response.json()
    console.log(data)
    setGetUser(data)
  }

  useEffect(() => {
    handleGetUser()
  },[])

  return (
    <div>
      <Navbar1 />
      <h1 >Welcome {getUser.name}</h1>
      <Card className="card" style={{ width: "25rem" }}>
        <Card.Body>
        <Image src="data:image/jpeg;base64,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" roundedCircle />

          <Card.Title>PROFILE</Card.Title>
        <h2>Name: {getUser.name}</h2>
         <h2>Age: {getUser.age} </h2>
         <h2>Email: {getUser.email}</h2>
         <h2>Jobrole: {getUser.jobrole}</h2>
          <Button variant="primary" as={Link} to="/">Go to Home</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default View;
