import React from 'react';
import CustomTable from './table/CustomTable';
// import jwt from 'jsonwebtoken';
// import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    return <h1 className='m-3'>You must be logged in to access this page</h1>;
  }
 
//   const navigate = useNavigate();
//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       navigate('/');
//       return;
//     }

//     try {
//       const decodedToken = jwt.verify(token, 'secretOrKey');
//       console.log(decodedToken);
//     } catch (error) {
//       console.error(error);
//       localStorage.removeItem('token');
//       navigate('/');
//     }
//   }, [navigate]);

  return (
    <div>
      {/* <h1>Welcome to the dashboard</h1> */}
      <CustomTable className="mt-5" />
    </div>
  );
};

export default Dashboard;
