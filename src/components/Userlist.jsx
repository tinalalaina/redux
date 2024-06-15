import React from 'react'

const Userlist = () => {
  return (
    <div>
         <h1 className='title'>Utilisateurs</h1>
        <h2 className='subtitle'>Liste des Utilisateurs</h2>
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
            <body>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </body>
        </table>
    </div>
  )
}

export default Userlist