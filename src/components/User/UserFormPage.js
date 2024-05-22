import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserForm from './UserForm';

const UserFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchUser = async () => {
        axios.get(`${process.env.REACT_APP_API_URL}/users/${id}`)
        .then((r) => setUser(r.data))
        .catch((e) => console.log(e));
      };
      fetchUser();
    }
  }, [id]);

  const handleSubmit = async (userData) => {
    if (id) {
      axios.put(`${process.env.REACT_APP_API_URL}/users/${id}`, userData)
      .then((r) => setUser(r.data))
      .catch((e) => console.log(e));
    } else {
      axios.post(`${process.env.REACT_APP_API_URL}/users`, userData)
      .then((r) => setUser(r.data))
      .catch((e) => console.log(e));
    }
    navigate('/users');
  };

  return (
    <div>
      <UserForm user={user} onSubmit={handleSubmit} />
    </div>
  );
};

export default UserFormPage;