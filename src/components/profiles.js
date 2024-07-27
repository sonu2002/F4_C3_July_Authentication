import React, { useState, useEffect } from 'react';
import './profiles.css';


const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      fetch(`https://dummyjson.com/users/${userId}`)
        .then((response) => response.json())
        .then((data) => setUser(data))
        .catch((error) => console.log('Error fetching user data:', error));
    }
  }, []);

  return (
    <>
      
      <h2>Profile</h2>
      {user ? (
        <div>
          <img src={user.image}  className="profile-avatar" alt="User" />
          <p className="profile-name">Username: {user.username} </p>
          <p>Email: {user.email}</p>
          <p>
           Age: {user.age}
          </p>
          <p>
           Gender: {user.gender}
          </p>
          <p>
           Birth Date: {user.birthDate}
          </p>
          <p>
           SSN: {user.ssn}
          </p>
          <p>
           Eye Color: {user.eyeColor}
          </p>
          {user.hair && (
            <>
              <p>
               Hair Color: {user.hair.color}
              </p>
              <p>
               Hair Type: {user.hair.type}
              </p>
            </>
          )}
          <p>
           Height: {user.height} cm
          </p>
          <p>
           Weight: {user.weight} kg
          </p>
          <p>
           Blood Group: {user.bloodGroup}
          </p>
          <p>
           Phone: {user.phone}
          </p>
          {user.address && (
            <p>
             Address: {user.address.address},{" "}
              {user.address.city}, {user.address.state},{" "}
              {user.address.postalCode}
            </p>
          )}
          {user.bank && (
            <p>
             Bank: Card Type: {user.bank.cardType}, Card
              Number: {user.bank.cardNumber}, Card Expiry:{" "}
              {user.bank.cardExpire}
            </p>
          )}
          <p>
           Domain: {user.domain}
          </p>
          <p>
           MAC Address: {user.macAddress}
          </p>
          <p>
           IP Address: {user.ip}
          </p>
          <p>
           User Agent: {user.userAgent}
          </p>
          <p>
           Weight: {user.weight}
          </p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </>
  );
};

export default Profile;