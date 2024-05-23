import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const EquipementList = () => {
  const [equips, setEquips] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        axios
          .get(`${process.env.REACT_APP_API_URL}/equipements`)
          .then((r) => setEquips(r.data))
          .catch((e) => console.log(e));
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des équipements :",
          error,
        );
      }
    };
    fetch();
  }, []);

  const handleDelete = async (equipementId) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cet équipement ?")) {
      try {
        axios
          .delete(
            `${process.env.REACT_APP_API_URL}/equipements/${equipementId}`,
          )
          .then((r) =>
            setEquips(
              equips.filter((equipement) => equipement._id !== equipementId),
            ),
          )
          .catch((e) => console.log(e));
      } catch (error) {
        console.error("Erreur lors de la suppression de l'équipement :", error);
      }
    }
  };

  return (
    <div className="container mt-4">
      <h2>Liste des équipements</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Nom</th>
            <th className="d-flex justify-content-end pr-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {equips.map((equipement) => (
            <tr key={equipement._id}>
              <td>{equipement.nom}</td>
              <td className="d-flex justify-content-end">
                <Link
                  to={`/equipements-form/${equipement._id}`}
                  className="btn btn-outline-success m-1"
                >
                  Modifier
                </Link>
                <Link
                  to={`/equipements/${equipement._id}`}
                  className="btn btn-outline-primary m-1"
                >
                  Voir détails
                </Link>
                <button
                  className="btn btn-outline-danger m-1"
                  onClick={() => handleDelete(equipement._id)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EquipementList;
