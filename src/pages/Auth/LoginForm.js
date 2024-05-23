import React, { useState, useEffect } from "react";
import { Form, Button, Alert, Container } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_API_URL}/users/login`, formData)
      .then((r) => {
        localStorage.setItem("token", JSON.stringify(r.data.token));
        localStorage.setItem("user", JSON.stringify(r.data.user));
        setSuccess("Connexion réussie!");
        setIsAuthenticated(true);
        navigate("/");
      })
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      console.log(isAuthenticated);
      setSuccess("Vous êtes déjà connecté.");
    }
  }, [isAuthenticated]);

  return (
    <Container style={{ maxWidth: "400px", marginTop: "2rem" }}>
      <h2 className="text-center">Se connecter</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="nom">
          <Form.Label>Nom</Form.Label>
          <Form.Control
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            placeholder="Nom"
            required
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Mot de passe"
            required
          />
        </Form.Group>

        <Button variant="primary mt-4" type="submit">
          Se connecter
        </Button>
      </Form>
    </Container>
  );
};

export default LoginForm;
