import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import UserDetail from './UserDetail';

const UserDetailPage = () => {
    const {id} = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            axios.get(`${process.env.REACT_APP_API_URL}/users/${id}`)
            .then((r) => setUser(r.data))
            .catch((e) => console.log(e));
        };
        fetchUser();
    }, [id]);

    return (
        <div>
            {user && <UserDetail user={user}/>}
        </div>
    )
}

export default UserDetailPage;