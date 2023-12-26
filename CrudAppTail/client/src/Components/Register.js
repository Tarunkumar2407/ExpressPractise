import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar1 from "./Navbar";
import { ToastContainer, toast } from 'react-toastify';
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
       setInput(preVal => {
        return {
            ...preVal,
            [name]: value
        }
       })
    }

    const handleRegister = async (e) => {
        e.preventDefault()
        const {name, email, age, jobrole} = input
        const response = await fetch("/student/createdoc", {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                name, email, age, jobrole
            })
        })
        const newUser = response.json()
        console.log(newUser)
        if(response.status === 422){
            toast.error("Error in adding data", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }else{
            toast.success('Data Added Successfully', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                setTimeout(() => {
                    navigate('/')
                }, 3000)
        }
    }
  return (
    <div>
      <Navbar1 />
      <div className="form-container">
        <h2>Student Registration</h2>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control onChange={handleInput} type="text" value={input.name} name="name" placeholder="Enter Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={handleInput} value={input.email} name="email" type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Age</Form.Label>
            <Form.Control onChange={handleInput} value={input.age} name="age" type="number" placeholder="Enter age" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Job role</Form.Label>
            <Form.Control onChange={handleInput} value={input.jobrole} name="jobrole" type="text" placeholder="Enter job role" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
