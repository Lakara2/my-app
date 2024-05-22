import React from 'react';

const UserName = ({ user }) => {
  return (
    <div className="container mt-4">
          <div className="d-flex justify-content-between">
            <strong> {user.nom}</strong>
          </div>
    </div>
  );
};

export default UserName;