import React from 'react';
import { Table } from 'react-bootstrap';
import './custom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const data = [
  { id: 1, name: 'Aarav', age: 25, city: 'Mumbai', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { id: 2, name: 'Vidhi', age: 30, city: 'Delhi', image: 'https://randomuser.me/api/portraits/women/2.jpg' },
  { id: 3, name: 'Raj', age: 40, city: 'Bengaluru', image: 'https://randomuser.me/api/portraits/men/3.jpg' },
  { id: 4, name: 'Isha', age: 35, city: 'Chennai', image: 'https://randomuser.me/api/portraits/women/4.jpg' }
];

const CustomTable = () => {
  return (
    <div className="table-container mt-5">
      <Table bordered hover style={{ height: '500px', verticalAlign: 'middle'}}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="profile-cell">
                <div className="profile-photo" style={{ backgroundImage: `url(${item.image})` }}></div>
                {item.name}
              </td>
              <td>01/01/1990</td>
              <td>example@example.com</td>
              <td>*********</td>
              <td>
                <FontAwesomeIcon icon={faEdit} className="icon"  />
                <FontAwesomeIcon icon={faTrash} className="icon"  />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CustomTable;