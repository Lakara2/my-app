import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProfilePage = () => {
  const [userData, setUserData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        axios.get(`${process.env.REACT_APP_API_URL}/profile`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((r) => setUserData(r.data))
        .catch((e) => console.log(e));
      } catch (error) {
        setError('Une erreur s\'est produite lors de la récupération des données utilisateur.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container" style={{ maxWidth: '600px', marginTop: '2rem' }}>
      <h2>Profil de l'utilisateur</h2>
      <p><strong>Nom:</strong> {userData.nom}</p>
      <p><strong>Prénom:</strong> {userData.prenom}</p>
      <p><strong>Grade:</strong> {userData.grade}</p>
      <p><strong>Unité:</strong> {userData.unite}</p>
    </div>
  );
};

export default ProfilePage;
