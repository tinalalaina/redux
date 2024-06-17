import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
const Userlist = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);
    const getUsers = async () => {
        const response = await
            axios.get("http://localhost:5000/users");
        setUsers(response.data);
    };
    const deleteUser = async (userId) => {
        await
            axios.delete(`http://localhost:5000/users/${userId}`);
        getUsers();
    }
    return (
        <div>
            <h1 className='title'>Utilisateurs</h1>
            <h2 className='subtitle'>Liste des Utilisateurs</h2>
            <Link to="/users/add" className="button is-primary 
mb-2">Ajouter un nouveau Utilisateur</Link>
            <table className='table is-striped is-fullwidth'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nom</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((users, index) => (
                        <tr key={users.uuid}>
                            <td>{index + 1}</td>
                            <td>{users.name}</td>
                            <td>{users.email}</td>
                            <td>{users.role}</td>
                            <td>
                                <Link to={`/users/edit/${users.uuid}`}
                                    className="button is-small is-info">Modifier </Link>
                                <button className="button is-small 
is-danger" onClick={() => deleteUser(users.uuid)}>Supprimer
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Userlist