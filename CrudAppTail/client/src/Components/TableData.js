import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const TableData = () => {
  const [getData, setGetData] = useState([]);

  const handleGetAllData = async () => {
    const response = await fetch("/student/getalldoc", {
      method: "GET",
      headers: { "Content-type": "application/json" },
    });
    console.log(response);
    const data = await response.json();
    console.log(data); 
    if (response.ok === false) {
      toast.error("Error in Fetching Data", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      setGetData(data);
    }
  };
  useEffect(() => {
    handleGetAllData();
  }, []);

  const handleDelete = async (id) => {
       const response = await fetch(`/student/deletedoc/${id}`, {
        method: "DELETE",
        headers: {"Content-type": "application/json"}
       })
       const data = response.json();
       console.log(data)
       if(response.status === 422){
        toast.error("Error in Deleting data", {
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
        toast.success("Deleted successfully", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          handleGetAllData()
       }
  }

  return (
    <div>
      <div className="table-container">
        <Button
          as={Link}
          to="/register"
          className="add-button"
          variant="primary"
        >
          <i className="fa-solid fa-plus"></i> Add Student
        </Button>
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
            {getData.map((student, index) => {
              return (
                <>
                <tr key={student._id} >
                  <td>{index + 1}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.age}</td>
                  <td>{student.jobrole}</td>
                  <td className="actions">
                    <Button as={Link} 
                    to={`/view/${student._id}`}>
                      <i className="fa-solid fa-eye"></i>
                    </Button>
                    <Button as={Link} to={`/edit/${student._id}`} variant="warning">
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Button>
                    <Button onClick= {() => handleDelete(student._id)} variant="danger">
                      <i className="fa-solid fa-trash"></i>
                    </Button>
                  </td>
                </tr>
                </>
              );
            })}
          </tbody>
        </Table>
      </div>
      <ToastContainer />
    </div>
  );
};

export default TableData;
