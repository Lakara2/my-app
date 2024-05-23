import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import axios from 'axios';

const UserProfilePage = () => {
  const [userData, setUserData] = useState({
    nom: '',
    prenom: '',
    grade: '',
    unite: '',
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        axios.get(`${process.env.REACT_APP_API_URL}/users/profile`)
        .then((r) => setUserData(r.data));
      } catch (error) {
        setError('Erreur lors de la récupération des données utilisateur.');
      }
    };
    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/profile`, userData);
      setSuccessMessage('Profil mis à jour avec succès.');
    } catch (error) {
      setError('Erreur lors de la mise à jour du profil. Veuillez réessayer.');
    }
  };

  const handleLogout = () => {
    axios.post(`${process.env.REACT_APP_API_URL}/logout`).then(() => {
      window.location.href = '/login';
    }).catch((error) => {
      setError('Erreur lors de la déconnexion. Veuillez réessayer.');
    });
  };

  return (
    <Container style={{ maxWidth: '600px', marginTop: '2rem' }}>
      <h2>Profil Utilisateur</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="nom">
          <Form.Label>Nom :</Form.Label>
          <Form.Control 
            type="text" 
            name="nom" 
            value={userData.nom} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>

        <Form.Group controlId="prenom">
          <Form.Label>Prénom :</Form.Label>
          <Form.Control 
            type="text" 
            name="prenom" 
            value={userData.prenom} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>

        <Form.Group controlId="grade">
          <Form.Label>Grade :</Form.Label>
          <Form.Control 
            as="select" 
            name="grade" 
            value={userData.grade} 
            onChange={handleChange} 
            required 
          >
            <option value="">Sélectionnez un grade</option>
            <option value="Officier">Officier</option>
            <option value="Sous-Officier">Sous-Officier</option>
            <option value="Caporal">Caporal</option>
            <option value="Soldat">Soldat</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="unite">
          <Form.Label>Unité :</Form.Label>
          <Form.Control 
            type="text" 
            name="unite" 
            value={userData.unite} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>

        <Button variant="primary" type="submit">Mettre à jour</Button>
        <Button variant="secondary" onClick={handleLogout} style={{ marginLeft: '10px' }}>Déconnexion</Button>
      </Form>
    </Container>
  );
};

export default UserProfilePage;