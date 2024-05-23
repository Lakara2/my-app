import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserForm = ({ user, onSubmit }) => {
  const [userData, setUserData] = useState({
    nom: user?.nom || '',
    prenom: user?.prenom || '',
    grade: user?.grade || '',
    unite: user?.unite || ''
  });

  useEffect(() => {
    if (user?._id) {
      setUserData({
        nom: user.nom || '',
        prenom: user.prenom || '',
        grade: user.grade || '',
        unite: user.unite || ''
      });
    }
  }, [user]);

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userData.nom || !userData.prenom || !userData.grade || !userData.unite) {
      setError('Veuillez remplir tous les champs.');
      return;
    }
  
    if (user?._id) {
      axios.put(`${process.env.REACT_APP_API_URL}/users/${user._id}`, userData)
        .then(response => {
          console.log(response.data);
          setMessage('Utilisateur modifié avec succès !');
          setError('');
          onSubmit();
        })
        .catch(error => {
          console.error('Erreur lors de la modification de l\'utilisateur :', error);
          setMessage('');
          setError('Une erreur est survenue lors de la modification de l\'utilisateur.');
        });
    } else {
      axios.post(`${process.env.REACT_APP_API_URL}/users`, userData)
        .then(response => {
          console.log(response.data);
          setMessage('Utilisateur ajouté avec succès !');
          setError('');
          onSubmit();
        })
        .catch(error => {
          console.error('Erreur lors de l\'ajout de l\'utilisateur :', error);
          setMessage('');
          setError('Une erreur est survenue lors de l\'ajout de l\'utilisateur.');
        });
    }
  };  

  return (
    <div className="container mt-4">
      <h2>{user?._id ? 'Modifier' : 'Ajouter'} un utilisateur</h2>
      {message && <div className="alert alert-success">{message}</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nom">Nom :</label>
          <input type="text" className="form-control" id="nom" name="nom" value={userData.nom} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="prenom">Prénom :</label>
          <input type="text" className="form-control" id="prenom" name="prenom" value={userData.prenom} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="grade">Grade :</label>
          <input type="text" className="form-control" id="grade" name="grade" value={userData.grade} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="unite">Unité :</label>
          <input type="text" className="form-control" id="unite" name="unite" value={userData.unite} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">{user?._id ? 'Modifier' : 'Ajouter'}</button>
      </form>
    </div>
  );
};

export default UserForm;