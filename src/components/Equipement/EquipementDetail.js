import React from 'react';

const EquipementDetail = ({ equipement }) => {
  return (
    <div className="container mt-4">
      <h2 className="text-primary">Détails de l'Equipement</h2>
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <strong>Nom:</strong> {equipement.nom}
          </div>
          <div className="d-flex justify-content-between">
            <strong>Description:</strong> {equipement.description}
          </div>
          <div className="d-flex justify-content-between">
            <strong>Pays d'origine:</strong> {equipement.pays_d_origine}
          </div>
          <div className="d-flex justify-content-between">
            <strong>Année de fabrication:</strong> {equipement.annee_de_fabrication}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipementDetail;