import React, { useEffect, useState } from 'react'
import Form from "react-bootstrap/Form";
import Navbar1 from "./Navbar";
import Button from "react-bootstrap/Button";
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const [input, setInput] = useState({
    name: "",
    email: "",
    age: "",
    jobrole: ""
  });

  const handleInput = (e) => {
    console.log(e.target.value)
    const {name, value} = e.target
    setInput((preVal) => {
      return {
        ...preVal,
        [name]: value
      }
    })
  }

  const handleGetUserData = async () => {
    const response = await fetch(`http://localhost:8000/user/getuser/${id}`, {
      method: "GET",
      headers: {"Content-type": "application/json"}
    })
    const data = await response.json()
    console.log(data)
    setInput(data)
  }

 useEffect(() => {
      handleGetUserData()
 }, [])

 const handleUpdateUserData = (e) => {
      e.preventDefault()
      const {name, email, age, jobrole} = input
        fetch(`http://localhost:8000/user/updateuser/${id}`, {
        method: "PATCH",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({
          name, email, age, jobrole
        })
      })
      .then((response) => response.json())
      .then((data) => setInput(data))
       navigate('/')
 }

  return (
    <div>
    <Navbar1 />
      <h1 style={{marginTop: "15px"}}>Edit User Details</h1>
      <div className="form-container">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" onChange={handleInput} value={input.name} name='name' placeholder="Enter name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" onChange={handleInput} value={input.email} name='email' placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" onChange={handleInput} value={input.age} name='age' placeholder="Enter age" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Job Role</Form.Label>
            <Form.Control type="text" onChange={handleInput} value={input.jobrole} name='jobrole' placeholder="Enter job role" />
          </Form.Group>
          <Button onClick={handleUpdateUserData} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </div>
    </div>
  )
}

export default Edit