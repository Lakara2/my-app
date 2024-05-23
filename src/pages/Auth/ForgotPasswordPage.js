import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Alert, Container } from "react-bootstrap";
import Logo from "../Dashboard/img/logo.png";
import { Link } from "react-router-dom";
const ForgotPasswordPage = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    grade: "",
    unite: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage("");
    setErrorMessage("");
    try {
      axios.post(`${process.env.REACT_APP_API_URL}/reset-password`, formData);
      axios
        .post(`${process.env.REACT_APP_API_URL}/reset-password`, formData)
        .then((r) =>
          setSuccessMessage(
            "Un e-mail de réinitialisation de mot de passe a été envoyé à votre adresse e-mail."
          )
        )
        .catch((e) => console.log(e));
    } catch (error) {
      setErrorMessage(
        "Une erreur est survenue lors de la réinitialisation du mot de passe. Veuillez réessayer."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container style={{ maxWidth: "400px", marginTop: "2rem" }}>
      <Link className="mt-5 mb-5 justify-content-center" to="/">
        <img src={Logo} alt="logo" className="rounded-circle" />
      </Link>
      <h2 className="text-center">Réinitialisation du Mot de Passe</h2>
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      <Form onSubmit={handleResetPassword}>
        <Form.Group controlId="formNom" className="mb-3">
          <Form.Label>Nom :</Form.Label>
          <Form.Control
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            required
            placeholder="Entrez votre nom"
          />
        </Form.Group>
        <Form.Group controlId="formPrenom" className="mb-3">
          <Form.Label>Prénom :</Form.Label>
          <Form.Control
            type="text"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            required
            placeholder="Entrez votre prénom"
          />
        </Form.Group>
        <Form.Group controlId="grade">
          <Form.Label>Grade :</Form.Label>
          <Form.Control
            as="select"
            name="grade"
            value={formData.grade}
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
        <Form.Group controlId="formUnite" className="mb-3">
          <Form.Label>Unité :</Form.Label>
          <Form.Control
            type="number"
            name="unite"
            value={formData.unite}
            onChange={handleChange}
            required
            placeholder="Entrez votre unité"
            min={1}
            max={10}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          block={isLoading.toString()}
          disabled={isLoading}
        >
          {isLoading ? "Réinitialisation..." : "Réinitialiser Mot de Passe"}
        </Button>
      </Form>
    </Container>
  );
};

export default ForgotPasswordPage;
