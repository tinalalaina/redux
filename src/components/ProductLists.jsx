import React from 'react'

const ProductLists = () => {
  return (
    <div>
           <h1 className='title'>Produits</h1>
        <h2 className='subtitle'>Liste des produits</h2>
        <table className='table is-striped is-fullwidth'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Nom du produits</th>
                    <th>Prix</th>
                    <th>Créer par</th>
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

export default ProductLists