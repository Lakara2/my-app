import React, { useState, useEffect } from 'react';

const Commande = ({ onCommandeSelect }) => {
  const [commandes, setCommandes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/commandes`)
      .then((response) => response.json())
      .then((data) => {
        setCommandes(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erreur lors du chargement des commandes:', error);
        setError('Erreur lors du chargement des commandes');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Chargement en cours...</p>;
  }

  if (error) {
    return <p>Erreur : {error}</p>;
  }

  return (
    <div className="mb-3">
      <label htmlFor="commande" className="form-label">Sélectionnez une commande :</label>
      <select id="commande" className="form-select" onChange={(e) => onCommandeSelect(e.target.value)}>
        <option value="">Sélectionnez une commande</option>
        {commandes.map((commande) => (
          <option key={commande.id} value={commande.id}>
            {commande.id} - {commande.user_id} - {commande.date}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Commande;