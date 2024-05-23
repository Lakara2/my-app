import React, { useState, useEffect } from 'react';
import { Table, Button, Container, Alert } from 'react-bootstrap';
import axios from 'axios';

const SessionManagementPage = () => {
  const [sessions, setSessions] = useState([]);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        axios.get(`${process.env.REACT_APP_API_URL}/users/sessions`)
        .then((r) => 
          setSessions(r.data))
        .catch((e) => console.log(e));
      } catch (error) {
        setError('Erreur lors de la récupération des sessions actives.');
      }
    };
    fetchSessions();
  }, []);

  const handleLogoutSession = async (sessionId) => {
    setError('');
    setSuccessMessage('');
    try {
      axios.post(`${process.env.REACT_APP_API_URL}/logout-session`, { sessionId })
      .then((r) => setUser(r.data))
      .catch((e) => console.log(e));
      setSessions(sessions.filter(session => session.id !== sessionId));
      setSuccessMessage('Session déconnectée avec succès.');
    } catch (error) {
      setError('Erreur lors de la déconnexion de la session. Veuillez réessayer.');
    }
  };

  return (
    <Container style={{ marginTop: '2rem' }}>
      <h2>Gestion des Sessions</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Adresse IP</th>
            <th>Heure de Connexion</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map(session => (
            <tr key={session.id}>
              <td>{session.ipAddress}</td>
              <td>{new Date(session.loginTime).toLocaleString()}</td>
              <td>
                <Button variant="danger" onClick={() => handleLogoutSession(session.id)}>
                  Déconnecter
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default SessionManagementPage;