import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = ({ onSelectUser }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      axios.get(`${process.env.REACT_APP_API_URL}/users`)
        .then((r) => setUsers(r.data))
        .catch((e) => console.log(e));
    };
    fetchUsers();
  }, []);

  const handleDeleteUser = async (userId) => {
    if (
      window.confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ?")
    ) {
      try {
        axios.delete(`${process.env.REACT_APP_API_URL}/users/${userId}`)
          .then((r) => setUsers(r.data))
          .catch((e) => console.log(e));
        setUsers(users.filter((user) => user._id !== userId));
        createToast("success", "Utilisateur supprimé avec succès.");
      } catch (error) {
        console.error(
          "Erreur lors de la suppression de l'utilisateur :",
          error
        );
        createToast(
          "error",
          "Une erreur est survenue lors de la suppression de l'utilisateur."
        );
      }
    }
  };

  const createToast = (type, message) => {
    const notifications = document.querySelector(".notifications");
    if (!notifications) return;

    const toast = document.createElement("li");
    toast.className = `toast ${type}`;
    toast.innerHTML = `<div class="column">
                                       <i class="fa-solid fa-circle-check"></i>
                                       <span>${message}</span>
                                     </div>
                                     <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;
    notifications.appendChild(toast);
    setTimeout(() => removeToast(toast), 5000);
  };

  const removeToast = (toast) => {
    toast.classList.add("hide");
    setTimeout(() => toast.remove(), 500);
  };

  return (
    <div className="container mt-4">
      <h2>Liste des Utilisateurs</h2>
      <ul className="notifications"></ul>
      <table className="table">
        <thead>
          <tr>
            <th>Nom</th>
            <th className="d-flex justify-content-end pr-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.nom}</td>
              <td className="d-flex justify-content-end">
                <Link
                  to={`/users-form/${user._id}`}
                  className="btn btn-outline-success m-1"
                >
                  Modifier
                </Link>
                <Link
                  to={`/users/${user._id}`}
                  className="btn btn-outline-primary m-1"
                >
                  Voir détails
                </Link>
                <button
                  className="btn btn-outline-danger m-1"
                  onClick={() => handleDeleteUser(user._id)}
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

export default UserList;
