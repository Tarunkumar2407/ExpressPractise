import React from "react";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const TableData = () => {
  return (
    <div>
      <div className="table-container">
      <Button as={Link} to="/register" className="add-button" variant="primary"><i class="fa-solid fa-plus"></i> Add Student</Button>
        <Table striped bordered hover >
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
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto@gmail.com</td>
              <td>21</td>
              <td>Developer</td>
              <td className="actions">
                <Button as={Link} to="/view/1">
                <i class="fa-solid fa-eye"></i>
                </Button>
                <Button as={Link} to="/edit/1" variant="warning">
                <i class="fa-solid fa-pen-to-square"></i>
                </Button>
                <Button variant="dark">
                <i class="fa-solid fa-trash"></i>
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default TableData;
