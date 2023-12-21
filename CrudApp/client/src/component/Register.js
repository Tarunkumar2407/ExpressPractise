import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Navbar1 from "./Navbar";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate()
    const [input, setInput] = useState({
        name: "",
        email: "",
        age: "",
        jobrole: ""
    })

    const handleInput = (e) => {
        console.log(e.target.value)
        const {name, value} = e.target
        setInput((preval) => {
            return{
                ...preval,
                [name]: value
            }
        })
    }

    const handleAddUser = async (e) => {
        e.preventDefault()
        const {name, email, age, jobrole} = input

            fetch('http://localhost:8000/user/createuser', {
            method: 'POST',
            body: JSON.stringify({
              name, email, age, jobrole
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => console.log(json));
            alert("User Added")
            navigate('/')
    }
  return (
    <div>
      <Navbar1 />
      <h1 style={{marginTop: "15px"}}>User Registration</h1>
      <div className="form-container">
        <Form onSubmit={handleAddUser}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" onChange={handleInput} value={input.name} name="name" placeholder="Enter name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" onChange={handleInput} value={input.email} name="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" onChange={handleInput} value={input.age} name="age" placeholder="Enter age" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Job Role</Form.Label>
            <Form.Control type="text" onChange={handleInput} value={input.jobrole} name="jobrole" placeholder="Enter job role" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
