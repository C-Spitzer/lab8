import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom'; 

const Profile = () => {
  const [userData, setUserData] = useState({}); 

  useEffect(() => {
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');
    const email = localStorage.getItem('email');
    const season = localStorage.getItem('season');

    setUserData({ 
      firstName: firstName || 'N/A',
      lastName: lastName || 'N/A',
      email: email || 'N/A',
      season: season || 'N/A',
    });
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      <p>First Name: {userData.firstName}</p>
      <p>Last Name: {userData.lastName}</p>
      <p>Email: {userData.email}</p>
      <p>Favourite Season: {userData.season}</p> {}
      <Link to="/dashboard">Go to Dashboard</Link> {/* Link to Dashboard */}

    </div>
  );
};

export default Profile;
