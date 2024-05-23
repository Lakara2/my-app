import React from "react";

const UserDetail = ({ user }) => {
  return (
    <div className="container mt-4">
      <h2 className="text-primary">Détails de l'Utilisateur</h2>
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <strong>ID:</strong> {user._id}
          </div>
          <div className="d-flex justify-content-between">
            <strong>Version:</strong> {user.__v}
          </div>
          <div className="d-flex justify-content-between">
            <strong>Nom:</strong> {user.nom}
          </div>
          <div className="d-flex justify-content-between">
            <strong>Prénom:</strong> {user.prenom}
          </div>
          <div className="d-flex justify-content-between">
            <strong>Grade:</strong> {user.grade}
          </div>
          <div className="d-flex justify-content-between">
            <strong>Unité:</strong> {user.unite}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
