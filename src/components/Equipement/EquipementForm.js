import React, { useState, useEffect } from 'react';
import Commande from '../Commande/Commande';

const EquipementForm = ({ equipementId }) => {
  const [nom, setNom] = useState('');
  const [description, setDescription] = useState('');
  const [paysOrigine, setPaysOrigine] = useState('');
  const [error, setError] = useState('');
  const [anneeFabrication, setAnneeFabrication] = useState('');
  const [quantite, setQuantite] = useState('');
  const [prixUnitaire, setPrixUnitaire] = useState('');
  const [commandeId, setCommandeId] = useState(null);

  const handleCommandeSelection = (selectedCommandeId) => {
    setCommandeId(selectedCommandeId);
  };

  useEffect(() => {
    if (equipementId) {
      fetch(`${process.env.REACT_APP_API_URL}/equipements/${equipementId}`)
        .then((response) => response.json())
        .then((data) => {
          setNom(data.nom);
          setDescription(data.description);
          setPaysOrigine(data.pays_d_origine);
          setAnneeFabrication(data.annee_de_fabrication);
        })
        .catch((error) => {
          console.error('Erreur lors du chargement de l équipement:', error);
        });
    }
  }, [equipementId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nom || !description || !paysOrigine || !anneeFabrication || !quantite || !prixUnitaire) {
      setError('Veuillez remplir tous les champs.');
      return;
    }

    const currentYear = new Date().getFullYear();
    if (parseInt(anneeFabrication) > currentYear || parseInt(anneeFabrication) < 1900) {
      setError('Année de fabrication invalide.');
      return;
    }

    const url = `${process.env.REACT_APP_API_URL}/equipements/${equipementId || ''}`;
    const method = equipementId ? 'PUT' : 'POST';
    const body = JSON.stringify({
      nom,
      description,
      pays_d_origine: paysOrigine,
      annee_de_fabrication: anneeFabrication,
      quantite,
      prix_unitaire: prixUnitaire,
      commande_id: commandeId,
    });

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Equipement créé/mis à jour avec succès :', data);
        window.location.href = '/equipements';
      } else {
        console.error('Erreur lors de la soumission du formulaire :', response.statusText);
      }
    } catch (error) {
      console.error('Erreur lors de la soumission du formulaire :', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="mb-3">
        <label htmlFor="nom" className="form-label">Nom :</label>
        <input
          type="text"
          className="form-control"
          id="nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description :</label>
        <input
          type="text"
          className="form-control"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="paysOrigine" className="form-label">Pays d'origine :</label>
        <input
          type="text"
          className="form-control"
          id="paysOrigine"
          value={paysOrigine}
          onChange={(e) => setPaysOrigine(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="anneeFabrication" className="form-label">Année de fabrication :</label>
        <input
          type="number"
          className="form-control"
          id="anneeFabrication"
          value={anneeFabrication}
          onChange={(e) => setAnneeFabrication(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="quantite" className="form-label">Quantité :</label>
        <input
          type="number"
          className="form-control"
          id="quantite"
          value={quantite}
          onChange={(e) => setQuantite(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="prixUnitaire" className="form-label">Prix unitaire :</label>
        <input
          type="number"
          className="form-control"
          id="prixUnitaire"
          value={prixUnitaire}
          onChange={(e) => setPrixUnitaire(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="commande" className="form-label">Commande :</label>
        {commandeId ? (
          <p>Commande sélectionnée : {commandeId}</p>
        ) : (
          <Commande onCommandeSelect={handleCommandeSelection} />
        )}
      </div>
      <button type="submit" className="btn btn-primary">Soumettre</button>
    </form>
  );
};

export default EquipementForm;