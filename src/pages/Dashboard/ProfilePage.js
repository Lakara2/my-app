import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [token, setToken] = useState(null);

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       console.log(user._id);
  //       const response = await axios.get(`${process.env.REACT_APP_API_URL}/users/${user._id}`, {
  //         headers: {
  //           Authorization: `Bearer ${token}`
  //         }
  //       });
  //       setUserData(response.data);
  //     } catch (error) {
  //       console.log(error);
  //       setError('Une erreur s\'est produite lors de la récupération des données utilisateur.');
  //     } finally {
  //       setLoading(false);
  //     }
  //   );
  useEffect(() => {
    const token_l = localStorage.getItem('token');
    const user_l  = localStorage.getItem("user");
    const user = JSON.parse(user_l);
    setUserData(user);
    setToken(token_l);
  }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>{error}</div>;
  // }

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