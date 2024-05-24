import axios from "axios";
import React, { useEffect, useState } from "react";
import EquipementDetail from "./EquipementDetail";
import { useParams } from "react-router-dom";

const EquipementDetailPage = ({ match }) => {
  const { id } = useParams();
  const [equipement, setEquipement] = useState(null);

  useEffect(() => {
    const fetchEquipement = async () => {
      try {
        axios
          .get(`${process.env.REACT_APP_API_URL}/equipements/${id}`)
          .then((r) => setEquipement(r.data))
          .catch((e) => console.log(e));
      } catch (error) {
        console.error(
          "Erreur lors de la récupération de l'équipement :",
          error,
        );
      }
    };
    fetchEquipement();
  }, [id]);

  return (
    <div>
      {equipement ? (
        <EquipementDetail equipement={equipement} />
      ) : (
        <p>Chargement en cours...</p>
      )}
    </div>
  );
};

export default EquipementDetailPage;
