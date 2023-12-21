import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link, useParams } from "react-router-dom";

const TableData = () => {
  const {id} = useParams()
  const [getData, setGetData] = useState([]);

  useEffect(() => {
    handleGetAllData();
  }, []);

  const handleGetAllData = async () => {
    const response = await fetch("http://localhost:8000/user/getalldata", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    setGetData(data);
    console.log(data);
  };

  const handleDeleteUser = async (id) => {
    const response = await  fetch(`http://localhost:8000/user/deleteuser/${id}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    })
    const data = await response.json()
    console.log(data)
    handleGetAllData();
  }

  return (
    <>
      <div className="table-container">
        <Button as={Link} to='/register' className="add-button mt-5 mb-2" variant="primary">
          {" "}
          <i class="fa-solid fa-plus"></i>Add User
        </Button>{" "}
        <Table striped bordered hover>
          <thead>
            <tr className="table-dark">
              <th>#</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>AGE</th>
              <th>JOB ROLE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {getData.map((item, id) => {
              return (
                <>
                  <tr>
                    <td>{id + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.age}</td>
                    <td>{item.jobrole}</td>
                    <td className="action">
                      <Button as={Link} to={`/view/${item._id}`} variant="info">
                        <i class="fa-solid fa-eye"></i>
                      </Button>
                      <Button as={Link} to={`/edit/${item._id}`}variant="warning">
                        <i class="fa-solid fa-pen-to-square"></i>
                      </Button>
                      <Button onClick={() => handleDeleteUser(item._id)} variant="danger">
                        <i class="fa-solid fa-trash"></i>
                      </Button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default TableData;
