import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const FormAddProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    const saveProduct = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/products", {
                name: name,
                price: price
            });
            navigate("/products");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
    return (
        <div>
            <h1 className='title'>Produit</h1>
            <h2 className='subtitle'>Ajouter un nouveau
                produit</h2>
            <div className="card is-shadowless">
                <card-content>
                    <div className="content">
                        <form onSubmit={saveProduct}>
                            <p className='has-text-centered'>{msg}</p>
                            <div className="field">
                                <label className="label"> Nom </label>
                                <div className="control">
                                    <input type="text" className="input"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder='NOM' />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label"> Prix </label>
                                <div className="control">
                                    <input type="text" className="input"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        placeholder='price' />
                                </div>
                            </div>
                            <div className='field'>
                                <div className="control">
                                    <button type="submit" className="button is-success">
                                        Enregistrer
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </card-content>
            </div>
        </div>
    )
}
export default FormAddProduct
