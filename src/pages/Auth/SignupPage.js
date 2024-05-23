import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    grade: "",
    unite: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "unite" && (isNaN(value) || value < 1 || value > 10)) {
      return;
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");
    try {
      axios
        .post(`${process.env.REACT_APP_API_URL}/users/signup`, formData)
        .then((r) =>
          setSuccessMessage(
            "Inscription réussie. Redirection vers la page de profil...",
          ),
        );
      setTimeout(() => {
        window.location.href = "/profile";
      }, 2000).catch((e) => console.log(e));
    } catch (error) {
      setError("Erreur lors de l'inscription. Veuillez réessayer.");
    }
  };

  return (
    <div className="container" style={{ maxWidth: "600px", marginTop: "2rem" }}>
      <h2>Inscription</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {successMessage && (
        <div className="alert alert-success">{successMessage}</div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nom :</label>
          <input
            type="text"
            className="form-control"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Prénom :</label>
          <input
            type="text"
            className="form-control"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Grade :</label>
          <select
            className="form-select"
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
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Unité :</label>
          <input
            type="number"
            className="form-control"
            name="unite"
            value={formData.unite}
            onChange={handleChange}
            min="1"
            max="10"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Mot de passe :</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          S'inscrire
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
