import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);

  const user_l = localStorage.getItem("user");

  useEffect(() => {
    setUserData(JSON.parse(user_l));
  }, [user_l]);

  return (
    <div className="container" style={{ maxWidth: "600px", marginTop: "2rem" }}>
      <h2>Profil de l'utilisateur</h2>
      <p>
        <strong>Nom:</strong> {userData?.nom}
      </p>
      <p>
        <strong>Prénom:</strong> {userData?.prenom}
      </p>
      <p>
        <strong>Grade:</strong> {userData?.grade}
      </p>
      <p>
        <strong>Unité:</strong> {userData?.unite}
      </p>
    </div>
  );
};

export default ProfilePage;
