import { useEffect, useState } from "react";
import "./App.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import EmployeeData from "./EmployeeData";
import Form from "react-bootstrap/Form";

function App() {
  const [data, setData] = useState([]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [jobrole, setJobrole] = useState("");
  const [id, setId] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);

  const handleGetData = () => {
    setData(EmployeeData);
  };
  useEffect(() => {
    handleGetData();
    console.log(data);
  }, []);

  const handleEdit = (id) => {
    const data1 = data.filter((item) => {
      return item.id === id;
    });
    if (data1 !== undefined) {
      console.log(data1);
      setId(id);
      setName(data1[0].name);
      setAge(data1[0].age);
      setEmail(data1[0].email);
      setJobrole(data1[0].jobrole);
      // console.log(data1[0].name)
      // console.log(data1[0].age)
      // console.log(data1[0].email)
      // console.log(data1[0].jobrole)
    }
    setIsUpdate(true);
  };

  const handleDelete = (id) => {
    if (id > 0) {
      if (window.confirm("Are you Sure you want to delete this data ?")) {
        const data1 = data.filter((item) => {
          return item.id !== id;
        });
        setData(data1);
        console.log(data1);
      }
    }
  };

  const handleClear = (e) => {
    e.preventDefault();
    setId("");
    setName("");
    setAge("");
    setEmail("");
    setJobrole("");
    setIsUpdate(false);
  };
  const handleSave = (e) => {
    e.preventDefault();

    if (name && age && email && jobrole) {
      const dt = [...data];
      const newObject = {
        id: EmployeeData.length + 1,
        name: name,
        age: age,
        email: email,
        jobrole: jobrole,
      };
      dt.push(newObject);
      setData(dt);
    } else {
      alert("All fields are required")
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const index = data
      .map((item) => {
        return item.id;
      })
      .indexOf(id);

    const dt = [...data];
    dt[index].name = name;
    dt[index].age = age;
    dt[index].email = email;
    dt[index].jobrole = jobrole;

    setData(dt);
  };

  return (
    <div className="App">
      <div className="form-container">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Job role</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter job role"
              value={jobrole}
              onChange={(e) => setJobrole(e.target.value)}
            />
          </Form.Group>

          {isUpdate === false ? (
            <Button variant="primary" type="submit" onClick={handleSave}>
              Save
            </Button>
          ) : (
            <Button
              style={{ marginLeft: "10px" }}
              variant="primary"
              type="submit"
              onClick={handleUpdate}
            >
              Update
            </Button>
          )}
          <Button
            style={{ marginLeft: "10px" }}
            variant="primary"
            type="submit"
            onClick={handleClear}
          >
            Clear
          </Button>
        </Form>
      </div>

      <div className="table-container">
        <Table striped bordered hover>
          <thead>
            <tr className="table-dark">
              <th>#</th>
              <th>NAME</th>
              <th>AGE</th>
              <th>EMAIL</th>
              <th>JOB ROLE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {data.map((employee, index) => {
              return (
                <>
                  <tr key={employee.email}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.age}</td>
                    <td>{employee.email}</td>
                    <td>{employee.jobrole}</td>
                    <td
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <Button
                        variant="warning"
                        onClick={() => handleEdit(employee.id)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => handleDelete(employee.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default App;
