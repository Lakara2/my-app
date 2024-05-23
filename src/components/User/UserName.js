import React, { useEffect, useState } from 'react';
import axios from "axios";

const UserName = () => {
  

  const { id } = "664e16eca406dab85cea8233";
  const [user, setUser] = useState("invite(e)");

  useEffect(() => {
      const fetchUser = async () => {
          axios.get(`${process.env.REACT_APP_API_URL}/users/${id}`)
              .then((r) => setUser(r.data))
              .catch((e) => console.log(e));
      };
      fetchUser();
  }, [id]);

  return (
    <div className="container mt-4">
          <div className="d-flex justify-content-between">
            <strong> {user.nom}</strong>
          </div>
    </div>
  );
};

export default UserName;