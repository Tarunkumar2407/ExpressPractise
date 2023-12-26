import React, { useState, useEffect } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar1 from "./Navbar";
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Edit = () => {
  const {id} = useParams()
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
    const getData = async () => {
      const response = await fetch(`/student/getbyid/${id}`, {
        method: "GET",
        headers: {"Content-type": "application/json"}
      })
      const data = await response.json()
      setInput(data)
      console.log(data)
    }
    useEffect(() => {
      getData()
    },[])

    const handleUpdateData = async (e) => {
      e.preventDefault(e)
      const {name, email, age, jobrole} = input
        const response = await fetch(`/student/updatedoc/${id}`, {
          method: "PATCH",
          headers: {"Content-type": "application/json"},
          body: JSON.stringify({
            name, email, age, jobrole
          })
        })

        const data = await response.json()
        if(response.status === 422){
          toast.error('Error in updating Student', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        }else{
          toast.success('User updated successfully', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        setInput(data)
        console.log(data)
        setTimeout(() => {
        navigate('/')
        },3000)
        }
    }

    
  return (
    <div>
      <Navbar1 />
      <div className="form-container">
        <h2>Student Registration</h2>
        <Form onSubmit={handleUpdateData}>
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
  )
}

export default Edit
