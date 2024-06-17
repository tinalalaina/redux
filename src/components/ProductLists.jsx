import React from 'react'
import { useEffect,useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
const ProductLists = () => {
    const [products, setProducts]= useState([]);

    useEffect(()=>{
        getProducts();
    },[]);

    const getProducts = async()=> {
        const response = await axios.get('http://localhost:5000/products');
    setProducts(response.data);
    }
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
            <tbody>
                {products.map((product, index)=>(
  <tr key={product.uuid}>
  <td>{index + 1}</td>
  <td>{product.name}</td>
  <td>{product.price}</td>
  <td>{product.user.name}</td>
  <td>
    <Link to={'/products/edit/${product.uuid'} className="button is-small is-info">Edit</Link>
     </td>
</tr>
                ))}
              
            </tbody>
        </table>
    </div>
  )
}

export default ProductLists